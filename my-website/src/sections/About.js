import React from "react";
import { Grid, Card, Typography, CardContent, Paper } from "@mui/material";
import Tags from "../components/Tags.js";
import sketch from "../resources/sketch.png";

const About = () => {
    return (
        <Grid container spacing={4} alignItems="center">
            <Grid item xs={6}>
                <Grid container rowSpacing={2}>
                    <Grid item>
                        <Typography variant="h1">Hi, I am Karina.</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h4">
                            I am a passionate software developer and I love
                            bunnies.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h4">
                            How I define myself:
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Tags />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Paper elevation={10}>
                    <img
                        src={sketch}
                        alt="A sketch of me made by my sister"
                        loading="lazy"
                        style={{ width: "100%", height: "100%" }}
                    />
                </Paper>
            </Grid>
        </Grid>
    );
};

export default About;
