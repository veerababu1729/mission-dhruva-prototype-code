import React, { useState } from 'react';
import NavDesign from './NavDesign';
import './Branded.css'
function Branded() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMedicine, setSelectedMedicine] = useState('paracetamol');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Here you would perform the search operation based on searchTerm and selectedMedicine
    // For demonstration purposes, I'll just provide dummy data

    // Dummy data (replace with actual search results)
    const dummyResults = [
      { brandedName: "Panadol", genericName: "Paracetamol", brandedCost: "$5", genericCost: "$3" },
      { brandedName: "Tylenol", genericName: "Paracetamol", brandedCost: "$6", genericCost: "$4" },
      { brandedName: "Advil", genericName: "Ibuprofen", brandedCost: "$7", genericCost: "$5" },
      { brandedName: "Advil", genericName: "Ibuprofen", brandedCost: "$7", genericCost: "$5" },
  { brandedName: "Aleve", genericName: "Naproxen", brandedCost: "$8", genericCost: "$6" },
  { brandedName: "Motrin", genericName: "Ibuprofen", brandedCost: "$6", genericCost: "$4" },
  { brandedName: "Excedrin", genericName: "Acetaminophen, Aspirin, Caffeine", brandedCost: "$9", genericCost: "$7" },
  { brandedName: "Claritin", genericName: "Loratadine", brandedCost: "$10", genericCost: "$8" },
  { brandedName: "Zyrtec", genericName: "Cetirizine", brandedCost: "$11", genericCost: "$9" },
  { brandedName: "Allegra", genericName: "Fexofenadine", brandedCost: "$12", genericCost: "$10" },
  { brandedName: "Benadryl", genericName: "Diphenhydramine", brandedCost: "$5", genericCost: "$3" },
  { brandedName: "Tylenol Cold", genericName: "Acetaminophen, Phenylephrine", brandedCost: "$8", genericCost: "$6" },
  { brandedName: "Robitussin", genericName: "Guaifenesin, Dextromethorphan", brandedCost: "$7", genericCost: "$5" },
  { brandedName: "Mucinex", genericName: "Guaifenesin", brandedCost: "$9", genericCost: "$7" },
  { brandedName: "DayQuil", genericName: "Acetaminophen, Dextromethorphan, Phenylephrine", brandedCost: "$10", genericCost: "$8" },
  { brandedName: "NyQuil", genericName: "Acetaminophen, Dextromethorphan, Doxylamine", brandedCost: "$11", genericCost: "$9" },
  { brandedName: "Advil Cold & Sinus", genericName: "Ibuprofen, Pseudoephedrine", brandedCost: "$12", genericCost: "$10" }

    ];

    setSearchResults(dummyResults);
  };
  
  
  return (
    <>
    <NavDesign/>
    <div className='inside'>
      <div className="search-container">
        
      <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for medicines..."
        />
        <select
          value={selectedMedicine}
          onChange={(e) => setSelectedMedicine(e.target.value)}
        >
          <option value="paracetamol">Paracetamol</option>
          <option value="ibuprofen">Ibuprofen</option>
          <option value="aspirin">Aspirin</option>
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>

      <div id="tableContainer">
        <table id="medicineTable">
          <thead>
            <tr>
              <th>Branded Name</th>
              <th>Generic Name</th>
              <th>Branded Cost</th>
              <th>Generic Cost</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((result, index) => (
              <tr key={index}>
                <td>{result.brandedName}</td>
                <td>{result.genericName}</td>
                <td>{result.brandedCost}</td>
                <td>{result.genericCost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}

export default Branded;
