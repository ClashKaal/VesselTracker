import { useEffect, useState } from 'react';
import {
    Routes,
    Route,
    useLocation
} from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import Home from './Containers/Home';
// import ShipImages from './Components/ShipImages';
import axios from 'axios';

function App() {
    return (
        <>
            <Header/>
            <Home />
            {/* <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/shipgallery" element={<ShipImages />} />
            </Routes> */}
        </>
    );
}

export default App;
