import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import "./navbar.css";


const Navbar = () => {
    
    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click);
    const close = () => setClick(false); 


    return (
        
        <nav className="navbar">
           <div className="container flex navbar-content">
                <div className="brand-and-toggler flex">
                    <a href="index.html" className="navbar-brand flex 
                        text-upper fw-7 fs-22" >  
                        <span className="text-white"> info98 </span>
                        <span > tech </span>

                    </a>
                    <button type="button" className="navbar-show-btn text-white"
                        onClick={() => handleClick()} > 
                        <FaBars size={26}/> 
                    </button>
                </div>
                   
                <div className={`navbar-collapse flex flex-center ${click ? "show-navbar" : ""} `}>
                    <button type="button" className="navbar-hide-btn text-white" 
                        onClick={() => close()} >
                        <FaTimes size={32} />
                    </button>

                    <ul className="navbar-nav text-upper text-upper text-white
                        text-center fw-6 ls-1 fs-20" >
                        <li className="nav-iten">
                            <a href="#header" className="nav-link"> Home </a>
                        </li>

                        <li className="nav-item">
                            <a href="#header" className="nav-link"> nossos serviços </a>
                        </li>

                        <li className="nav-item">
                            <a href="#header" className="nav-link"> features </a>
                        </li>

                        <li className="nav-item">
                            <a href="#header" className="nav-link"> pacotes </a>
                        </li>

                        <li className="nav-item">
                            <a href="#header" className="nav-link"> projetos </a>
                        </li>

                        <li className="nav-item">
                            <a href="#header" className="nav-link"> equipes </a>
                        </li>

                        <li className="nav-item">
                            <a href="#header" className="nav-link"> suportes </a>
                        </li>

                    </ul>
                </div>
           </div>

        </nav>
    );
}

export default Navbar;