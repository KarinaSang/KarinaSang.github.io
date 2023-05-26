import React from "react";

import { Box, Typography, Button, Grid } from "@mui/material";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";

import ExperienceCards from "../components/ExperienceCards.js";
import image from "../resources/test_image.png";
import resume from "../resources/resume.pdf";

const Experience = () => {
    const experiences = [
        { id: "1", image: { image }, title: "Card 1", description: "shdiaoisdoha", link: "www.google.com" },
        { id: "2", image: { image }, title: "Card 2", description: "shdiaoisdoha", link: "www.google.com" },
        { id: "3", image: { image }, title: "Card 3", description: "shdiaoisdoha", link: "www.google.com"  },
        { id: "4", image: { image }, title: "Card 4", description: "shdiaoisdoha", link: "www.google.com"  },
    ];

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
