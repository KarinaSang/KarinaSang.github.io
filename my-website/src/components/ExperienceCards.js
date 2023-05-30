import React from "react";
import { Grid } from "@mui/material";

import ExperienceCard from "./ExperienceCard.js";

const ExperienceCards = (props) => {
    return (
        <Grid container spacing={6}>
            {props.data.map((experience) => (
                <Grid item xs key={experience.id}>
                    <ExperienceCard
                        data={experience}
                    ></ExperienceCard>
                </Grid>
            ))}
        </Grid>
    );
};

export default ExperienceCards;
