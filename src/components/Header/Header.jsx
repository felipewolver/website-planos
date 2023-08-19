import { FaPaperPlane } from "react-icons/fa";

import images from "../../constants/images";
import "./header.css";


const Header = () => {

    return (
        <header className="header flex" id="header">
            <div className="container">
                <div className="header-container grid text-center 
                    py-6 text-white"
                > {/* As classes grid text-center py... procedem do arquivo App.css porque este compontent Header será chamado no component App.jsx*/}
                    <div className="header-content-left">
                        <h1 className="header-title text-upper"> Info98 App Desenvolvimentos </h1>
                        <p className="text"> Lorem ipsum dolor sit, amet consectetur 
                            adipisicing elit. Ullam ratione aperiam iste et natus laborum 
                            voluptatum, autem, recusandae enim, pariatur debitis odit perspiciatis. 
                            Nulla quos facilis eveniet veniam nesciunt eaque! 
                        </p>
                        <a href="" className="btn btn-dark">  
                            <span> { <FaPaperPlane /> } </span>
                        </a>
                    </div>    
                </div>

            </div>
        
        </header>
    );
} 

export default Header;