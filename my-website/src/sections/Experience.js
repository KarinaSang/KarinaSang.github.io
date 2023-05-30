import React from "react";

import { Box, Typography, Button, Grid } from "@mui/material";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";

import ExperienceCards from "../components/ExperienceCards.js";
import resume from "../resume.pdf";
import experiences from "../jsons/experiences.json"

const Experience = () => {
    const resumeButtonHandler = () => {
        window.open(resume);
    };

    return (
        <Box>
            <Box
                sx={{ justifyContent: "flex-start", display: "flex", mb: "4%" }}
            >
                <Typography variant="h2" style={{ marginRight: "4%" }}>
                    Experience
                </Typography>
                <Button
                    color="success"
                    variant="contained"
                    endIcon={<DownloadForOfflineOutlinedIcon />}
                    onClick={resumeButtonHandler}
                >
                    Resume
                </Button>
            </Box>
            <ExperienceCards data={experiences}></ExperienceCards>
        </Box>
    );
};

export default Experience;
