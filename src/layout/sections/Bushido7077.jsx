import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Texture } from "../../components/Texture";
import { useDispatch, useSelector } from "react-redux";
import { connect } from '../../redux/blockchain/blockchainActions';
import { fetchData } from "../../redux/data/dataActions";

import poster from "../../img/poster/2.jpg";

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

const Bushido7077 = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = data.MOTSHolder ? 60000000000000000 :  CONFIG.WEI_COST
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (!data.isPublicSale && newMintAmount > 6 ) {
      newMintAmount = 6;
    }
    if(newMintAmount > 10){
      newMintAmount = 10
    }
    setMintAmount(newMintAmount);
  };


  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <Bushido7077Style>
      <Texture />
      <div className="container">
        <div>
          <h3>Bushido 7077</h3>
          <p>
            <b>7777 Total Supply</b>
            <br />
            <b>Mint price: </b> 0.08 ETH
            <br />
            <b>Perks:</b>
            <br />
          </p>
          <ul>
            <li>
              Holders will get to mint Project Zero for free. Number of mints depends on the number
              of Bushido 7077 they hold.
            </li>
            <li>Eligible for meet up and parties in some cities.</li>
            <li>Early access for Karakuri.</li>
            <li>Ownership and commercial usage rights given to the consumer over their NFT.</li>
          </ul>
          {blockchain.account ? 
          (<div>
            <br/>
            <p>Connected Account: {truncate(blockchain.account.slice(0,8) + '...' + blockchain.account.slice(38,42))}</p>
            <ul>
            {data.isPaused ? <p style={{textDecoration:'none'}}>Sale is currently paused</p> : ''}
            {data.isPublicSale ? <p style={{textDecoration:'none'}}>Public Sale is now OPEN!</p> : ''}
            {data.isWhitelisted ? '' : <p style={{textDecoration:'none'}}>Sale is for Whitelisted and MOTS addresses</p>}
            {data.MOTSHolder > 0 ? <p style={{textDecoration:'none'}}>Welcome MOTS Holder! Enjoy your discounted Bushido</p> : ''}
            <p>Current Tx Limit for Bushido: {data.isPublicSale ? "10" : "6"}</p>
            </ul>
            <br/>
            <button className='mint-btn'onClick={(e) => {
                          e.preventDefault();
                          decrementMintAmount();
                        }}><p>-</p></button>
            <button disabled={!data.isWhitelisted && data.MOTSHolder == 0} className='mint-btn' style={{width:'250px', height:'52px'}} onClick={(e)=> {e.preventDefault();claimNFTs()}}>Mint {mintAmount} Bushido for {data.MOTSHolder > 0 ? (`${mintAmount* 0.06} ETH`) : (`${mintAmount* 0.08} ETH`)} </button>
            <button className='mint-btn' style={{height:'36px', paddingBottom:'35px'}} onClick={(e) => {
                          e.preventDefault();
                          incrementMintAmount();
                        }}>+</button>
            </div>
            ) :
          (<button onClick ={(e) => {e.preventDefault(); dispatch(connect()); getData();}} class="mint-btn" style={{width:'70%', marginTop:'2rem'}}>Connect your MetaMask </button> )}
        </div>
        <div>
          <div className="holder">
            <img src={poster} alt="NFT" />
            
          </div>
        </div>
      </div>
    </Bushido7077Style>
  );
};

export default Bushido7077;

const Bushido7077Style = styled.section`
  padding-top: 70px;
  padding-bottom: 70px;

  .container {
    display: flex;
    > * {
      flex: 1;
    }
  }
  .holder {
    max-width: 513.51px;
    height: 608.84px;
    padding-left: 40px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      > div:first-child {
        order: 2;
      }
    }
    .holder {
      padding-bottom: 40px;
      padding-left: 0;
    }
  }
  @media (max-width: 576px) {
    padding-top: 40px;
    padding-bottom: 40px;
    .holder {
      max-width: 100%;
      height: auto;
    }
  }
`;
