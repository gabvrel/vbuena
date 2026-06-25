import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Slogan from '../components/Slogan';
import MedicalPartnersSlider from '../components/MedicalPartnersSlider';

function Main() {
  return (
    <>
      <Navbar />
      <div id="inicio" className="scroll-mt-32"><Hero /></div>
      <div id="slogan" className="scroll-mt-32"><Slogan /></div>
      <div id="medicalpartners" className="scroll-mt-32"><MedicalPartnersSlider /></div>
      <Footer />
    </>
  );
}
export default Main;
