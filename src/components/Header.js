import React from "react";
import "./css/home.css";
import bannerImg from "../media/banner.jpg";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className="relative" style={{ background: `url(${bannerImg})` }}>
      <nav className="z-20">
        <div className="banner">
          <div className="navbar">
            <div>
              <img
                src="https://images-platform.99static.com//KlBLMX8dQrcq6hZGnxf5HSnG29I=/8x543:525x1060/fit-in/500x500/99designs-contests-attachments/123/123360/attachment_123360235"
                className="logo shadow-md"
                />
            </div>
            <ul>
              <li>
                <Link className="max-[900px]:text-xs" to='/'>Home</Link>
              </li>
              <li>
                <Link className="max-[900px]:text-xs" to='/courses'>Courses</Link>
              </li>
              <li>
                <Link className="max-[900px]:text-xs" to='/contact'>Contact us</Link>
              </li>
              <li>
                <Link className="max-[900px]:text-xs" to='/about'>About us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="absolute  my-auto top-56 left-0 right-0 mx-auto flex flex-col justify-center items-center">
        <div className="z-40 flex justify-center items-center text-5xl max-lg:text-3xl max-sm:text-xl my-8 text-white slide-right">
          <h1 className="[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] " ><strong>Learn technology with <br /> industry experts</strong></h1>
        </div>
        <Link
          to='/courses'
          style={{ backgroundColor: "#FF8D0A" }}
          className="font-bold py-3 px-6 rounded-3xl"
        >
          Explore Courses
        </Link>
      </div>
    </div>
  );
};

export default Header;
