import React, { useEffect, useState } from 'react';
import  Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import  Row from 'react-bootstrap/Row'

import  Col from 'react-bootstrap/Col';
import ship from '../assets/Ship-and-boat-1.png'

const Information = (props) => {

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

export default function GeneralInformation(props) {
    
    // csv().fromFile(csvfile).then(json=>{
    //     console.log(json)
    // });

    // const [fetchedData, setFecthedData] = useState([]);
    const [data, setData] = useState([
        [{
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
    ]]);

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

    useEffect(()=>{
        setData(props.data);
        setgndata(props.data)
    },[props.data])


    // const handleUploadData = (data) =>{
        // console.log('line 143 from general info', data)
        // console.log(Sample)
        // const mainArr=[];
        // {data.map((fetchkey,i)=>{
        //     const subArr = [];

        //     // data array type
        //     // first loop in array it may be a object , str, integer,
        //     fetchkey.data.map((e,index)=>{
        //         if(index === 0){
        //             subArr.push({
        //                 uuid:e
        //             })
        //         } else {
        //             subArr.push({
        //                 [e]:e,
        //             })
        //         }
                
        //     })
        //     mainArr.push({
        //         name:fetchkey,
        //         subarr: subArr
        //     })
        // })}
        // console.log(mainArr);

        // a[0] = {datas: Array(11), gndata: Array(7)};
        // a[0] can be wriiten as Sample[i]
        // and its value {datas: Array(11), gndata: Array(7)}
        // Object.keys(Sample[i]).map((key, index)=>{}) to make the ythe object into looping syntax.

    // }

    return (
        <Container fluid="lg">
            
            {/* <Row> */}
                {/* <Col xs={12}> */}
                    {/* {fetchedData.map((eachElement, index, array)=>{
                        console.log(eachElement);
                        console.log(index);
                        console.log(array)
                        return <div style={{backgroundColor:"#eeeeee", margin:"10px", padding:"10px", borderRadius:"5px"}}>
                                <div style={{color:"#007bff", fontWeight:"500"}} key={`${new Date().getTime()}-ruby`}>Country Name : {eachElement.country_name}</div>
                                <div style={{color:"#007bff", fontWeight:"500"}} key={`${new Date().getTime()}-python`}>IMO : {eachElement.imo_no}</div>
                                <div style={{color:"#007bff", fontWeight:"500"}} key={`${new Date().getTime()}-js`}>Speed : {eachElement.speed} m/s</div>
                                <div style={{color:"#007bff", fontWeight:"500"}} key={`${new Date().getTime()}-java`}>ID: {eachElement.uuid}</div>
                            </div>
                    })} */}
                {/* </Col> */}
            {/* </Row> */}
            <Row>
                <Col xs={12} sm={12} md={6}>
                    <ShipGallery />
                </Col>

                <Col xs={12} sm={12} md={6}>
                    <Information datas={props.gndata1} gndata={props.gndata2}/>
                </Col>
            </Row>
        </Container>
    )
}