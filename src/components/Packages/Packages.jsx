import data from "../../constants/data";

import "./packages.css";


const Packages = () => {

    return (

        <section className="packages py-6" id="packages">
            <div className="container">
                <div className="section-title bg-dark">
                    <h2 className="text-upper text-white text-center"> Nossos pacotes </h2>      
                </div>

                <div className="packages-content grid py-6">
                    { data.packages.map((pack, index) => (
                        <div className="package-item text-center mx-auto" 
                            key={index} data-aos="fade-up" data-aos-duration="3000" >
                            <h3 className="package-item-title"> {pack.type} </h3>
                            <ul className="package-item-list">
                                { pack.service_list.map((serv, i) => (
                                    <li key={i}> {serv} </li>
                                )) }
                            </ul>
                            <div className="package-item-price">
                                <span> R$ {pack.price} </span> /Mês
                            </div>
                            <a href="" className="btn btn-red"> Peça agora </a>
                        </div>
                    )) }

                </div>
            </div>

        </section>
    );
}

export default Packages;