import React from "react";
import { Grid } from "@mui/material";

import ExperienceCard from "./ExperienceCard.js";

const ExperienceCards = (props) => {
    return (
        <Grid container spacing={6}>
            {props.data.map((experience) => (
                <Grid item xs={4} key={experience.id}>
                    <ExperienceCard
                        image={experience.image.image}
                        title={experience.title}
                    ></ExperienceCard>
                </Grid>
            ))}
        </Grid>
    );
};

export default ExperienceCards;
