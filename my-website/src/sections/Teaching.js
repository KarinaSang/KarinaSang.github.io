import { Box, Typography } from "@mui/material";
import React from "react";

import TeachingCards from "../components/TeachingCards.js";
import image from "../resources/test_image.png";

const Teaching = () => {
    const teaching = [
        { id: "1", image: { image }, title: "AP Java", content: "saidhaisid" },
        {
            id: "2",
            image: { image },
            title: "Intro to Game Development (Java)",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
            id: "3",
            image: { image },
            title: "University of Waterloo Programming Contest (CCC)",
            content: "hello"
        },
    ];

    return (
        <Box>
            <Typography variant="h2" style={{ marginBottom: "4%" }}>
                Teaching
            </Typography>
            <TeachingCards data={teaching}></TeachingCards>
        </Box>
    );
};

export default Teaching;
