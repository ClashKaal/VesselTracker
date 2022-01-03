import './App.css';
import Header from './Components/Header';
import GeneralInformation from './Components/GeneralInformation';
import CourseDetails from './Components/Course_Position';
import ShipMaster_General from './Components/ShipMaster_General';
import AverageSpeedGraph from './Components/AverageSpeedGraph';

function App() {
   return (
   <>
    <Header/>
    {/* <ShipImages/> */}
    <GeneralInformation/>
    <CourseDetails/>
    <AverageSpeedGraph/>
    <h2> Ship Master Data</h2>
    <ShipMaster_General/>
    
   </>
  );
}

export default App;
