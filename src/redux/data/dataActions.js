// log
import store from "../store";

const fetchDataRequest = () => {
  return {
    type: "CHECK_DATA_REQUEST",
  };
};

const fetchDataSuccess = (payload) => {
  return {
    type: "CHECK_DATA_SUCCESS",
    payload: payload,
  };
};

const fetchDataFailed = (payload) => {
  return {
    type: "CHECK_DATA_FAILED",
    payload: payload,
  };
};

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      let totalSupply = await store
        .getState()
        .blockchain.smartContract.methods.totalSupply()
        .call();

      let account = await store
        .getState()
        .blockchain.account

      let isWhitelisted = await store 
        .getState()
        .blockchain.smartContract.methods.isWhitelisted(account)
        .call()

      let isPaused = await store 
        .getState()
        .blockchain.smartContract.methods.paused()
        .call()
      
      let MOTSHolder = await store
      .getState()
      .blockchain.smartContract.methods.MarkOfTheSun_balanceOf(account)
      .call()

      let isPublicSale = await store 
        .getState()
        .blockchain.smartContract.methods.publicSale()
        .call()

      dispatch(
        fetchDataSuccess({
          totalSupply,
          isWhitelisted,
          isPaused,
          MOTSHolder,
          isPublicSale
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(fetchDataFailed("Could not load data from contract."));
    }
  };
};
