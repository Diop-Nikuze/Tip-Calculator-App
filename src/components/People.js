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
          marginBottom: "5px",
        }}
      >
        Number of People
      </h4>

      <InputGroup>
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
          fontWeight={{ base: "500", sm: "500", md: "700", lg: "700" }}
          _hover={{ border: "2px solid  hsl(172, 67%, 45%)" }}
          _focus={{ border: "2px solid  hsl(172, 67%, 45%)" }}
          cursor="pointer"
          mb={{ base: 7, sm: 7 }}
        />
      </InputGroup>
    </div>
  );
};

export default People;
