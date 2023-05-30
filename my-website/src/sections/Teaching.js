import { Box, Typography } from "@mui/material";
import React from "react";

import TeachingCards from "../components/TeachingCards.js";
import teachings from "../jsons/teachings.json"

const Teaching = () => {

    return (
        <Box>
            <Typography variant="h2" style={{ marginBottom: "4%" }}>
                Teaching
            </Typography>
            <TeachingCards data={teachings}></TeachingCards>
        </Box>
    );
};

export default Teaching;
