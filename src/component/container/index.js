import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTransactions } from "../../redux/actions/transactions";
import { getAllTransactions } from "../../redux/selector/transactionsSelector";

import MyCard from '../card/index'
import './style.scss';

export default function Container() {
    const dispatch = useDispatch();
    const { allTransactions } = useSelector( getAllTransactions );

    useEffect( ()=> {
        dispatch( getTransactions('payments') );
    }, [] );

    return (
        <div className="container">
            {
                allTransactions.map( ( data, index ) => <MyCard data={ data } key={ index } /> )
            }
        </div>
    )
}
