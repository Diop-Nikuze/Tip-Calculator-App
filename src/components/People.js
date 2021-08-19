import iconPerson from "../images/icon-person.svg";

const People = ({ handlePeople, value }) => {
  return (
    <div>
      <h4>Number of People</h4>

      <input
        onChange={handlePeople}
        value={value}
        placeholder="0"
        style={{ width: "300px", height: "40px" }}
      />
    </div>
  );
};

export default People;
