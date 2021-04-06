import { GET_PORTFOLIO } from "../constants/ActionTypePortfolio";

const initState={
    portfolios:[],
};

export const PortfolioReducer= (state = initState, {type,payload} )=>{
    switch (type) {
        case GET_PORTFOLIO:
            return{
                ...state,
                portfolios:payload,
            };

        default:
            return state;
    }
};
export default PortfolioReducer;