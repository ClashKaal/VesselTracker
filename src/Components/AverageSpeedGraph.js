import React, { useEffect, useState } from 'react';
import axios from "axios";
import {
Chart as ChartJS,
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import  Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import  Row from 'react-bootstrap/Row'
import  Col from 'react-bootstrap/Col';
import DistanceTravelledGraph from '../DistanceTravelledGraph';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
  
export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Daily Average Speed',
            position: 'top',
            align: 'start',
            font: {
                weight: 'bold', size: 24, family: 'Open Sans, sans-serif',
            }
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
    {
        label: 'Daily Average Speed',
        data: [9,8,7,0.2,5,4,3],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    ],
};
  
  
function AverageSpeedGraph(props) {


    const [datasets, setDatasets] = useState(
        {
            labels,
            datasets: [
            {
                label: 'Distance Travelled',
                data: [9,8,7,0.2,5,4,3],
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            ],
        }
    );

    // useEffect(()=> {
    //     axios.get(url).then(res=>{
    //        setDatasets(prevState=>({
    //            ...prevState,
    //            datasets:[
    //                ...prevState.datasets,
    //            ]
    //        })) 
    //     }).catch(error=>{

    //     })
    // },[]);

    return (
        <Container fluid="lg">
            <Row>
                <Col xs={12} sm={12} md={6}>
                 <Bar options={options} data={datasets} />
                </Col>

                <Col xs={12} sm={12} md={6}>
                    <DistanceTravelledGraph/>
                </Col>
            </Row>
        </Container>
    )
}

export default AverageSpeedGraph;
