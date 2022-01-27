import React,{useEffect, useState} from 'react'
import AverageSpeedGraph from '../Components/AverageSpeedGraph'
import CourseDetails from '../Components/Course_Position'
import GeneralInformation from '../Components/GeneralInformation'

import Sample from '../Sample_Data/Sample.json';
import moment from 'moment';

export default function Home() {
    const [generalInfo, setGeneralInfo] = useState([]);
  const [genralinfo2, setGenralInfo2] = useState([]);
  const [coursePosition, setCoursePosition] = useState([]);
  const [coursePosition2, setCoursePosition2] = useState([]);
  const [voyageDetails, setVoyageDetails] = useState([]);
  const [averageSpeed, setAverageSpeed] = useState([]);
  useEffect(()=>{
    const gnarr = [];
    const gnarr2 = [];

    const cparr = [];
    const cparr2 = [];
    const voyagedetail = [];
    const speed = [];
    Sample.forEach((ele, index)=>{
        if(index === 0){
            //to get General Information Data
            const gn = {
                Trackname: ele.trackname,
                IMO: ele.imo_no,
                MMSI: ele.mmsi_no,
                Callsign: ele.call_sign,
                Width: ele.width,
                Length: ele.length,
                Gross_Tonnage: ele.vessel_tonnage
            };

            const gn2 = {
                sourcetype_name: ele.source_type_name,
                track_type_name: ele.track_type_name,
                country_name: ele.country_name,
                owner_unit_name: ele.owner_unit_name
             };

            Object.keys(gn).map((key, index)=>{
                console.log(key)
                console.log(gn[key])
                gnarr.push({
                    name: key,
                    value:gn[key],
                })
              })
              Object.keys(gn2).map((key, index)=>{
                gnarr2.push({
                    name: key,
                    value:gn2[key],
                })
              })


              //to set Course_Position Data
              const cp1 = {
                  navigation_status: ele.navigation_status,
                  course: ele.course,
                  latitude: ele.latitude,
                  longitude: ele.longitude,
                  speed: ele.speed,
                  status: ele.status,
                  source_type_name: ele.source_type_name
              };

              const cp2 = {
                  destinationpoint: ele.destinationpoint,
                  eta: ele.eta,
                  navigation_status: ele.navigation_status,
                  updated_on: ele.updated_on,
              }

              Object.keys(cp1).map((key, index)=>{
                  cparr.push({
                      name: key,
                      value: cp1[key],
                  })
              })
              Object.keys(cp2).map((key, index)=>{
                  cparr2.push({
                      name: key,
                      value: cp2[key],
                  })
              })
        }
        const sensorRecoderDate = moment(ele.sensor_timestamp * 1000).format("DD/MM/YYYY  HH:mm");
        const RecoderDate = moment(ele.recorded_timestamp * 1000).format("DD/MM/YYYY  HH:mm");

        voyagedetail.push({
            destinationpoint: ele.destinationpoint,
            sensor_timestamp: sensorRecoderDate,
            recorded_timestamp: RecoderDate,
        })

        speed.push(
            ele.speed,
        )
    })

    setGeneralInfo(gnarr);
    setGenralInfo2(gnarr2);
    setCoursePosition(cparr);
    setCoursePosition2(cparr2);
    setVoyageDetails(voyagedetail);
    setAverageSpeed(speed);
    // console.log(averageSpeed);
    // console.log(speed);
    // console.log(generalInfo);
    // console.log(genralinfo2);
    // console.log(coursePosition);
  },[])
    return (
        <>
             <GeneralInformation gndata1={generalInfo} gndata2={genralinfo2}/>
             <CourseDetails cpdata1={coursePosition} cpdata2={coursePosition2} voyageDetails={voyageDetails}/>
             <AverageSpeedGraph speedata={averageSpeed}/>   
        </>
    )
}
