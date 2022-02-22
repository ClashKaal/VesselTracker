import React, { useEffect, useState } from 'react';
// import axios from "axios";
import {
Chart as ChartJS,
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend,
} from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
import { Bar } from 'react-chartjs-2';
import  Container from 'react-bootstrap/Container'
// import Image from 'react-bootstrap/Image'
import  Row from 'react-bootstrap/Row'
import  Col from 'react-bootstrap/Col';
import DistanceTravelledGraph from './DistanceTravelledGraph';
import Sample from '../Sample_Data/Sample.json';
import Sample1 from '../Sample_Data/Sample1.json';
import moment from 'moment';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    zoomPlugin
);
  
export const options = {
    responsive: true, 
    plugins: {
        zoom: {
            zoom: {
              wheel: {
                enabled: true,
              },
            //   drag:{
            //       enabled: true,
            //   },
              mode: 'x',
            }
          },
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

const labels = [];
  
  
function AverageSpeedGraph(props) {
    // const speed = [];

    const [datasets, setDatasets] = useState(
        {
            labels,
            datasets: [
                {
                    // label: 'Daily Average Speed',
                    // // data: [],
                    // data: [9,8,7,0.2,5,4,3],
                //     backgroundColor: 'rgba(4,98,143,0.64)',
                // },
                // {
                //     label: 'Daily Speed',
                //     data: [99,8,7,12,5,4,67], 
                //     backgroundColor: 'rgba(143,76,4,0.64)',
                },
                ],
        }
    );

    // useEffect(() => {
    //     axios.get("",{

    //     }).then(response => {
    //         console.log('api', response)
    //         let speeddata = [];
    //         const time = [];
    //         response.data.map(ele => {
    //             speeddata.push(ele.speed)
    //             const sensorRecoderDate = moment(ele.sensor_timestamp * 1000).format("DD/MM/YYYY  HH:mm");
    //             const RecoderDate = moment(ele.recorded_timestamp * 1000).format("DD/MM/YYYY  HH:mm");
    //             time.push(RecoderDate)
    //     })

    // setDatasets(prevState => ({
    //             ...prevState,
    //             labels: time,
    //             datasets: [
    //                 {
    //                     label: 'Daily Average Speed',
    //                     // data: [],
    //                     data: props.speedata,
    //                     backgroundColor: 'rgba(4,98,143,0.64)',
    //                 }
    //             ]
    //         }))
    //     }).catch(err => {

    //     })

    // },[])
    //     ,[props.speedata])

    const time = [];
    const speed = [];



    // Sample.forEach((ele, index) => {
    //     const RecoderDate = moment(ele.recorded_timestamp * 1000).format("DD/MM/YYYY");
    //     time.push(RecoderDate)
    // })

    Sample1.forEach((ele,index) => {
        // console.log(ele.kinematic_details)
        var count1 = ele.kinematic_details.length
        // console.log(count1)

        for (var i = 0; i < count1; i++){
            time.push(ele.kinematic_details[i].date)
            speed.push(ele.kinematic_details[i].avgSpeed)
        }
    })
    // console.log(time)
    // console.log(speed) 

    useEffect(() => {
        setDatasets(prevState => ({
            ...prevState,
            labels: time,
            datasets: [
                {
                    label: 'Daily Average Speed',
                    // data: [],
                    data: speed,
                    backgroundColor: 'rgba(4,98,143,0.64)',
                }
            ]
        }))
    },[])

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
