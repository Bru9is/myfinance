import InfoArea from '../Components/InfoArea';
import InputArea from '../Components/InputArea';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Income  from "../Components/Income";
import Expense from '../Components/Expense'
import Remaining from "../Components/Remaining";
import Month from '../Components/Month'
import { useState, useEffect } from "react";
import axios from "axios";
import './Homepage.css'

function HomePage() {
  const [info, setInfo] = useState();
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    
    axios
      .get("http://ironrest.herokuapp.com/myFinance")
      .then((response) => setInfo(response.data))
      .catch((err) => console.log(err));
  }, [refresh, info]);
  
  if (!info) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="Homepage">
      <Navbar />
      <div className = 'info-area' >
        <Month />
        <Income info = { info }/>
        <Expense info = { info }/>
        <Remaining info = { info }/>
      </div>

        <InputArea />
        <InfoArea info = { info }/>
        <Footer />
    </div>
  );
}

export default HomePage;