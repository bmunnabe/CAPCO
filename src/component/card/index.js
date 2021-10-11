import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function MyCard( { data } ) {
    const {
        paymentAmount,
        paymentCurrency,
        paymentType,
        paymentDate,
        paymentStatus,
        toAccaunt : { accountName : toAccName, accountNumber : toAccNo } = {},
        fromAccount : { accountName : fromAccName, accountNumber : fromAccNo } = {},
    } = data;

    return (
        <div>
            <Card>
                <Card.Header as="h5">{ paymentAmount }{ paymentCurrency } | { paymentDate }</Card.Header>
                <Card.Body>
                    <Card.Title>Payment State: { paymentStatus }</Card.Title>
                    <Card.Title>Payment Type: { paymentType }</Card.Title>
                    <Card.Text>Transferred From: { fromAccName } and { fromAccNo }</Card.Text>
                    <Card.Text>Transferred To: { toAccName } and { toAccNo }</Card.Text>
                    <Button variant="primary">More info</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
