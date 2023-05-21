import React from "react";

import {
    Button,
    Card,
    Grid,
    Typography,
    Paper,
    CardContent,
} from "@mui/material";

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
                            src={props.image}
                            alt="experience"
                            loading="lazy"
                            style={{ width: "100%", height: "100%" }}
                        />
                    </Grid>
                    <Grid item>
                        <Typography variant="h4">{props.title}</Typography>
                    </Grid>
                    <Grid item>
                        <Button color="error" variant="contained">
                            View More
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Card>
    );
};

export default ExperienceCard;
