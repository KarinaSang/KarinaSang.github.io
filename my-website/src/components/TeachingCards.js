import React from "react";
import { Grid } from "@mui/material";

import TeachingCard from "./TeachingCard.js";

const TeachingCards = (props) => {
    return (
        <Grid container spacing={6}>
            {props.data.map((teaching) => (
                <Grid item key={teaching.id} style={{ width: "100%" }}>
                    <TeachingCard
                        image={teaching.image.image}
                        title={teaching.title}
                        content={teaching.content}
                    ></TeachingCard>
                </Grid>
            ))}
        </Grid>
    );
};

export default TeachingCards;
