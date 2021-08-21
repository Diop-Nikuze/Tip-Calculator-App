import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        fontFamily: "Space Mono",
        backgroundColor: "#c5e4e7",
      },
    },
  },
});

export default theme;
