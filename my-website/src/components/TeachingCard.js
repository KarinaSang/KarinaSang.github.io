import { Typography, Grid, Card, Button } from "@mui/material";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";

import React from "react";

const TeachingCard = (props) => {
    return (
        <Card>
            <Grid container spacing={4}>
                <Grid item xs={6}>
                    <img
                        src={props.image}
                        alt="teaching"
                        loading="lazy"
                        style={{ width: "100%", height: "100%" }}
                    />
                </Grid>
                <Grid item xs={6} my="auto">
                    <Typography variant="h3">
                        {props.title}
                    </Typography>
                    <Typography variant="p">{props.content}</Typography>
                    <Grid container spacing={4} my="auto">
                        <Grid item xs={6}>
                            <Button
                                color="error"
                                variant="contained"
                                endIcon={<DownloadForOfflineOutlinedIcon />}
                            >
                                View Class Schedule
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
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
