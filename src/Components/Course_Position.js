import React, { useEffect, useState } from 'react'
import  Container from 'react-bootstrap/Container'
import  Row from 'react-bootstrap/Row'
import  Col from 'react-bootstrap/Col';

import VoyageDetails from './VoyageDetails';

const Position = (props) => {

    console.log(props)

    return <>
    <h1>Course/Position</h1>
        <Row>
            <Col xs={12} sm={12} md={6}>
                <Row>
                    {props.datas.map(ele=><>
                        <Col xs={12} sm={12} md={6}>
                            <p> {ele.name}</p>
                        </Col>

                        <Col xs={12} sm={12} md={6}>
                            <p> {ele.value} </p>
                        </Col>
                    </>
                )}
                </Row>                
            </Col>
            <Col xs={12} sm={12} md={6}>
                <Row>
                    {props.gndata.map(ele=><>
                        <Col xs={12} sm={12} md={6}>
                            <p> {ele.name}</p>
                        </Col>

                        <Col xs={12} sm={12} md={6}>
                            <p> {ele.value} </p>
                        </Col>
                    </>
                )}
                </Row>  
            </Col>
        </Row>
    </>
}

export default function CourseDetails(props) {

    const [data, setData] = useState([]);

    const [gndata, setgndata] = useState([

    ]);


    useEffect(()=>{
        setData(props.data);
        setgndata(props.data)
    },[props.data])



    return (
        <Container fluid="lg">
            <Row>
                <Col xs={12} sm={12} md={6}>
                    <Position datas={props.cpdata1} gndata={props.cpdata2}/>
                </Col>

                <Col xs={12} sm={12} md={6}>
                    <VoyageDetails data={props.voyageDetails}/>
                </Col>
            </Row>
        </Container>
    )
}
