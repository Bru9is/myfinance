import InfoArea from '../Components/InfoArea';
import InputArea from '../Components/InputArea';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Income  from "../Components/Income";
import Expense from '../Components/Expense'
import Remaining from "../Components/Remaining";
import Month from '../Components/Month'
import './Homepage.css'

function HomePage() {
  
  return (
    <div className="Homepage">
      <Navbar />
      <div className = 'info-area' >
        <Month />
        <Income />
        <Expense />
        <Remaining />
      </div>

        <InputArea />
        <InfoArea />
        <Footer />
    </div>
  );
}

export default HomePage;