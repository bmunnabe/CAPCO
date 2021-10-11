import { actions } from "../constants"
import { CONSTANTS } from "../../config/index"

export const getTransactions = ( methodName ) => {
    return ( dispatch ) => {
        return fetch( CONSTANTS.API_URL + methodName )
            .then( (response ) => response.json() )
            .then( ( { results } ) => dispatch( { type : actions.ALL_TRANSACTIONS , payload : results } ) )
            .catch( ( err ) => console.log( err ) );
    }
}

