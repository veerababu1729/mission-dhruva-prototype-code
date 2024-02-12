import React from "react";
import NavDesign from "./NavDesign";
import './Port.css';
const Port = () => {

    const tableData = [
        {
            treatment: 'CABG (Coronary Artery Bypass Grafting)',
            description:
                'It is done where the blood vessels that supply the heart muscle (coronary arteries) become narrowed or blocked.',
            expenditure: '2.87lakhs',
        },
        {
            treatment: 'Heart Valve',
            description:
                'Heart valve surgery is a medical procedure that repairs or replaces malfunctioning heart valves to restore proper blood flow and improve cardiac function.',
            expenditure: '5.2-5.98lakhs',
        },
        {
            treatment: 'Brain tumor surgery',
            description:
                'Brain tumor surgery is a medical procedure that involves the removal or treatment of abnormal growths within the brain to address tumors and restore neurological function.',
            expenditure: '2.1-2.36lakhs',
        },
        {
            treatment: 'Craniotomy',
            description:
                'This approach commonly treats brain tumors, aneurysms, arterio-venous malformations, subdural empyemas, hematomas, and other cerebral conditions.',
            expenditure: '5.5-6lakhs',
        },
        {
            treatment: 'Ureteroscopy',
            description:
                'Ureteroscopy is a minimally invasive surgical procedure for the diagnosis and treatment of kidney or ureteral issues, using a thin, flexible tube (ureteroscope) inserted through the urinary tract.',
            expenditure: '90k-120k',
        },
        {
            treatment: 'PCNL (Percutaneous Nephrolithotomy)',
            description:
                'PCNL is a minimally invasive surgery to remove kidney stones using a small access tract through the skin, allowing for stone extraction and fragmentation.',
            expenditure: '1-1.3lakhs',
        },
        {
            treatment: 'Cataract',
            description:
                'Cataract surgery is a common and effective procedure involving the removal of the cloudy lens and replacement with an artificial lens to restore clear vision.',
            expenditure: '25k-32k',
        },
        {
            treatment: 'Glaucoma',
            description:
                'Glaucoma surgery involves various procedures designed to reduce intraocular pressure and manage glaucoma, a progressive eye condition that can lead to optic nerve damage and vision loss.',
            expenditure: '35k-40k',
        },
    ];
    const tableDataa = [

        { name: 'Basic Blood Test', cost: 500 },

        { name: 'ECG (or) EKG', cost: 600 },

        { name: 'Cardiac catheterization', cost: 25000 },

        { name: 'Coronary Angiogram', cost: 14000 },

        { name: 'MRI(Magnetic Resonance Imaging)', cost: 8000 },

        { name: 'CT Scan(Computed Tomography)', cost: 6000 },

        { name: 'Lumbar Puncture (Spinal Test)', cost: 2000 },

        { name: 'BUN', cost: 200 },

        { name: 'Urinalysis', cost: 300 },

        { name: 'Optical Coherence Tomography(OCT)', cost: 3000 },

    ];
    return (
        < >
            <NavDesign />
            <div div className="ee">



                <div className="por">
                    <h1 className="oner">Napollo Hospital</h1>
                    <div className="porin">
                        <div className="porinin">
                            <div class="hospital-info">
                                <h1>Name: Napollo Hospital</h1>
                                <p>Location: Kamala Nehru Park Rd, Shivajinagar, Pune, Maharashtra - 411004</p>
                            </div>

                            <div class="hospital-details">
                                <h2>About:</h2>
                                <p>Apollo Hospital is a multi-specialty hospital with dedicated cardiology, neurology, ophthalmology departments, providing precision diagnostics and personalized treatments for heart and brain-related disorders.</p>

                            </div>
                            {/* <div className="porini"><div className="portsin"></div></div> */}
                        </div>
                        <div className="porinn">
                            <img src="https://shorturl.at/dkzBK" alt="desc" />
                        </div>
                    </div>
                    <h1 className="onerr">Gallery</h1>

                </div>
                <div className="portss">
                    {/* <div className="portsin" onClick={handleData}><img src="https://shorturl.at/dkzBK" alt="desc" /></div> */}
                    <div className="portsinn"><img src="https://shorturl.at/dkzBK" alt="desc" /><div class="description">
            <h3>Desc:Ward</h3>
            
        </div></div>
                    <div className="portsinn"><img src="https://shorturl.at/dkzBK" alt="desc" /><div class="description">
            <h3>Desc:Ward</h3>
            
        </div></div>
                    <div className="portsinn"><img src="https://shorturl.at/dkzBK" alt="desc" /><div class="description">
            <h3>Desc:Ward</h3>
            
        </div></div>
                    <div className="portsinn"><img src="https://shorturl.at/dkzBK" alt="desc" /><div class="description">
            <h3>Desc:Ward</h3>
            
        </div></div>
                    <div className="portsinn"><img src="https://shorturl.at/dkzBK" alt="desc" /><div class="description">
            <h3>Desc:Ward</h3>
            
        </div></div>
                    <div className="portsinn"><img src="https://shorturl.at/dkzBK" alt="desc" /><div class="description">
            <h3>Desc:Ward</h3>
            
        </div></div>
                    <div className="portsinn"><img src="https://shorturl.at/dkzBK" alt="desc" /><div class="description">
            <h3>Desc:Ward</h3>
            
        </div></div>
                    <div className="portsinn"><img src="https://shorturl.at/dkzBK" alt="desc" /><div class="description">
            <h3>Desc:Ward</h3>
            
        </div></div>
                </div>
                {/* <div> */}
                <h1 className="onerr">TREATMENTS AND EXPENDITURE</h1>
                <table className="treatment-table">
                    <thead>
                        <tr>
                            <th>Treatment/Surgery</th>
                            <th>Description</th>
                            <th>Expenditure (includes all taxes)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((data, index) => (
                            <tr key={index}>
                                <td>{data.treatment}</td>
                                <td>{data.description}</td>
                                <td>{data.expenditure}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <h1>Tests & Costs</h1>
                <table className="medical-test-table">
                    <thead>
                        <tr>
                            <th>Test Name</th>
                            <th>Cost (₹)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableDataa.map((data, index) => (
                            <tr key={index}>
                                <td>{data.name}</td>
                                <td>{data.cost.toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* </div> */}
            </div>

        </>
    )
}

export default Port;