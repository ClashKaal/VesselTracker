import React, { useEffect, useState } from 'react'
import  Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import  Row from 'react-bootstrap/Row'
import  Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'

export default function VoyageDetails(props) {
        return (
          <div>
       
      <h1>Latest Ports</h1>
       
      <Table className="Table-Header" stripped hover size="sm">
        <thead>
          <tr>
            <th width="700">Trackname</th>
            <th width="500">Latitute</th>
            <th width="500">Longitude</th>
            <th width="200">Sensor timpsatp</th>
            <th width="200">Recrded timpsatp</th>
          </tr>
        </thead>
        <tbody>
         {props.data.map(ele=> <tr>
            <td>{ele.trackname}</td>
            <td>{ele.latitude}</td>
            <td>{ele.longitude}</td>
            <td>{ele.sensor_timestamp}</td>
            <td>{ele.recorded_timestamp}</td>
          </tr> )}     
        </tbody>
      </Table>
          </div>
        );


        // return (
        //     <Row>
        //         <Col xs={12} sm={12} md={6}>              
        //         </Col>
        //         <Col xs={12} sm={12} md={6}>  
        //         </Col>
        //     </Row>
        // )
      }
