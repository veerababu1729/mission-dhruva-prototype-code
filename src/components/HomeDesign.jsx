import React from "react";
import NavDesign from "./NavDesign";
import BodyHalf from "./BoduHalf";
import { useNavigate } from "react-router-dom";

const HomeDesign=()=>{
    const navigate=useNavigate();
    
    return(
        <>
        <NavDesign/>
        <BodyHalf/>
        </>
    )
}
export default HomeDesign;