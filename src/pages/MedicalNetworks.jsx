import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MedicalNetworkMap from '../components/MedicalNetworkMap';
import MedicalDirectory from '../components/MedicalDirectory';
import MedicalSlider from '../components/MedicalSlider';

function MedicalNetworks() {
  return (
    <>
      <Navbar />
      <MedicalNetworkMap />
      <MedicalDirectory />
      <MedicalSlider/>
      <Footer />
    </>
  );
}
export default MedicalNetworks;
