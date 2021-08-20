import React, { useState } from "react";
import Bill from "./components/Bill";
import People from "./components/People";
import Results from "./components/Results";
import Tips from "./components/Tips";
import "./App.css";
import { ChakraProvider, Box, Flex } from "@chakra-ui/react";
import theme from "./theme/theme";
import "@fontsource/space-mono/700.css";

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
    <ChakraProvider theme={theme}>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>

      <Flex
        alignItems="center"
        h="70vh"
        justifyContent="space-between"
        maxWidth="90%"
        w={950}
        margin="0 auto"
        px="50px"
      >
        <Box>
          <Bill handleBill={handleBill} value={bill} />

          <Tips updatePercent={updatePercent} value={customPerc} />

          <People handlePeople={handlePeople} value={people} />
        </Box>

        <Box
          bgColor="hsl(183, 100%, 15%)"
          borderRadius=" 0.9375rem"
          w={450}
          fontWeight="700"
        >
          <Results
            bill={bill}
            selectedPercent={selectedPercent}
            people={people}
            disabled={disabled}
            handleReset={handleReset}
          />
        </Box>
      </Flex>
    </ChakraProvider>
  );
}
export default App;
