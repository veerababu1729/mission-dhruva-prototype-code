// import React from "react"
// import Opback from '../image/op_back.jpg';
// import logo from '../image/logo.jpg';
// import NavDesign from "./NavDesign";
// import "./Op.css";
// const Op = (props) => {
//   var x = "Arun";
//   return (
//     <>
//       <NavDesign />
//       <div className="mainn">
//         <div className="main1">
//           <img src={Opback} alt="logo" />
//         </div>
//         <div className="main2">
//           <h1 className="oner">Now Cheking</h1>
//           <div className="numbo">
//             <div className="numb">
//               <h1>12</h1>
//             </div>
//           </div>

//           <div className="pait">
//             <div className="paitl">
//               <h1>Doctor Name: {x}</h1>
//               <ul>
//                 <li>Specialist</li>
//               </ul>
//             </div>
//             <div className="paitr">
//               <h1>Patient Name: sai</h1>
//               <ul>
//                 <li>Specialist</li>

//               </ul>
//             </div>
//           </div>
//           <div className="marq">
//             <marquee direction="up" >Doctors are considered the most important and responsible people in society. They are the ones who support when someone is struggling with their health. Doctors are the ones to have a profound knowledge of all kinds of diseases, their symptoms, and their treatments.</marquee>
//           </div>
//           <h1>Outpatient List</h1>
//           <ol type="1" className="outp">

//             <li>This is Teja</li>
//             <li>Uppal balu</li>
//             <li>Qatar Papa</li>
//           </ol>
//         </div>

//       </div>
      
//     </>
//   )
// };

// export default Op;

// Op.js

import React from "react";
import Opback from '../image/op_back.jpg';
import logo from '../image/logo.jpg';
import NavDesign from "./NavDesign";
import "./Op.css";

const Op = (props) => {
  var x = "Arun";
  return (
    <>
      
      <NavDesign />
      <div className="mainn">
        <div className="main1">
          <img src={Opback} alt="logo" />
          <div className="overlay">
            <h1 className="overlay-text">Welcome to Our Clinic</h1>
          </div>
        </div>
        <div className="main2">
          <h1 className="header">Now Checking</h1>
          <div className="appointment-info">
            <div className="appointment-item">
              <h2>Patient Checked In</h2>
              <div className="number">12</div>
            </div>
            <div className="appointment-item">
              <h2>Next Patient</h2>
              <div className="next-patient">Teja</div>
            </div>
          </div>
          <div className="patient-info">
            <div className="doctor-info">
              <h2>Doctor Name:</h2>
              <p>{x}</p>
              <ul>
                <li>Specialist</li>
              </ul>
            </div>
            <div className="patient-name">
              <h2>Patient Name:</h2>
              <p>sai</p>
              <ul>
                <li>**********</li>
              </ul>
            </div>
          </div>
          <div className="marquee">
            <marquee direction="up" behavior="scroll" scrollamount="3">Doctors are considered the most important and responsible people in society. They are the ones who support when someone is struggling with their health. Doctors are the ones to have a profound knowledge of all kinds of diseases, their symptoms, and their treatments.</marquee>
          </div>
          <div className="outpatient-list">
            <h2>Outpatient List</h2>
            <ol>
              <li>Teja</li>
              <li>Uppal balu</li>
              <li>Qatar Papa</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  )
};

export default Op;
