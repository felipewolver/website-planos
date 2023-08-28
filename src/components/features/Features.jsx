import data from "../../constants/data";

import "./features.css";


const Features = () => {

    return (
        
        <section className="features py-6" id="features">
            <div className="container">
                <div className="section-title bg-dark">
                    <h2 className="text-upper text-white text-center"> nossos features </h2>
                </div>

                <div className="features-content grid py-6">
                    { data.stats.map((stat, index) => (
                        <div className="features-item text-center" 
                            key={index} data-aos="zoom-in" >
                            <div className="features-item-icon">
                                <img src={stat.img} alt="icones" className="mx-auto" />
                            </div>
                            <div className="features-item-text">
                                <h2> {stat.title} </h2>
                                <p className="text mx-auto"> {stat.value} </p>
                            </div>
                        </div>
                    )) }

                </div>
            </div>

        </section>
    );
}

export default Features;