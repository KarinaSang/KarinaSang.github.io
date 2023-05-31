import React from "react";
import { Grid, Card, Typography, Paper } from "@mui/material";

import Tags from "../components/Tags.js";
import me from "../jsons/me.json";

const About = () => {
    return (
        <Grid container spacing={4} alignItems="center">
            <Grid item xs={6}>
                <Grid container rowSpacing={2} direction="column">
                    <Grid item xs>
                        <Typography variant="h1">{me.p1}</Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="h4">{me.p2}</Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="h4">{me.p3}</Typography>
                    </Grid>
                    <Grid item xs>
                        <Tags />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Paper elevation={10}>
                    <img
                        src={me.img}
                        alt={me.imgAltText}
                        loading="lazy"
                        style={{ width: "100%", height: "100%" }}
                    />
                </Paper>
            </Grid>
        </Grid>
    );
};

export default About;
