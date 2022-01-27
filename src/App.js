import { useEffect, useState } from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import Home from './Containers/Home';
import ShipImages from './Components/ShipImages';

// import ShipMaster_General from './Components/ShipMaster_General';


// import VoyageDetails from './Components/VoyageDetails';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="shipgallery" element={<ShipImages />} />

            </Routes>
        </>
    );
}

export default App;
