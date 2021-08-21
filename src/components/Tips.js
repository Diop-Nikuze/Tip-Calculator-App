import { Input, Button, Box, Grid } from "@chakra-ui/react";

const Tips = ({ updatePercent, value }) => {
  const tips = [5, 10, 15, 25, 50];

  return (
    <Box mb={6}>
      <h4
        style={{
          color: "hsl(186, 14%, 43%)",
          fontSize: "1rem",
          fontWeight: "700",
        }}
      >
        Selected Tip %
      </h4>
      <Grid
        gridTemplateColumns={{
          base: "repeat(2,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(3,110px)",
        }}
        gap={3}
        fontSize="1.5rem;"
        mt={1}
      >
        {tips.map((tip, index) => {
          return (
            <Button
              border="none"
              value={tip}
              key={index}
              onClick={updatePercent}
              size="md"
              borderRadius=".3125rem"
              p="1.4rem"
              bg="hsl(183, 100%, 15%)"
              color="white"
              outline="none"
              _hover={{
                bgColor: "hsl(185, 41%, 84%)",
                color: "hsl(172, 67%, 45%)",
              }}
            >
              {tip}%
            </Button>
          );
        })}

        <Input
          onChange={updatePercent}
          value={value}
          placeholder="Custom %"
          textAlign="right"
          size="md"
          p="1.4rem"
          bg="hsl(189, 41%, 97%)"
          fontWeight="700"
          fontSize="1.1rem"
          color="hsl(183, 100%, 15%)"
          cursor="pointer"
          _hover={{ border: "1px solid  hsl(172, 67%, 45%)" }}
          _focus={{ border: "1px solid  hsl(172, 67%, 45%)" }}
        />
      </Grid>
    </Box>
  );
};

export default Tips;
