import React, { useState } from "react";
import Bill from "./components/Bill";
import People from "./components/People";
import Results from "./components/Results";
import Tips from "./components/Tips";
import "./App.css";

function App() {
  const [bill, setBill] = useState("");
  const [selectedPercent, setSelectedPercent] = useState("");
  const [customPerc, setCustomPerc] = useState("");
  const [people, setPeople] = useState("");
  const [disabled, setDisabled] = useState(true);

  const handleBill = (e) => {
    if (e.target.value <= 0) {
      setBill("");
    } else {
      setBill(e.target.value);
      setDisabled(false);
    }
  };

  const updatePercent = (e) => {
    if (e.target.value <= 0) {
      setSelectedPercent("");
      setCustomPerc("");
    } else {
      setSelectedPercent(e.target.value);
      setCustomPerc(e.target.value);
    }
  };

  const handlePeople = (e) => {
    if (e.target.value <= 0) {
      setPeople("");
    } else {
      setPeople(e.target.value);
    }
  };

  const handleReset = () => {
    setBill("");
    setCustomPerc("");
    setPeople("");
    setDisabled(true);
  };

  return (
    <div className="container-calculator">
      <div>
        <Bill handleBill={handleBill} value={bill} />

        <Tips updatePercent={updatePercent} value={customPerc} />

        <People handlePeople={handlePeople} value={people} />
      </div>

      <div>
        <Results
          bill={bill}
          selectedPercent={selectedPercent}
          people={people}
          disabled={disabled}
          handleReset={handleReset}
        />
      </div>
    </div>
  );
}
export default App;
