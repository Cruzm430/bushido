import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Texture } from "../../components/Texture";
// import { useDispatch, useSelector } from "react-redux";
// import { connect } from '../../redux/blockchain/blockchainActions';
// import { fetchData } from "../../redux/data/dataActions";

import img from "../../img/poster/MOTS.gif";

const BushidoPlus = () => {
  // const dispatch = useDispatch();
  // const blockchain = useSelector((state) => state.blockchain);
  // const data = useSelector((state) => state.data);
  // const [claimingNft, setClaimingNft] = useState(false);
  // const [feedback, setFeedback] = useState(``);
  // const [mintAmount, setMintAmount] = useState(1);
  // const [success, setSuccess] = useState(false);
  // const [CONFIG, SET_CONFIG] = useState({
  //   CONTRACT_ADDRESS: "",
  //   SCAN_LINK: "",
  //   NETWORK: {
  //     NAME: "",
  //     SYMBOL: "",
  //     ID: 0,
  //   },
  //   NFT_NAME: "",
  //   SYMBOL: "",
  //   MAX_SUPPLY: 1,
  //   WEI_COST: 0,
  //   DISPLAY_COST: 0,
  //   GAS_LIMIT: 0,
  //   MARKETPLACE: "",
  //   MARKETPLACE_LINK: "",
  //   SHOW_BACKGROUND: false,
  // });

  

  // const claimNFTs = () => {
  //   let cost = data.totalSupply <= 70 ? 0 : CONFIG.WEI_COST;
  //   let gasLimit = CONFIG.GAS_LIMIT;
  //   let totalCostWei = String(cost * 1);
  //   let totalGasLimit = String(gasLimit * 1);
  //   setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
  //   setClaimingNft(true);
  //   blockchain.smartContract.methods
  //     .mint(1)
  //     .send({
  //       gasLimit: String(totalGasLimit),
  //       to: CONFIG.CONTRACT_ADDRESS,
  //       from: blockchain.account,
  //       value: totalCostWei,
  //     })
  //     .once("error", (err) => {
  //       console.log(err);
  //         setFeedback('Something went wrong.');
  //         setClaimingNft(false);
  //         var errorMessageInJson = JSON.parse(
  //           err.message.slice(58, err.message.length - 2)
  //         );
  
  //         var errorMessageToShow = errorMessageInJson.data.data[Object.keys(errorMessageInJson.data.data)[0]].reason;
  
  //         alert(errorMessageToShow);
  //         return
  //     })
  //     .then((receipt) => {
  //       console.log(receipt);
  //       setSuccess(true)
  //       dispatch(fetchData(blockchain.account));
  //     });
  // }

  // const getData = () => {
  //   if (blockchain.account !== "" && blockchain.smartContract !== null) {
  //     dispatch(fetchData(blockchain.account));
  //   }
  // };

  // const getConfig = async () => {
  //   const configResponse = await fetch("/config/config.json", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   });
  //   const config = await configResponse.json();
  //   SET_CONFIG(config);
  // };

  // useEffect(() => {
  //   getConfig();
  // }, []);

  // useEffect(() => {
  //   getData();
  //   console.log(data)
  // }, [blockchain.account]);

  return (
    <BushidoPlusStyle>
      <Texture />
      <div className="container">
        
        <Showcase />
        
        <div>
          <h3>bushido ++</h3>
          <label>mark of the sun (nft membership card)</label>
          <p>
  {/* {data.totalSupply ? <b>{data.totalSupply}/770 have been minted</b> : <b>770 NFT Membership Cards</b>} */}
            <br />
            <b>Mint price: </b> 0.18 ETH
            <br />
            <b>Perks:</b>
            <br />
          </p>
          <ul>
            <li>
              Early access for Bushido 7077 mint with discounted price of .06 ETH each max of 2.
            </li>
            <li>Will get free mint for Project Zero NFT per Bushido 7077 they have (2 max).</li>
            <li>Early access for Karakuri drop 1 free mint.</li>
            <li>Ownership and commercial usage rights given to the consumer over their NFT.</li>
            <li>Eligible for meet up and parties in some cities.</li>
            <li>Will get a chance to win a raffle trip to Tokyo, Japan and meet the team.</li>
            <li>Exclusive premiere of animation. </li>
          </ul>
  <br/>
  <a className='mint-btn'href='https://etherscan.io/address/0xf960e7bcc123bdb4fdb961537747062295e403c7'>Mint on Etherscan!</a>
  {/* {data.totalSupply ? <p style={{marginLeft:'3em'}}><b>{data.totalSupply}/770</b> <br/> Mark of the Sun Cards have been minted</p> : <p></p>} */}
  <br/>
  {/* {blockchain.account ? <p style={{marginLeft:'3em', marginTop:'1em'}}>Connected Account: {blockchain.account.slice(0,8) + '...' +  blockchain.account.slice(38,42)}</p> : ''}
          {blockchain.account || data.totalSupply ? 
            (<button className='mint-btn' disabled={claimingNft ? 1 : 0}
            onClick={(e) => {
              e.preventDefault();
              claimNFTs();
              getData();
            }} style={{width:'70%', marginTop:'2rem', backgroundColor:'#ffe600'}}>{success ? 'Complete!' : feedback ? <p>{feedback}</p>:'Mint your Mark of the Sun' }</button> )
          :
            <button onClick ={(e) => {e.preventDefault(); dispatch(connect()); getData();}} class="mint-btn" style={{width:'70%', marginTop:'2rem'}}>Connect your MetaMask </button> 
          }
          <br/>
          <br/>
          {success ? <p>Mark of the Sun Minted! See yours on <a href={CONFIG.MARKETPLACE_LINK} style={{textDecoration:'underline'}}>{CONFIG.MARKETPLACE}</a></p> : ''}
          <br/>
          <ul>
          {data.totalSupply  >= 770 ? <li><p>Looks like we sold out! View our collection on OpenSea</p></li> : ''}
          {data.isPaused ? <li><p>The sale is currently paused, please check again later</p></li> : ''}
          </ul> */}
        </div>
      </div>
    </BushidoPlusStyle>
  );
};

