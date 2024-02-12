import React from "react";
import Navbar from "./Navbar";
import Scroll from "./Scroll";
import "./Home.css";
const Home = () => {
    return (
        <>
            <Navbar />
            <div className="Homecenter">

                <div className="left">
                    <h1 class="my-heading">
                        The best Price <br />
                        <span>For the Medicine</span><br/>
                        <text>     kakinada</text>
                    </h1>
                    
                </div>
                <div className="right">
                <img src="https://img.freepik.com/free-photo/high-angle-pill-foils-plastic-containers_23-2148533456.jpg?size=626&ext=jpg&ga=GA1.1.1926509971.1706538481&semt=sph" alt="Description of your image" />
                </div>
            </div>
            <Scroll />
            {/* <Hospitals/> */}
        </>
    )
}
export default Home;