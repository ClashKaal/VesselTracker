import React, { useEffect, useState } from 'react'
import  Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import  Row from 'react-bootstrap/Row'

import  Col from 'react-bootstrap/Col';
import ship from '../assets/Ship-and-boat-1.png'

const Information = (props) => {

    console.log(props)

    return <>
    <h1>General Information</h1>
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

const ShipGallery = (props) => {
    return <>
        <Image fluid={true} src={ship}/>
    </>
}

export default function GeneralInformation() {

    const [data, setData] = useState([
        {
            name: "IMO",
            value: 3578,
        },
        {
            name: "MMSI",
            value: 3578,
        },
        {
            name: "Callsign",
            value: 3578,
        },
        {
            name: "Width",
            value: 3578,
        },
        {
            name: "Length",
            value: 3578,
        },
        {
            name: "DeadWeight",
            value: 3578,
        },
        {
            name: "Gross Tonnage",
            value: 3578,
        },
        {
            name: "TEU",
            value: 3578,
        },
        {
            name: "Liquid Capacity",
            value: 3578,
        }, 
        {
            name: "Year of build:",
            value: 12,
        },       
        {
            name: "Class:",
            value: 34,
        }
    ]);

    const [gndata, setgndata] = useState([
        {
            name: "AIS type:",
            value: 3578,
        },
        {
            name: "Ship type:",
            value: 3578,
        },
        {
            name: "Flag:",
            value: 3578,
        },
        {
            name: "Builder:",
            value: 3578,
        },
        {
            name: "Owner:",
            value: 3578,
        },
        {
            name: "Operator:",
            value: 3578,
        },
        {
            name: "Insurer:",
            value: 3578,
        },
    ]);


    // useEffect(()=>{
    //     setData([{

    //     }])
    // },[]);



    return (
        <Container fluid="lg">
            <Row>
                <Col xs={12} sm={12} md={6}>
                    <ShipGallery />
                </Col>

                <Col xs={12} sm={12} md={6}>
                    <Information datas={data} gndata={gndata}/>

                </Col>
            </Row>
        </Container>
    )
}
