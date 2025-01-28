import { useRef, useState } from "react";
import { HiXMark, HiMiniBars3BottomLeft } from "react-icons/hi2";
import logo from "../assets/images/company-logo.png";

function Navbar() {
   const navRef = useRef();
   const [hamburger, setHamburger] = useState("isClosed");

   const showNavbar = () => {
      navRef.current.classList.toggle("responsive-nav");
      // hamburger === "FaBars" ?
      setHamburger(hamburger === "isClosed" ? "isOpen" : "isClosed");
   };

   return (
      <>
         <header className="header fixed-top">
            <nav className="headerContainer container d-flex flex-row justify-content-between align-items-center">
               <div className="logoContainer d-flex flex-row align-items-center justify-content-center">
                  <img src={logo} className="logo" alt="" />
                  <p className="companyName m-0 mb-1 ms-1">Convo</p>
               </div>
               <ul ref={navRef} className="navigationItems d-lg-flex flex-row justify-content-lg-between align-items-lg-center m-0 p-0 p-lg-0 ps-3 pt-3">
                  <li className="m-lg-0">Solutions</li>
                  <li className="m-lg-0">Pricing</li>
                  <li className="m-lg-0">Company</li>
                  <li className="m-lg-0">Help</li>
                  <li className="logBtn d-lg-none">
                     <button className=" btn loginBtn">Login</button>
                  </li>
                  <li className="logBtn d-lg-none">
                     <button className=" btn signUpBtn">SignUp</button>
                  </li>
               </ul>
               <div className="loginAndSignup d-none d-lg-flex flex-lg-row align-items-lg-center justify-content-lg-center">
                  <li className="me-2">
                     <button className="btn loginBtn">Login</button>
                  </li>
                  <li className="ms-2">
                     <button className="btn signUpBtn">SignUp</button>
                  </li>
               </div>
               <span className="d-lg-none" onClick={showNavbar}>
                  {hamburger === "isClosed" ? (
                     <HiMiniBars3BottomLeft className="hamburger" />
                  ) : (
                     <HiXMark className="hamburger" />
                  )}
               </span>
            </nav>
         </header>
      </>
   );
}

export default Navbar;
