import React, { useEffect, useState } from "react";
import ScrollCarousel from 'scroll-carousel-react';
import './BDF.css';
import Homes from '../image/Hosp.jpg';
import Op from '../image/Op.jpg';
import Brandd from '../image/brand.jpg';
import Rights from "./Rights";
import { useNavigate } from "react-router-dom";
const BodyHalf = () => {
    const navigate = useNavigate();
    const [sub, setsub] = useState('false');
    const [pro, setpropp] = useState('/');
    const handlenext = (prop) => {
        setsub('true');
        setpropp(prop);

    }
    useEffect(() => {
        setsub('false');
    }, []);
    if (sub) {
        navigate(pro);
    }
    return (
        <>
            <div className="body1">
                
                <div className="bodyin1e">
                    

                    <div className="bodin1" onClick={() => handlenext('/Hport')}>
                        <img src={Homes} alt="smndvm" />
                    </div>
                    <div className="bodin12" >
                        <h1>Hospital Portfolios</h1>
                        <h3>Explore our hospital portfolios, where we showcase our commitment to quality
                            healthcare, patient satisfaction, and cutting-edge medical services.
                            From state-of-the-art facilities to compassionate care, our portfolio
                            highlights our dedication to serving our community with excellence</h3>
                        <div className="butt" onClick={() => handlenext('/Hport')}> Explore Now</div>

                    </div>


                </div>
                <div className="bodyin1">
                    <div className="bodin12">
                        <h1 className="headdd">Genric Vs
                            <br /> Branded</h1>
                        <h3>Branded pharmaceuticals are original drugs marketed under a trademarked name by
                            pharmaceutical companies, typically sold at higher prices due to research, development,
                            and marketing investments. Generic pharmaceuticals are identical copies of branded drugs,
                            sold at lower prices once the patent expires, meeting the same safety and efficacy
                            standards</h3>
                        <div className="butt"onClick={() => handlenext('/Branded')}> Explore Now</div>

                    </div>
                    <div className="bodin1">
                        <img src={Brandd} onClick={() => handlenext('/Branded')} alt="smndvm" />
                    </div>


                </div>
                <div className="bodyin1">
                    <div className="bodin1">
                        <img src={Op} onClick={() => handlenext('/Op')} alt="smndvm" />
                    </div>
                    <div className="bodin12">
                        <h1>Op System</h1>
                        <h3>Op System is a user-friendly application designed to efficiently manage and track the queue of patients in outpatient departments (OP) of medical facilities. It offers real-time status updates, customizable workflow, patient communication features, data analytics, and seamless integration with electronic health records (EHR). Op System enhances operational efficiency, reduces waiting times, and improves the overall outpatient experience.</h3>
                        <div className="butt" onClick={() => handlenext('/Op')}> Explore Now</div>

                    </div>

                </div>
            </div>
            <div className="oner">
                <h1> PatientRights & Responsibilites</h1>
            </div>
            <Rights />
        </>
    )
}
export default BodyHalf;