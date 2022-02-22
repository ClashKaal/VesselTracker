import { useEffect, useState } from 'react';
import {
    Routes,
    Route,
    useLocation
} from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import Home from './Containers/Home';
import ShipImages from './Components/ShipImages';
import axios from 'axios';

function TrackInfo() {
    const Location = useLocation()
    const a = Location?.search?.split("&");
    const mmsi_no = a[1]?.split("=").at(1)
    const imo_no = a[2]?.split("=").at(1)
    let newurl = `http://192.168.11.130:8090/TrafficAnalysis/restAPI/TrackInfo?&mmsi_no=${mmsi_no}&imo_no=${imo_no}`;
    console.log(newurl)
    useEffect(() => {
        axios.get(newurl).then((response) => {
            console.log(response)
        })
    }, [])
    return <h1>{
        Location.search}</h1>
}
function App() {

    // const Location=useLocation()
    // const a = Location.search.split("&");
    // const mmsi_no=a[1].split("=").at(1)
    // const imo_no=a[2].split("=").at(1)
    // let newurl=`http://192.168.11.130:8090/TrafficAnalysis/restAPI/TrackInfo?&mmsi_no=${mmsi_no}&imo_no=${imo_no}`;
    // console.log(newurl)
    // useEffect(() => {
    //     axios.get(newurl).then((response) =>{
    //         console.log(response)
    //     })
    // },[])
    return (
        <>
            <Header />
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/shipgallery" element={<ShipImages />} />
            </Routes>
        </>
    );
}

export default App;
