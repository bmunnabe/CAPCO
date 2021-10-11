import { actions } from "../constants"

const initialState = {
    allTransactions : [],
}

export const allTransactions = ( state = initialState, action ) => {
    switch( action.type ) {
        case actions.ALL_TRANSACTIONS:
            return { ...state, allTransactions : action.payload };
        default:
            return state;
    }
}
