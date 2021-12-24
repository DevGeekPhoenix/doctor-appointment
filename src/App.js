import Home from "./Pages/Home";
import { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import SingleDoctor from "./Pages/SingleDoctor";
import DoctorsCardList from "./Pages/DoctorsCardList";
import About from "./Pages/About";

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor/:id" element={<SingleDoctor />} />
        <Route path="/About" element={<About />} />
        <Route path="/doctordcardlist" element={<DoctorsCardList />} />
      </Routes>
    );
  }
}

export default App;
