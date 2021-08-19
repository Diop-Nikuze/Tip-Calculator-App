import iconDollar from "../images/icon-dollar.svg";

const Bill = ({ handleBill, value }) => {
  return (
    <div>
      <h4>Bill</h4>
      <input
        onChange={handleBill}
        value={value}
        placeholder="0"
        style={{
          width: "320px",
          height: "40px",
        }}
      />
    </div>
  );
};

export default Bill;
