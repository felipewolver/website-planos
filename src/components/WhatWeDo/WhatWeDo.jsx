import data from "../../constants/data";

import "./whatwedo.css";


// O que fazemos ou nossos serviços
const WhatWeDo = () => {

    return (

        <section className="what-we-do py-6" id="what-we-do">
            <div className="container">
                <div className="section-title bg-dark">
                    <h2 className="text-upper text-white text-center"> o que fazemos </h2>
                </div>
                      
                <div className="what-we-do-content">
                    {data.services.map((service, index) => (
                        <div className="what-we-do-item grid text-center"
                            key={index} >
                            <div className="what-we-do-item-left">
                                <img src={service.img} alt="" className="mx-auto" />
                            </div>
                            <div className="what-we-do-right">
                                <h4 className="text-upper fs-20"> {service.title} </h4>
                                <p className="text mx-auto"> {service.text} </p>
                                <a href="" className="btn btn-red"> veja mais </a>
                            </div>
                             
                        </div>
                    ) )}
                </div>
            </div>
        
        </section>
    );
}

export default WhatWeDo;