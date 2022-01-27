import React, { useEffect } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import img1 from '../assets/Irish_fishing_boat_02.jpg';
import img2 from '../assets/maxresdefault.jpg';
import img3 from '../assets/maxresdefault.jpg';
import img4 from '../assets/Ship-and-boat-1.png';

function ImageCard({ title, description, src }) {
    return (
        <Card style={{ width: '100%', marginBottom: "20px" }}>
            <Card.Img variant="top" src={src} style={{ height: "150px", objectFit: "cover" }} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

function ShipIMages() {

    const imgsArr = [{
        title: "Image 01",
        description: "Description 01",
        src: img1
    },
    {
        title: "Image 02",
        description: "Description 02",
        src: img2
    },
    {
        title: "Image 04",
        description: "Description 03",
        src: img3
    },
    {
        title: "Image 04",
        description: "Description 04",
        src: img4
    },

    {
        title: "Image 01",
        description: "Description 01",
        src: img1
    },
    {
        title: "Image 02",
        description: "Description 02",
        src: img2
    },
    {
        title: "Image 04",
        description: "Description 03",
        src: img3
    },
    {
        title: "Image 04",
        description: "Description 04",
        src: img4
    },
    ]
    const [loading, setLoading] = React.useState(false)
    const [images, setImages] = React.useState(imgsArr)



    useEffect(() => {
        if (loading === true) {
            setTimeout(() => {
                setImages([{
                    title: "Image 04",
                    description: "Description 04",
                    src: img4
                },])
            }, 3000)
        } else {
            setTimeout(() => {
                setImages(imgsArr)
            }, 1000)
        }
    }, [loading]);


    return (<>
        <br /><br />
        <Container maxWidth="md">
            <Row>
                {images.map((ele, i, array) => <Col xs={12} sm={6} md={3} key={`${Math.random() + i}`}>
                    <ImageCard
                        title={ele.title}
                        description={ele.description}
                        src={ele.src}
                    />
                </Col>)}

            </Row>
            <Button onClick={() => {
                setLoading(!loading);
            }}>Change Loading {loading.toString()}</Button>
        </Container>
    </>)
}

export default ShipIMages