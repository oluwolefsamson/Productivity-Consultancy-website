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
      < Icons />
      < ManagementTeam /> 
      < GetStarted />
      < Footer />
    </>
  );
}

export default App;
