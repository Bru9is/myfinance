import './App.css';
import { Routes, Route } from "react-router-dom";
import InputArea from './Components/InputArea';
import ResumeItem from './Components/ResumeItem';
import InfoArea from './Components/InfoArea';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<InfoArea />} />
        <Route path="/new-item" element={<InputArea />} />
        
      </Routes>
    </div>
  );
}

export default App;
