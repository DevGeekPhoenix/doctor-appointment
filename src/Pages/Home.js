import { Component } from "react";
import BackGround from "../Pages/background.png";
import "../App.css";
import Navbar from "../Components/NavBar/NavBar";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <img className="homebg" src={BackGround} />
        <Navbar />
        <Link to={"/doctordcardlist"}>
          <button className="font-bold text-2xl mt-80 mr-52 bg-[#df7539]  pt-7 pb-7 pl-20 pr-20 rounded-lg">
            لیست پزشکان
          </button>
        </Link>
      </div>
    );
  }
}

export default App;
