import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";

const Results = ({ bill, selectedPercent, people, handleReset, disabled }) => {
  const tipAmount = people > 0 ? (+bill * +selectedPercent) / 100 / +people : 0;
  const total = people > 0 ? +bill / +people + tipAmount : 0;

  return (
    <Box px={25} py={55} margin="0 auto">
      <Flex
        justifyContent="space-between"
        mb={25}
        alignItems="center"
        fontWeight="700"
      >
        <Flex flexDir="column" lineHeight="1.3" fontSize="1rem">
          <span style={{ color: "white" }}>Tip Amount</span>
          <span style={{ fontSize: ".8125rem", color: "hsl(184, 14%, 56%)" }}>
            / person
          </span>
        </Flex>
        <Box fontSize=" 1.90625rem">
          <h1 style={{ color: "hsl(172, 67%, 45%)", fontSize: "2.5rem" }}>
            ${tipAmount.toFixed(2)}
          </h1>
        </Box>
      </Flex>

      <Flex
        justifyContent="space-between"
        alignItems="center"
        mb={135}
        fontWeight="700"
      >
        <Flex flexDir="column" lineHeight="1.3" fontSize="1rem">
          <span style={{ color: "white" }}>Total </span>
          <span style={{ fontSize: ".8125rem", color: "hsl(184, 14%, 56%)" }}>
            / person
          </span>
        </Flex>
        <Box fontSize=" 1.90625rem">
          <h1 style={{ color: "hsl(172, 67%, 45%)", fontSize: "2.5rem" }}>
            ${total.toFixed(2)}
          </h1>
        </Box>
      </Flex>

      <Button
        onClick={handleReset}
        disabled={disabled}
        w="100%"
        fsize="1.25rem"
        textTransform="uppercase"
        fontWeight="700"
        padding=" 0.85rem 0.85rem 0.7625rem 0"
        borderRadius=".3125rem"
        className="btn-reset"
        _hover={{ bg: " hsl(185, 41%, 84%)" }}
      >
        Reset
      </Button>
    </Box>
  );
};

export default Results;
