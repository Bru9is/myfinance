import "@fontsource/montserrat";
import './App.css';
import SignUpPage from './Pages/SignUpPage';
import AboutPage from './Pages/AboutPage';
import Homepage from './Pages/Homepage';
import ErrorPage from './Pages/ErrorPage';
import { Route, Routes } from "react-router-dom";
import InputArea from './Components/InputArea';
import InfoArea from './Components/InfoArea';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path = '/' element = {<SignUpPage/>} />
          <Route path = '/about' element = {<AboutPage/>} />
          <Route path = '/homepage' element = {<Homepage/>} />
          <Route path="*" element={ <ErrorPage /> } />
          <Route path="/info" element={<InfoArea />} />
          <Route path="/new-item" element={<InputArea />} />
      </Routes>
    </div>
  );
}

export default App;
