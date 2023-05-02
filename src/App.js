import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/signin';
import Info from './components/Info.js';
import EditMovie from './components/Edit.js';
import Add from './components/Add';
import ContactUs from './components/ContactUs';
import MovieBoard from './components/MovieBoard.js';
import AdminBoard from './components/AdminBoard.js';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/addmovie" element={<Add />} />
        <Route path="/edit/:movieid" element={<EditMovie />} />
        <Route path="/info/:movieid" element={<Info />} />
        <Route path="/adminboard" element={<AdminBoard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/movieboard" element={<MovieBoard />} />
        <Route path="/" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
