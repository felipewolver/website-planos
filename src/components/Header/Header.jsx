import { FaPaperPlane } from "react-icons/fa";

import images from "../../constants/images";
import Navbar from "../Navbar/Navbar";
import "./header.css";


const Header = () => {

    return (
        <header className="header flex" id="header">
            <Navbar />

            <div className="container">
                <div className="header-content grid text-center 
                    py-6 text-white"
                > {/* As classes grid text-center py... procedem do arquivo App.css porque este compontent Header será chamado no component App.jsx*/}
                    <div className="header-content-left" data-aos="fade-right">
                        <h1 className="header-title text-upper"> Info98 Tech Desenvolvimentos. </h1>
                        <p className="text"> Lorem ipsum dolor sit, amet consectetur 
                            adipisicing elit. Ullam ratione aperiam iste et natus laborum 
                            voluptatum, autem, recusandae enim, pariatur debitis odit perspiciatis. 
                            Nulla quos facilis eveniet veniam nesciunt eaque! 
                        </p>
                        <a href="" className="btn btn-dark">  
                            <span> Veja mais </span> { <FaPaperPlane /> }
                        </a>
                    </div>  

                    <div className="header-content-right" data-aos="fade-left" >
                        <img src={images.header_bg} alt="devices_images" />
                    </div>
                </div>

            </div>
        
        </header>
    );
} 

export default Header;