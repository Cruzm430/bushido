const initialState = {
  loading: false,
  totalSupply: 0,
  error: false,
  errorMsg: "",
  isWhitelisted : false,
  isPaused: true,
  MOTSHolder: 0,
  isPublicSale: false
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHECK_DATA_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
        errorMsg: "",
      };
    case "CHECK_DATA_SUCCESS":
      console.log(action.payload)
      return {
        ...state,
        loading: false,
        totalSupply: action.payload.totalSupply,
        isPaused: action.payload.isPaused,
        isWhitelisted: action.payload.isWhitelisted,
        MOTSHolder:action.payload.MOTSHolder,
        isPublicSale:action.payload.isPublicSale,
        error: false,
        errorMsg: "",
      };
    case "CHECK_DATA_FAILED":
      return {
        ...initialState,
        loading: false,
        error: true,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
