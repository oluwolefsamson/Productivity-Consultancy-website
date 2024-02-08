import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Company from './Components/Company/Company';
import AboutCard from './Components/AboutCard/AboutCard';
import Survey from './Components/Survey/Survey';
import Icons from './Components/Icons/Icons';
import Contact from './Components/Contact/Contact';
import ManagementTeam from './Components/ManagementTeam/ManagementTeam';
import GetStarted from './Components/GetStarted/GetStarted';
import Footer from './Components/Footer/Footer';
import More from './Components/More/More';
import Overview from './Components/Overview/Overview';

function App() {
  return (
    <>
      < Navbar />
      < Hero />
      < Company />
      < About />
      < AboutCard />
      < Survey />
      < Contact />
      < Overview />
      < Icons />
      {/* < More /> */}
      < ManagementTeam /> 
      < GetStarted />
      < Footer />
      
    </>
  );
}

export default App;
