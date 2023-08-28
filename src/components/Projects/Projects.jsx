import data from "../../constants/data";

import "./projects.css";


const Projects = () => {

    return (

        <section className="projects py-6" id="projects">
            <div className="container">
                <div className="section-title bg-dark">
                    <h2 className="text-upper text-white text-center"> Nossos projetos </h2>
                </div>

                <div className="projects-content grid py-6">
                    { data.works.map((work, index) => (
                        <div className="projects-item text-center" key={index}>
                            <img src={work.img} alt="Projetos" className="mx-auto" />
                            <h4 className="text-upper"> {work.title} </h4>
                        </div>
                    )) }

                </div>
            </div>
 
        </section>
    );
}

export default Projects;