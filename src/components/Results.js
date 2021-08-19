import React from "react";

const Results = ({ bill, selectedPercent, people, handleReset, disabled }) => {
  const tipAmount = people > 0 ? (+bill * +selectedPercent) / 100 / +people : 0;
  const total = people > 0 ? +bill / +people + tipAmount : 0;

  return (
    <div className="container__result">
      <div className="container__amount">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span className="text-amount">Tip Amount</span>
          <span className="text-person">/ person</span>
        </div>
        <div>
          <h1>${tipAmount.toFixed(2)}</h1>
        </div>
      </div>

      <div className="container__total">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span className="text-total">Total </span>
          <span className="text-person">/ person</span>
        </div>
        <div>
          <h1>${total.toFixed(2)}</h1>
        </div>
      </div>

      <button onClick={handleReset} disabled={disabled} className="btn-reset">
        Reset
      </button>
    </div>
  );
};

export default Results;
