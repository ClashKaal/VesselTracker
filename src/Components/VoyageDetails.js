import React, { useEffect, useState } from 'react'
import  Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import  Row from 'react-bootstrap/Row'
import  Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'

export default function VoyageDetails(props) {
        return (
          <>
       
      <h1>Latest Ports</h1>
       
      <Table className="Table-Header" stripped hover size="sm">
        <thead>
          <tr>
            <th width="300">Ports</th>
            <th width="200">Sensor timpstamp</th>
            <th width="200">Recrded timpstamp</th>
            <th width="200">Duration</th>
          </tr>
        </thead>
        <tbody>
         {props.data.map(ele=> <tr>
            <td>{ele.destinationpoint}</td>
            <td>{ele.sensor_timestamp}</td>
            <td>{ele.recorded_timestamp}</td>
            <td>{ele.Duration}</td>
          </tr> )}     
        </tbody>
      </Table>
          </>
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
