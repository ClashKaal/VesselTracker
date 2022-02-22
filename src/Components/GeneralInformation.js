import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ship from '../assets/Ship-and-boat-1.png'
import galleryIcon from '../assets/icons/gallery.png'
import videoIcon from '../assets/icons/video-camera.png'
// import axios from 'axios';

const Information = (props) => {

    return <>
        <h1>General Information</h1>
        <Row>
            <Col xs={12} sm={12} md={6}>
                <Row>
                    {props.datas.map(ele => {
                    return<>
                        <Col xs={12} sm={12} md={6}>
                            <p> {ele.name}</p>
                        </Col>

                        <Col xs={12} sm={12} md={6}>
                            <p> {ele.value} </p>
                        </Col>
                    </>
                     }
                    )}
                </Row>
            </Col>
            <Col xs={12} sm={12} md={6}>
                <Row>
                    {props.gndata.map(ele => <>
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
        <Link to="/shipgallery" title="Photo Gallery">
            <Button variant="light">
                <img src={galleryIcon} alt="Image_Gallery" width="30px" />
            </Button>
        </Link>
        <Link to="/shipgallery">
            <Button variant="light" title="Video Gallery">
                <img src={videoIcon} alt="Video_Gallery" width="30px" />
            </Button>
        </Link>
        <Image fluid={true} src={ship} />
    </>
}

export default function GeneralInformation(props) {

    // csv().fromFile(csvfile).then(json=>{
    //     console.log(json)
    // });

    // const [fetchedData, setFecthedData] = useState([]);
    // const [data, setData] = useState([
    //     ]);

    // const [gndata, setgndata] = useState([
    // ]);

    // const [adata, setadata] = useState([
    // ]);

    // const [agndata, setagndata] = useState([
    // ]);

    // useEffect(() => {
    //     setData(props.data);
    //     setgndata(props.data)
    // }, [props.data])

    
    
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
            <Row>
                <Col xs={12} sm={12} md={6}>
                    <ShipGallery />
                </Col>
                
                <Col xs={12} sm={12} md={6}>
                    <Row>
                    <Information datas={props.gndata1} gndata={props.gndata2} />
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}