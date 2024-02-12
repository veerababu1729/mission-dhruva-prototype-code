import React, { useEffect, useState } from "react";
import NavDesign from "./NavDesign";
import './Hports.css';
import Gallery from'../image/Gallery.jpg';
import { useNavigate } from "react-router-dom";
const Hport = () => {
    const navigate=useNavigate();
    const [da, setda] = useState("false");
    const handleData = () => {
        setda("true");
        navigate("/port");
    }
    useEffect(() => {
        setda('false');
    }, [])

    return (
        <>
            <NavDesign />
            
            <div className="hmain">
                <div className="imag"> <img src={Gallery} alt="gallery image"/></div>
            </div>
            <h1 className="oner" >Hospital Portfolios</h1>
            <div className="Mainp">
                <div className="boxin"> 
                    <div className="boximg"><img src="https://shorturl.at/dkzBK" alt="desc" /></div>
                    <div className="Desc">
                        <h3>Name: Hospi</h3>
                        <div>
                            <p>Location: kakinada,Main Road</p>
                        </div>
                        <div className="butt2"><h3 className="oner" onClick={handleData}>View</h3></div>
                    </div>
                </div>
                <div className="boxin"> 
                    <div className="boximg"><img src="https://shorturl.at/dkzBK" alt="desc" /></div>
                    <div className="Desc">
                        <h3>Name: Hospi</h3>
                        <div>
                            <p>Location: kakinada,Main Road</p>
                        </div>
                        <div className="butt2"><h3 className="oner">View</h3></div>
                    </div>
                </div>
                <div className="boxin"> 
                    <div className="boximg"><img src="https://shorturl.at/dkzBK" alt="desc" /></div>
                    <div className="Desc">
                        <h3>Name: Hospi</h3>
                        <div>
                            <p>Location: kakinada,Main Road</p>
                        </div>
                        <div className="butt2"><h3 className="oner">View</h3></div>
                    </div>
                </div>
                <div className="boxin"> 
                    <div className="boximg"><img src="https://shorturl.at/dkzBK" alt="desc" /></div>
                    <div className="Desc">
                        <h3>Name: Hospi</h3>
                        <div>
                            <p>Location: kakinada,Main Road</p>
                        </div>
                        <div className="butt2"><h3 className="oner">View</h3></div>
                    </div>
                </div>
                <div className="boxin"> 
                    <div className="boximg"><img src="https://shorturl.at/dkzBK" alt="desc" /></div>
                    <div className="Desc">
                        <h3>Name: Hospi</h3>
                        <div>
                            <p>Location: kakinada,Main Road</p>
                        </div>
                        <div className="butt2"><h3 className="oner">View</h3></div>
                    </div>
                </div>
                <div className="boxin"> 
                    <div className="boximg"><img src="https://shorturl.at/dkzBK" alt="desc" /></div>
                    <div className="Desc">
                        <h3>Name: Hospi</h3>
                        <div>
                            <p>Location: kakinada,Main Road</p>
                        </div>
                        <div className="butt2"><h3 className="oner">View</h3></div>
                    </div>
                </div>

            </div>
            {/* <div className="outerr">
                <h1 className="oner">Hospital Portfolios</h1>

                <div className="ports">
                    <div className="portsin" onClick={handleData}><img src="https://shorturl.at/dkzBK" alt="desc" /></div>
                    <div className="portsin"><img src="https://shorturl.at/dkzBK" alt="desc" /></div>
                    <div className="portsin"><img src="https://shorturl.at/dkzBK" alt="desc" /></div>
                    <div className="portsin"><img src="https://shorturl.at/dkzBK" alt="desc" /></div>
                    <div className="portsin"><img src="https://shorturl.at/dkzBK" alt="desc" /></div>
                    <div className="portsin"><img src="https://shorturl.at/dkzBK" alt="desc" /></div>
                    <div className="portsin"><img src="https://shorturl.at/dkzBK" alt="desc" /></div>
                    <div className="portsin"><img src="https://shorturl.at/dkzBK" alt="desc" /></div>
                    <div className="portsin"><img src="https://shorturl.at/dkzBK" alt="desc" /></div>
                    <div className="portsin"><img src="https://shorturl.at/dkzBK" alt="desc" /></div>
                    <div className="portsin"><img src="https://shorturl.at/dkzBK" alt="desc" /></div>
                </div>
            </div> */}
        </>
    )
}
export default Hport;