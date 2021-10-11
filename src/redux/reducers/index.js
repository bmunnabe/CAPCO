import { combineReducers } from "redux";
import { allTransactions } from './transactionsReducer';

const reducer = combineReducers( {
    allTransactions,
} );

export default reducer;