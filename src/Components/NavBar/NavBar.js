import React from "react";
import logo from "../../Pages/logoimg.png";
import logotext from "../../Pages/logotext.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-wrap">
      <Link to={"/"}>
        <p className="w-2/2 font-bold text-base	flex-none bg-[#df7539] pt-4 pb-4 pl-12 pr-12 mt-5 mr-10 rounded-lg	">
          خانه
        </p>
      </Link>
      <Link to={"/doctordcardlist"}>
        <p className="w-2/2 font-bold text-base flex-none bg-[#df7539] pt-4 pb-4 pl-8 pr-8 mt-5 mr-10 rounded-lg	">
          پزشکان ما
        </p>
      </Link>

      <Link to={"/About"}>
        <p className="w-2/2 font-bold text-base flex-none bg-[#df7539] pt-4 pb-4 pl-9 pr-9 mt-5 mr-10 rounded-lg	">
          {" "}
          درباره ما
        </p>
      </Link>

      <div className="flex flex-wrap absolute left-px	mt-4 ml-10 bg-[#df7539] rounded-lg">
        <img className="mt-1 w-56 h-16" src={logotext} />
        <img className="ml-4 w-20 h-16" src={logo} />
      </div>
    </div>
  );
};

export default Navbar;
