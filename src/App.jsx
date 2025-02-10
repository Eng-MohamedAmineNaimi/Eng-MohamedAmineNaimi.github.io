import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, /*Works,*/ StarsCanvas,ParcoursAcademique, Forma, StagesAndExperiences, Certification } from "./components";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <div className='relative z-0'>
          <Hero />
        </div>
        <About />
        <Tech />
     
       <ParcoursAcademique/>
       <Forma/>
      
        <Certification />
        <StagesAndExperiences/>
       
          <Contact />
          <StarsCanvas />
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
