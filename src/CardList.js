import React from "react";

import CardData from "./CardData";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function CardList({Data}){
    
    return(
        <div>
            <Container className='container '> 
            <h2 className='head mt-4 mb-4'>Movies List - Pagination</h2>
                <Row className='row row-cols-lg-3'>
                    
                    {
                        Data.map((result,index)=>{

                            return(
                                <CardData 
                                key={index}
                                image={result.image.medium}
                                name={result.name}
                                id={result.id}
                                rating={result.rating.average}
                                season={result.season}
                                airtime={result.airtime}
                                airdate={result.airdate}
                                />
                            )
                        
                        }) 
                    }
                </Row>
            </Container>
        </div>
    )
}
export default CardList;
