import data from "../../constants/data";

import "./team.css";


const Team = () => {

    return (

        <section className="team py-6 bg-red" id="team">
            <div className="container">
                <div className="section-title bg-dark">
                    <h2 className="text-upper text-white text-center"> nossa equipe </h2>
                </div>

                <div className="team-content py-6 grid">
                    { data.testimonials.map((testimonial, index) => (
                        <div className="team-item text-center text-white" 
                            key={index} data-aos="fade-up" >
                            <img src={testimonial.img} alt="Equipe" className="mx-auto" />
                            <p className="text-upper fw-7"> {testimonial.name} </p>
                            <span className="text-upper"> {testimonial.text} </span>
                        </div>
                    )) }
                </div>
            </div>

        </section>
    );
}

export default Team;