import './App.css';
import Devinfo from './Components/devinfo';
import Navbar from './Components/navbar';
import Aboutme from './Components/aboutme';
import Skills from './Components/skills';
import Experience from './Components/experience';
import Work from './Components/work';
import Testimonials from './Components/testimonials';
import Getintouch from './Components/getintouch';
import Footer from './Components/footer';

function App() {
  return (
    <>
      <Navbar />
      <Devinfo />
      <Aboutme />
      <Skills />
      <Experience />
      <Work />
      <Testimonials />
      <Getintouch />
      <Footer />
    </>
  );
}

export default App;