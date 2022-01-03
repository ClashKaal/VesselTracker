import React, { useEffect, useState } from 'react'
import  Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
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

export default function CourseDetails() {

    const [data, setData] = useState([
        {
            name: "Position:",
            value: 3578,
        },
        {
            name: "Navigation Status:",
            value: 3578,
        },
        {
            name: "Course:",
            value: 3578,
        },
        {
            name: "Heading:",
            value: 3578,
        },
        {
            name: "Speed:",
            value: 3578,
        },
        {
            name: "Max Speed:",
            value: 3578,
        },
        {
            name: "Status:",
            value: 3578,
        },
        {
            name: "Location:",
            value: 3578,
        },
        {
            name: "Area:",
            value: 3578,
        }, 
        {
            name: "Last Seen:",
            value: 12,
        },       
        {
            name: "Source:",
            value: 34,
        }
    ]);

    const [gndata, setgndata] = useState([
        {
            name: "From:",
            value: 3578,
        },
        {
            name: "Destination:",
            value: 3578,
        },
        {
            name: "ETA:",
            value: 3578,
        },
        {
            name: "Summer Draft:",
            value: 3578,
        },
        {
            name: "Current Draft:",
            value: 3578,
        },
        {
            name: "Last Update:",
            value: 3578,
        },
        {
            name: "Source:",
            value: 3578,
        },
        {
            name: "Calculated ETA:",
            value: 12,
        }
    ]);


    // useEffect(()=>{
    //     setData([{

    //     }])
    // },[]);



    return (
        <Container fluid="lg">
            <Row>
                <Col xs={12} sm={12} md={6}>
                    <Position datas={data} gndata={gndata}/>
                </Col>

                <Col xs={12} sm={12} md={6}>
                    <VoyageDetails/>
                </Col>
            </Row>
        </Container>
    )
}
