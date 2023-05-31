import {
    Typography,
    Grid,
    Card,
    Button,
    autocompleteClasses,
} from "@mui/material";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";

import JoinClassModal from "./JoinClassModal.js";

import React from "react";

const TeachingCard = (props) => {
    return (
        <Card>
            <Grid container spacing={4}>
                <Grid item xs m="auto">
                    <img
                        src={props.image}
                        alt="teaching"
                        loading="lazy"
                        style={{
                            maxWidth: "400px",
                            width: "auto",
                            height: "auto",
                        }}
                    />
                </Grid>
                <Grid item xs my="auto">
                    <Typography variant="h3" p={2}>
                        {props.title}
                    </Typography>
                    <Typography variant="h5" p={2}>
                        {props.content}
                    </Typography>
                    <Grid container spacing={4} p={2}>
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
                            <JoinClassModal title={props.title}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    );
};

export default TeachingCard;
