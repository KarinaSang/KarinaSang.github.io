import React from "react";

import {
    Card,
    Grid,
    Typography,
    Paper,
} from "@mui/material";

import ExperienceModel from "./ExperienceModal.js";

const ExperienceCard = (props) => {
    return (
        <Card>
            <Paper color="secondary" >
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
                        <ExperienceModel data={props.data}/>
                    </Grid>
                </Grid>
            </Paper>
        </Card>
    );
};

export default ExperienceCard;
