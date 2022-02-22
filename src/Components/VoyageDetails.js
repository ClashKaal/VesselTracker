import React, { useEffect, useState } from 'react'
import  Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import  Row from 'react-bootstrap/Row'
import  Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'

import './css/VoyageDetails.css'

export default function VoyageDetails(props) {
        return (
          <>
      <h1>Voyage Details</h1>  
      <Table 
      id = "Voyagetable"
      className="table-fixed table table-responsive"
      // className="Table-Header" 
      stripped hover size="sm" 
      data-toggle = "table"
      >
        <thead>
          <tr>
            <th width="200">Destination</th>
            <th width="160">From</th>
            <th width="160">To</th>
            <th width="200">Duration</th>
          </tr>
        </thead>

        <tbody>
         {props.data.map(ele=> <tr>
            <td>{ele.destination}</td>
            <td>{ele.Arrival}</td>
            <td>{ele.Departure}</td>
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
