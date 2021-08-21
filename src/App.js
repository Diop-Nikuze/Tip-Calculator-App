import React, { useState } from "react";
import Bill from "./components/Bill";
import People from "./components/People";
import Results from "./components/Results";
import Tips from "./components/Tips";
import "./App.css";
import { ChakraProvider, Box, Flex, Image } from "@chakra-ui/react";
import logo from "./images/logo.svg";
import theme from "./theme/theme";
import "@fontsource/space-mono/700.css";
import Footer from "./components/Footer";

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
    <ChakraProvider theme={theme} bgColor="red">
      <Flex justifyContent="center" my={50}>
        <Image src={logo}></Image>
      </Flex>

      <Flex
        alignItems="center"
        justifyContent="space-between"
        flexDir={{ base: "column", sm: "column", md: "column", lg: "row" }}
        maxWidth="90%"
        w={950}
        margin="0 auto"
        px={{ base: "35px", sm: "35px", md: "35px", lg: "50px" }}
        py="20px"
        bgColor="white"
        borderRadius="1.5625rem"
      >
        <Box>
          <Bill handleBill={handleBill} value={bill} />

          <Tips updatePercent={updatePercent} value={customPerc} />

          <People handlePeople={handlePeople} value={people} />
        </Box>

        <Box
          bgColor="hsl(183, 100%, 15%)"
          borderRadius=" 0.9375rem"
          w={{ base: "100%", sm: "100%", md: "100%", lg: 450 }}
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

      <Footer />
    </ChakraProvider>
  );
}
export default App;
