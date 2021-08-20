import {
  Box,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import iconDollar from "../images/icon-dollar.svg";

const Bill = ({ handleBill, value }) => {
  return (
    <Box mb={6}>
      <h4
        style={{
          color: "hsl(186, 14%, 43%)",
          fontSize: "1rem",
          fontWeight: "700",
        }}
      >
        Bill
      </h4>

      <InputGroup mt={1}>
        <InputLeftElement children={<Image src={iconDollar}></Image>} />
        <Input
          onChange={handleBill}
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
    </Box>
  );
};

export default Bill;
