import React from 'react'
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Row } from 'reactstrap'

const Person = ({name, address, phoneNumber, photo}) => {
    return(
        <Card className='container-fluid p-4 text-center'>
        <CardImg top src={photo} />
        <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardText>
                <Row className='my-2'>
                    <Col>{address},{phoneNumber}</Col>
                </Row>
            </CardText>
            <Button color='primary'>Remove</Button>
        </CardBody>
    </Card>
    )
}

export default Person