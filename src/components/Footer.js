import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box textAlign="center" fontSize={13}>
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "underline", color: "hsl(172, 67%, 45%)" }}
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        href="https://github.com/Nikuze/Tip-Calculator-App"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "underline", color: "hsl(172, 67%, 45%)" }}
      >
        Diop Nikuze
      </a>
    </Box>
  );
};

export default Footer;
