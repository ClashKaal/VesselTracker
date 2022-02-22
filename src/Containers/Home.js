import React, { useEffect, useState } from 'react'
import AverageSpeedGraph from '../Components/AverageSpeedGraph'
import CourseDetails from '../Components/Course_Position'
import GeneralInformation from '../Components/GeneralInformation'
import AnomalyDetails from '../Components/AnomalyDetails'
import axios from 'axios'
import {
    useLocation
}from "react-router-dom";
import Sample2 from '../Sample_Data/sample2.json'
import Sample1 from '../Sample_Data/Sample1.json'
import moment from 'moment';

const country_code = (code) => {
    // console.log(code.toString().includes("102")===true);
    // if(code.toString().includes("102")===true){
    //     return "INVALID COUNTRY CODE"
    // }
    switch (code) {
        case "{101":
            return "DUPLICATE MMSI"
            break;

        case "{102":
            return "INVALID COUNTRY CODE"
            break;

        case "{103":
            return "MMSI GREATER THAN 9 DIGITS"
            break;

        case "{104":
            return "MMSI LESS THAN 9 DIGITS"
            break;

        case "{105":
            return "MMSI KNOWN ERRORS"
            break;

        case "{106":
            return "MMSI DEFAULT"
            break;

        case "{107":
            return "OWN TRACK INVALID DESIGN"
            break;

        case "{108":
            return "MMSI AND IMO INTERCHANGE"
            break;

        case "{109":
            return "INVALID IMO CHECKSUM"
            break;

        case "{109}":
            return "INVALID IMO CHECKSUM"
            break;

        case "{110":
            return "FUTURE TIME RECEIVED"
            break;

        default:
            break;
    }
}

