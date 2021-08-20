import { Input, InputGroup, InputLeftElement, Image } from "@chakra-ui/react";

import iconPerson from "../images/icon-person.svg";

const People = ({ handlePeople, value }) => {
  return (
    <div>
      <h4
        style={{
          color: "hsl(186, 14%, 43%)",
          fontSize: "1rem",
          fontWeight: "700",
        }}
      >
        Number of People
      </h4>

      <InputGroup mt={1}>
        <InputLeftElement children={<Image src={iconPerson}></Image>} />
        <Input
          onChange={handlePeople}
          value={value}
          placeholder="0"
          textAlign="right"
          fontSize=" 1.31875rem"
          h="45px"
          bg="hsl(189, 41%, 97%)"
          color="hsl(183, 100%, 15%)"
          fontWeight="700"
        />
      </InputGroup>
    </div>
  );
};

export default People;
