import React, { useEffect, useState } from 'react'
import  Row from 'react-bootstrap/Row'
import  Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'

import './css/VerificationDetails.css'

export default function VerificationDetails(props){
  return(
    <>
    <h1>Verification Details</h1>
    <div id="collapse1">
    <Table
    id="verificationtable"
    className="table-fixed table table-responsive"
    // className="Table-Header" 
    stripped hover size="sm" 
    data-toggle = "table">

      <thead>
        <tr id='verificationrow'>
            <th width="200">Time</th>
            <th width="200">Flag</th>
        </tr>
      </thead>

      <tbody id='verificationbody'>
      {props.vdata1.map(ele=> <tr>
            <td>{ele.anomaly}</td>
            <td>{ele.status}</td>
          </tr> )}     
        </tbody>
    </Table>
    </div>
    </>
    // {/* </div> */}
  );
}
