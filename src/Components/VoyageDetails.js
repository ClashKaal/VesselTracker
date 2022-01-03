import React, { useEffect, useState } from 'react'
import  Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import  Row from 'react-bootstrap/Row'
import  Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'

export default function VoyageDetails() {
        return (
          <div>
       
      <h1>Latest Ports</h1>
       
      <Table className="Table-Header" stripped hover size="sm">
        <thead>
          <tr>
            <th width="170">S.No</th>
            <th width="700">Ports</th>
            <th width="500">Arrival</th>
            <th width="500">Departure</th>
            <th width="200">Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>Karwar</td>
            <td>2018-01-12</td>
            <td>2018-01-12</td>
            <td>12h 15m</td>
          </tr>
          <tr>
            <td>2.</td>
            <td>Karwar</td>
            <td>2018-01-12</td>
            <td>2018-01-12</td>
            <td>12h 15m</td>
          </tr>
          <tr>
            <td>3.</td>
            <td>Karwar</td>
            <td>2018-01-12</td>
            <td>2018-01-12</td>
            <td>12h 15m</td>
          </tr>
          <tr>
            <td>4.</td>
            <td>Karwar</td>
            <td>2018-01-12</td>
            <td>2018-01-12</td>
            <td>12h 15m</td>
          </tr>
          <tr>
             <td>5.</td>
            <td>Karwar</td>
            <td>2018-01-12</td>
            <td>2018-01-12</td>
            <td>12h 15m</td>
          </tr>
          <tr>
            <td>6.</td>
            <td>Karwar</td>
            <td>2018-01-12</td>
            <td>2018-01-12</td>
            <td>12h 15m</td>
          </tr>
       
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
