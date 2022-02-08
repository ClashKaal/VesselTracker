import React, { useEffect, useState } from 'react'
import AverageSpeedGraph from '../Components/AverageSpeedGraph'
import CourseDetails from '../Components/Course_Position'
import GeneralInformation from '../Components/GeneralInformation'

import Sample from '../Sample_Data/Sample.json';
import moment from 'moment';

const country_code = (code) => {
    console.log(code);
    switch (code) {
        case code.includes("101"):
            return "DUPLICATE MMSI";
            break;

        case code.includes("102"):
            return "INVALID COUNTRY CODE";
            break;

        case "103":
        
        break;
        case "104":
        
        break;
        case "105":
        
        break;
        case "106":
        
        break;
        case "107":
        
        break;
        case "108":
        
        break;
        case "109":
        
        break;
        case "110":
        
        break;
    
        default:
            break;
    }
}
export default function Home() {
    const [generalInfo, setGeneralInfo] = useState([]);
    const [genralinfo2, setGenralInfo2] = useState([]);
    // const [anomaly, setanomaly] = useState([]);
    // const [verification, setverification] = useState([]);
    const [coursePosition, setCoursePosition] = useState([]);
    const [coursePosition2, setCoursePosition2] = useState([]);
    const [voyageDetails, setVoyageDetails] = useState([]);
    const [averageSpeed, setAverageSpeed] = useState([]);
    useEffect(() => {
        const gnarr = [];
        const gnarr2 = [];
        // const asarr = [];
        // const vfarr = [];
        const cparr = [];
        const cparr2 = [];
        const voyagedetail = [];
        const speed = [];

        Sample.forEach((ele, index) => {
            console.log(ele.anomaly_array)
            if (index === 0) {
                //to get General Information Data
                let gn = {
                    "Trackname": ele.trackname,
                    "IMO": ele.imo_no,
                    "MMSI": ele.mmsi_no,
                    "Callsign": ele.call_sign,
                    "Width": ele.width,
                    "Anomaly status": ele.anomaly_status,
                    "Anomaly array": country_code(ele.anomaly_array.split(",")[0]),
                };
                if(ele.anomaly_status === "false" || ele.anomaly_status === ""){
                    gn = {
                        "Trackname": ele.trackname,
                        "IMO": ele.imo_no,
                        "MMSI": ele.mmsi_no,
                        "Callsign": ele.call_sign,
                        "Width": ele.width,
                        "Anomaly status": ele.anomaly_status,
                    };
                }

                const verificationtime = moment(ele.verification_time * 1000).format("DD/MM/YYYY HH:mm");
                const gn2 = {
                    // "Source type: ": ele.source_type_name,
                    "Length": ele.length,
                    "Gross tonnage": ele.vessel_tonnage,
                    "Track type": ele.track_type_name,
                    "Flag": ele.country_name,
                    "Owner unit": ele.owner_unit_name,
                    "Verification Flag": ele.verification_flag,
                    "Verification time": verificationtime
                };

                Object.keys(gn).map((key, index) => {
                    console.log(key)
                    console.log(gn[key])
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

                //to set Course_Position Data
                const cp1 = {
                    "Navigational Status: ": ele.navigation_status,
                    "Course: ": ele.course,
                    "Latitude: ": ele.latitude,
                    "Longitude: ": ele.longitude,
                    "Speed: ": ele.speed,
                    "Status: ": ele.status,
                    "Source type: ": ele.source_type_name,
                };

                const updateDate = moment(ele.updated_on * 1000).format("DD/MM/YYYY HH:mm");
                const cp2 = {
                    "Destination: ": ele.destinationpoint,
                    "ETA: ": ele.eta,
                    // navigation_status: ele.navigation_status,
                    "Last update: ": updateDate,
                }

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
            }
            const sensorRecoderDate = moment(ele.sensor_timestamp * 1000).format("DD/MM/YYYY  HH:mm");
            const RecoderDate = moment(ele.recorded_timestamp * 1000).format("DD/MM/YYYY  HH:mm");
            // const ms = moment(RecoderDate, "DD/MM/YYYY HH:mm:ss").diff(sensorRecoderDate, "minutes");
            // const numdays = Math.floor(ms / 1440);
            // const numhours = Math.floor((ms % 1440) / 60);
            // const nummins = Math.floor((ms % 1440) % 60);
            // const dur = numdays + " days"+ numhours + " hrs"+ nummins+ "mins"
            // console.log(dur)

            const dur = ele.recorded_timestamp - ele.sensor_timestamp;
            voyagedetail.push({
                destinationpoint: ele.destinationpoint,
                sensor_timestamp: sensorRecoderDate,
                recorded_timestamp: RecoderDate,
                Duration: dur * 1000,
            })

            speed.push(
                ele.speed,
            )
        })

        setGeneralInfo(gnarr);
        setGenralInfo2(gnarr2);
        // setanomaly(asarr);
        // setverification(vfarr);
        setCoursePosition(cparr);
        setCoursePosition2(cparr2);
        setVoyageDetails(voyagedetail);
        setAverageSpeed(speed);
        // console.log(asarr);
        // console.log(vfarr);
        // console.log(averageSpeed);
        // console.log(speed);
        // console.log(generalInfo);
        // console.log(genralinfo2);
        // console.log(coursePosition);
    }, [])
    return (
        <>
            <GeneralInformation gndata1={generalInfo} gndata2={genralinfo2}/>
            <CourseDetails cpdata1={coursePosition} cpdata2={coursePosition2} voyageDetails={voyageDetails} />
            <AverageSpeedGraph speedata={averageSpeed} />
        </>
    )
}
