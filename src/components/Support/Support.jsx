import images from "../../constants/images";

import "./support.css";


const Support = () => {

    return (

        <section className="support py-6" id="support">
            <div className="container ">
                <div className="section-title bg-dark">
                    <h2 className="text-upper text-white text-center"> updates & support </h2>
                </div>

                <div className="support-content grid py-6 text-center">
                    <div className="support-content-left" data-aos="fade-right" >
                        <p className="text mx-auto"> Lorem ipsum dolor sit amet consectetur adipisicing 
                        elit. Quae ab perferendis, necessitatibus nam architecto commodi dicta 
                        dolore voluptate vero, temporibus provident ipsum voluptatum odio 
                        recusandae, iste non tempora dolores reprehenderit. 
                        </p>
                        <p className="text mx-auto"> Lorem ipsum dolor sit amet consectetur adipisicing 
                        elit. Quae ab perferendis, necessitatibus nam architecto commodi dicta 
                        dolore voluptate vero, temporibus provident ipsum voluptatum odio 
                        recusandae, iste non tempora dolores reprehenderit. 
                        </p>
                        <a href="#" className="btn btn-red"> Support center </a>
                    </div>
                    
                    <div className="support-content-right" data-aos="fade-left">
                        <img src={images.header_background} alt="Support" className="mx-auto" />
                    </div>
                </div>
            </div>
       
        </section>
    );
}

export default Support;