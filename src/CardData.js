import React from "react";

// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Col from 'react-bootstrap/Col';

function CardData({image,name,id,season,rating,airdate,airtime}){
    
    return(
        <div>
            <Col className='col p-4'>

                <Card className='card' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image} />

                    <Card.Body>
                        <Card.Title className='title'>Movie Name: {name}</Card.Title>
                        <Card.Text> 
                            <p className='title'>Id: {id}</p>
                            <p className='title'>Season: {season}</p>
                            <p className='title'>Rating: {rating}</p>
                            <p className='title'>Airdate: {airdate}</p>
                            <p className='title'>Airtime: {airtime}</p>
                            {/* <p className='title'>Summary: {ans.summary}</p> */}
                        </Card.Text>
                        {/* <Button variant="primary">More Details</Button> */}
                    </Card.Body>

                </Card>

            </Col>   
        </div>
    )
}
export default CardData;
