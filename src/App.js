import "@fontsource/montserrat";
import './App.css';
import SignUpPage from './Pages/SignUpPage';
import AboutPage from './Pages/AboutPage';
import Homepage from './Pages/Homepage';
import ErrorPage from './Pages/ErrorPage';
import { Route, Routes } from "react-router-dom";
import EditArea from "./Pages/EditArea";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path = '/' element = {<SignUpPage/>} />
          <Route path = '/about' element = {<AboutPage/>} />
          <Route path = '/homepage' element = {<Homepage/>} />
          <Route path = '/edit-item/:id' element = {<EditArea/>} />
          <Route path="*" element={ <ErrorPage /> } />
      </Routes>
    </div>
  );
}

export default App;
