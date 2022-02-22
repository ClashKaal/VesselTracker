import React, { useEffect, useState } from 'react'
import  Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import  Row from 'react-bootstrap/Row'
import  Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'

import './css/AnomalyDetails.css'

export default function AnomalyDetails(props){
  return(
    <>
    <h1>Anomaly Details</h1>
    <Table
    id= "Anomalytable"
    className="table-fixed table table-responsive" 
    stripped hover size="sm" 
    data-toggle = "table">

      <thead>
        <tr>
            <th width="50">Anomaly</th>
            <th width="320">Description</th>
            <th width="200">From</th>
            <th width="200">To</th>
            <th width="180">Duration</th>
        </tr>
      </thead>

      <tbody>
      {props.adata1.map(ele=> <tr>
            <td>{ele.anomaly}</td>
            <td>{ele.status}</td>
            <td>{ele.from}</td>
            <td>{ele.to}</td>
            <td>{ele.Duration}</td>
          </tr> )}     
        </tbody>
    </Table>
    </>
  );
}
