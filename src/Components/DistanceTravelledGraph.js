import React, { useEffect, useState } from 'react';
import axios from "axios";
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend} from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
import { Bar } from 'react-chartjs-2';
import  Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import  Row from 'react-bootstrap/Row'
import  Col from 'react-bootstrap/Col';

import Sample1 from '../Sample_Data/Sample1.json'

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
              drag:{
                  enabled: true,
              },
              mode: 'x',
            }
          },
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Distance Travelled',
            position: 'top',
            align: 'start',
            font: {
                weight: 'bold', size: 24, family: 'Open Sans, sans-serif',
            }
        },
    },
};

const labels = [];

// export const data = {
//     labels,
//     datasets: [
//     {
//         label: 'Distance Travelled',
//         data: [9,8,7,0.2,5,4,3],
//         backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//     ],
// };
  
  
function DistanceTravelledGraph(props) {
    // console.log(props);

    const [datasets, setDatasets] = useState(
        {
            labels,
            datasets: [
            {
                // label: 'Distance Travelled',
                // data: [9,8,7,0.2,5,4,3],
                // backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            ],
        }
    );

    const time = [];
    const distance = [];

    Sample1.forEach((ele,index) => {
        
        var count1 = ele.kinematic_details.length
        

        for (var i = 0; i < count1; i++){
            time.push(ele.kinematic_details[i].date)
            distance.push(ele.kinematic_details[i].distanceTravelled)
        }
    })
    useEffect(() => {
        setDatasets(prevState => ({
            ...prevState,
            labels: time,
            datasets: [
                {
                    label: 'Daily Distance Travelled',
                    // data: [],
                    data: distance,
                    backgroundColor: 'rgba(4,98,143,0.64)',
                }
            ]
        }))
    },[])
    return <Bar options={options} data={datasets} />
}

export default DistanceTravelledGraph;
