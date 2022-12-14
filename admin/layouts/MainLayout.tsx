import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import TopBar from "../components/TopBar/TopBar";
import Box from "@mui/material/Box";

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const MainLayout: React.FC<Props> = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        light: "#757ce8",
        main: "#3a7388",
        dark: "#00485b",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ffffff",
        main: "#edf2f7",
        dark: "#bbbfc4",
        contrastText: "#000",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <TopBar />
      <Box
        sx={{
          width: "100%",
          height: "calc(100vh - 64px)",
          backgroundColor: "secondary.main",
          p: 8,
          display: "flex",
          gap: "32px",
          alignItems: "flex-start",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
};

export default MainLayout;