export default function Home() {

    // const Location=useLocation()
    // const a = Location.search.split("&");
    // const mmsi_no=a[1].split("=").at(1)
    // const imo_no=a[2].split("=").at(1)
    // let newurl=`http://192.168.11.130:8090/TrafficAnalysis/restAPI/TrackInfo?&mmsi_no=${mmsi_no}&imo_no=${imo_no}`;
    // console.log(newurl)
    // useEffect(() => {
    //     axios.get(newurl).then((response) =>{
    //         console.log(response)
    //         setanomalydetails(response.data.anomaly_details);     
    //     })
    // },[])
    const [generalInfo, setGeneralInfo] = useState([]);
    const [genralinfo2, setGenralInfo2] = useState([]);
    // const [anomaly, setanomaly] = useState([]);
    // const [verification, setverification] = useState([]);
    const [coursePosition, setCoursePosition] = useState([]);
    const [coursePosition2, setCoursePosition2] = useState([]);
    const [anomalydetails, setanomalydetails] = useState([]);
    const [verificationdetails, setverificationdetails] = useState([]);
    const [voyageDetails, setVoyageDetails] = useState([]);
    const [averageSpeed, setAverageSpeed] = useState([]);
    // const [anomalystat, setanamolystat] = useState([]);
    useEffect(() => {
        let url = "https://api.github.com/users/defunkt"
        axios.get(url).then((response) => {
            console.log(response)
        })
    }, [])
    useEffect(() => {
        const gnarr = [];
        const gnarr2 = [];
        // const asarr = [];
        // const vfarr = [];
        const cparr = [];
        const cparr2 = [];

        const anomalydetail = [];
        const verificationdetail = [];

        const voyagedetail = [];
        const speed = [];



        // var myObject = Sample1
        // var count = Object.keys(myObject).length;
        // var ele = Object.keys(myObject);
        // var indexing = Object.values(myObject);
        // console.log(ele[0]);
        // console.log(indexing[0])
        // console.log(count);

        Sample1.forEach((ele, index) => {
            // console.log(ele.last_reported)
            // Sample1.map((ele,index) => {
            // console.log(index);
            // console.log(ele)
            // console.log(count)
            // if (index === 0) {

            // console.log(index)
            //to get General Information Data
            const gn = {
                "Trackname": ele.last_reported.trackname,
                "IMO": ele.last_reported.imo_no,
                "MMSI": ele.last_reported.mmsi_no,
                "Callsign": ele.last_reported.call_sign,
                "Width": ele.last_reported.width,
                "Anomaly status": ele.last_reported.anomaly_status,
                "Anomaly array: ": country_code(ele.last_reported.anomaly_array.split(",")[0]),
                // "Anomaly array": ele.anomaly_array,
            };
            if (ele.anomaly_status === "false" || ele.anomaly_status === "") {
                gn = {
                    "Trackname": ele.trackname,
                    "IMO": ele.imo_no,
                    "MMSI": ele.mmsi_no,
                    "Callsign": ele.call_sign,
                    "Width": ele.width,
                    "Anomaly status": ele.anomaly_status,
                };
            }

            if (ele.last_reported.anomaly_status === "false" || ele.last_reported.anomaly_status === "") {
                gn = {
                    "Trackname": ele.last_reported.trackname,
                    "IMO": ele.last_reported.imo_no,
                    "MMSI": ele.last_reported.mmsi_no,
                    "Callsign": ele.last_reported.call_sign,
                    "Width": ele.last_reported.width,
                    "Anomaly status": ele.last_reported.anomaly_status,
                };
            }


            const verificationtime = moment(ele.last_reported.verification_time * 1000).format("DD/MM/YYYY HH:mm");
            const gn2 = {
                "Length: ": ele.last_reported.length,
                "Gross tonnage: ": ele.last_reported.vessel_tonnage,
                // "Source type: ": ele.source_type_name,
                "Track type: ": ele.last_reported.track_type_name,
                "Flag: ": ele.last_reported.country_name,
                "Verification flag: ": ele.last_reported.verification_flag,
                "Verification time: ": verificationtime,
            };

            Object.keys(gn).map((key, index) => {
                // console.log(key)
                // console.log(gn[key])
                gnarr.push({
                    name: key,
                    value: gn[key],
                })
            })
            Object.keys(gn2).map((key, index) => {
                console.log(key)
                console.log(gn2[key])
                gnarr2.push({
                    name: key,
                    value: gn2[key],
                })
            })
            // console.log(gn)
            // console.log(gn2)
            // console.log(gnarr)
            // console.log(gnarr2)

            //to set Course_Position Data
            const cp1 = {
                "Navigational Status: ": ele.last_reported.navigation_status,
                "Course: ": ele.last_reported.course,
                "Latitude: ": ele.last_reported.latitude,
                "Longitude: ": ele.last_reported.longitude,
                "Speed: ": ele.last_reported.speed,
                // "Status: ": ele.status,
                // "Source type: ": ele.source_type_name
            };

            const updateDate = moment(ele.last_reported.updated_on * 1000).format("DD/MM/YYYY HH:mm");
            const cp2 = {
                "Status: ": ele.last_reported.status,
                "Source type: ": ele.last_reported.source_type_name,
                "Destination: ": ele.last_reported.destinationpoint,
                // "ETA: ": ele.last_reported.eta,
                // navigation_status: ele.navigation_status,
                "Last update: ": updateDate,
            }
            // console.log(cp1)
            // console.log(cp2)

            Object.keys(cp1).map((key, index) => {
                cparr.push({
                    name: key,
                    value: cp1[key],
                })
            })
            Object.keys(cp2).map((key, index) => {
                cparr2.push({
                    name: key,
                    value: cp2[key],
                })
            })
            // console.log(cparr)
            // console.log(cparr2)

            // if(ele.anomaly_status === "false"){
            //     gnarr.pop();
            // }
            // else{
            //     const a = ele.anomaly_array.substring(1, 4)
            //     if(a === "102"){
            //         gnarr.splice(gnarr.length-1, 1)

            //     }
            //     console.log(a)
            // }
            // }


            for (var i = 0; i < ele['Voyage Details'].length; i++) {
                var count = ele['Voyage Details'].length;
                // console.log(count);
                const sensorRecoderDate = moment(ele['Voyage Details'][i].from * 1000).format("DD/MM/YY HH:mm");
                // console.log(sensorRecoderDate)
                const RecoderDate = moment(ele['Voyage Details'][i].to * 1000).format("DD/MM/YY HH:mm");
                // console.log(RecoderDate)
                const dur = ele['Voyage Details'][i].duration;
                var d = Math.floor((dur / 3600) / 24)
                var h = Math.floor((dur / 3600) % 24)
                var m = Math.floor((dur / 60) % 60)
                var s = Math.floor(dur % 60)
                const dur1 = d + "d " + h + "h " + m + "m " + s + "s"
                voyagedetail.push({

                    destination: ele['Voyage Details'][i].destinationpoint,
                    Arrival: sensorRecoderDate,
                    Departure: RecoderDate,
                    Duration: dur1,
                })
            }

            for (i = 0; i < ele.anomaly_details.length; i++) {
                const fromdate = moment(ele.anomaly_details[i].from * 1000).format("DD/MM/YY HH:mm");
                const todate = moment(ele.anomaly_details[i].to * 1000).format("DD/MM/YY HH:mm");
                const dur = ele.anomaly_details[i].duration;
                var d = Math.floor((dur / 3600) / 24)
                var h = Math.floor((dur / 3600) % 24)
                var m = Math.floor((dur / 60) % 60)
                var s = Math.floor(dur % 60)
                const dur1 = d + "d " + h + "h " + m + "m " + s + "s"
                anomalydetail.push({

                    anomaly: ele.anomaly_details[i].anomaly_array,
                    status: country_code(ele.anomaly_details[i].anomaly_array.split(",")[0]),
                    from: fromdate,
                    to: todate,
                    Duration: dur1,
                })
            }

            for (i = 0; i < ele.verification_details.length; i++) {
                const time = moment(ele.verification_details[i].verification_time * 1000).format("DD/MM/YY HH:mm");
                verificationdetail.push({
                    anomaly: time,
                    status: ele.verification_details[i].verification_flag,
                })
            }
        })

        setGeneralInfo(gnarr);
        setGenralInfo2(gnarr2);
        // setanomaly(asarr);
        // setverification(vfarr);
        setCoursePosition(cparr);
        setCoursePosition2(cparr2);
        setanomalydetails(anomalydetail);
        setverificationdetails(verificationdetail);
        setVoyageDetails(voyagedetail);
    }, [])
    return (
        <>
            <GeneralInformation gndata1={generalInfo} gndata2={genralinfo2} />
            <CourseDetails cpdata1={coursePosition} cpdata2={coursePosition2} voyageDetails={voyageDetails} anomalydetails={anomalydetails} verificationdetails={verificationdetails} />
            <AverageSpeedGraph />
        </>
    )
}
