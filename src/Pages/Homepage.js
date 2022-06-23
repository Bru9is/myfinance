
import InfoArea from '../Components/InfoArea';
import InputArea from '../Components/InputArea';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

function HomePage() {
  
  return (
    <div className="Homepage">
      <Navbar />
      <InputArea />
      <InfoArea />
      <Footer />
    </div>
  );
}

export default HomePage;