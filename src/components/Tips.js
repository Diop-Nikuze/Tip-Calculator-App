const Tips = ({ updatePercent, value }) => {
  const tips = [5, 10, 15, 25, 50];

  return (
    <div>
      <h4>Selected Tip %</h4>
      <div className="tips">
        {tips.map((values, i) => {
          return (
            <button value={values} key={i} onClick={updatePercent}>
              {values} %
            </button>
          );
        })}

        <input
          onChange={updatePercent}
          value={value}
          placeholder="Custom"
          style={{ fontSize: "20px" }}
        />
      </div>
    </div>
  );
};

export default Tips;