export default BushidoPlus;

const BushidoPlusStyle = styled.section`

  padding-top: 140px;
  padding-bottom: 70px;

  .container {
    display: flex;
    > * {
      flex: 1;
    }
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  label {
    letter-spacing: 0.275em;
    text-transform: uppercase;
    font-weight: 800;
    font-size: 24px;
    line-height: 33px;
    font-family: "Manrope ExtraBold";
  }

  @media (max-width: 768px) {
    padding-top: 100px;
    padding-bottom: 40px;
  }
`;

const Showcase = () => {
  return (
    <ShowcaseStyle>
      <div>
        <img src={img} alt="Bushido" />
      </div>
    </ShowcaseStyle>
  );
};

const ShowcaseStyle = styled.div`
  box-sizing: content-box;
  padding-right: 40px;
  .row {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  div {
    max-width: 513.51px;
    height: 608.84px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    div {
      cursor: pointer;
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      background: #14191a78;
      mix-blend-mode: multiply;
      :hover + svg {
        width: 116.67px;
        height: 102.17px;
        transition: width 200ms ease, height ease, fill 200ms ease;
        fill: #ffe600;
      }
      :active + svg {
        width: 103.55px;
        height: 90.67px;
        transition: width 200ms, height 200ms;
      }
    }
    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transition: width 200ms ease, height ease, fill 200ms ease;
      transform: translate(-50%, -50%);
      pointer-events: none;
    }
  }
  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 40px;
  }
  @media (max-width: 576px) {
    div {
      max-width: 100%;
      height: auto;
    }
    .row {
      flex-direction: column;
      text-align: center;
    }
  }
`;
