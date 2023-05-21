import React from "react";
import { makeStyles } from "@mui/styles";
import "./App.css";
import HomePage from "./HomePage.js";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";

const theme = createTheme({
    spacing: 8,
    palette: {
        primary: {
            main: "#e0e0ff",
        },
        background: {
            paper: "white",
        },
        success: {
            main: "#FAFAFF",
            contrastText: "#171740",
        },
        error: {
            main: "#5555FF",
            contrastText: "#FFFFFF",
        },
    },
    typography: {
        h1: {
            fontSize: "3.0rem",
            fontWeight: "500",
        },
        h2: {
            fontSize: "2.0rem",
            fontWeight: "500",
        },
        h3: {
            fontSize: "1.5rem",
            fontWeight: "500",
            "@media (min-width:600px)": {
                fontSize: "1.5rem",
            },
        },
        h4: {
            fontSize: "1.2rem",
        },
        p: {
            fontSize: "0.9rem",
            fontWeight: "400",
            color: "#242464",
        },
        button: {
            textTransform: "none",
            fontSize: "1rem",
            fontWeight: "450",
        },
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    ":hover": { transform: "scale3d(1.05, 1.05, 1)" },
                    borderRadius: "10px",
                    transition: "transform 0.15s ease-in-out",
                },
            },
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <HomePage />
            {/* <Container sx={{ bgcolor: "#5555FF", height: "10px" }}></Container> */}
        </ThemeProvider>
    );
}

export default App;
