import React from "react";

import { Card, Grid, Typography, Paper } from "@mui/material";

import ExperienceModal from "./ExperienceModal.js";

const ExperienceCard = (props) => {
    return (
        <Card>
            <Grid
                container
                rowSpacing={2}
                direction="column"
                alignItems="center"
                padding="2%"
            >
                <Grid item>
                    <img
                        src={props.data.image}
                        alt="experience"
                        loading="lazy"
                        style={{ width: "100%", height: "100%" }}
                    />
                </Grid>
                <Grid item>
                    <Typography variant="h4">{props.data.title}</Typography>
                </Grid>
                <Grid item>
                    <ExperienceModal data={props.data} />
                </Grid>
            </Grid>
        </Card>
    );
};

export default ExperienceCard;
