import { Typography, Grid, Card, Button, autocompleteClasses } from "@mui/material";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";

import React from "react";

const TeachingCard = (props) => {
    return (
        <Card>
            <Grid container spacing={4}>
                <Grid item xs>
                    <img
                        src={props.image}
                        alt="teaching"
                        loading="lazy"
                        style={{ maxWidth: "400px", width: "auto", height: "auto" }}
                    />
                </Grid>
                <Grid item xs my="auto">
                    <Typography variant="h3">
                        {props.title}
                    </Typography>
                    <Typography variant="h5">{props.content}</Typography>
                    <Grid container spacing={4} my="auto">
                        <Grid item xs>
                            <Button
                                color="error"
                                variant="contained"
                                endIcon={<DownloadForOfflineOutlinedIcon />}
                            >
                                View Class Schedule
                            </Button>
                        </Grid>
                        <Grid item xs>
                            <Button
                                color="success"
                                variant="contained"
                                endIcon={<QuestionAnswerOutlinedIcon />}
                            >
                                Request to Join
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    );
};

export default TeachingCard;
