import React from 'react';
import Navbar from "./components/Navbar";
import Herosec from "./components/Herosec";
import Secone from "./components/Secone";
import Sectwo from "./components/Sectwo";
import Secthree from "./components/Secthree";
import Adsec from "./components/Adsec";
import Projects from "./components/Projects";
import Secfour from "./components/Secfour";
import Secsix from "./components/Secsix";
import Section2 from './components/Section2';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import New from './components/New';
import Products from './components/Products';
import Technology from './components/Technology';
import How from './components/How';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChooseUs from './components/ChooseUs';
import Infograp from './components/infograp';
import TopMeni from './components/TopMeni';



function App() {

  return (
    <div className="App">

      <div className='overflow-hidden'> 
        <TopMeni/>
        <Navbar />
        <Herosec />
        <Section2/>
        
        <New/>
        
        
         <ChooseUs/>

       <How/>

       {/* <Infograp/> */}
       <Contact/>
      <Adsec/>
      
        
       
        
        
      </div>

    </div>
  );
}

export default App;
