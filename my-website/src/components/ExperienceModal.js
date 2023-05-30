import React from "react";
import { useState } from "react";
import { Modal, Box, Button, Typography, Link } from "@mui/material";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import Description from "./Description.js";
import Videos from "./Videos.js";
import GithubIcon from "./GithubIcon.js";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "60%",
    bgcolor: "primary.main",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
    overflow: "scroll"
};

const ExperienceModel = (props) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const hasLink = props.data.link != "";
    const hasVideo = props.data.video != "";

    return (
        <Box>
            <Button color="error" variant="contained" onClick={handleOpen}>
                View More
            </Button>
            <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                    >
                        <Typography variant="h3" mb={2}>
                            {props.data.title}
                        </Typography>
                        {/* TODO: add zooming cursor */}
                        <TransformWrapper>
                            <TransformComponent>
                                <img
                                    src={props.data.image}
                                    alt="experience"
                                    loading="lazy"
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </TransformComponent>
                        </TransformWrapper>
                    </Box>

                    <Box mt={2}>
                        <Description data={props.data.description} />
                        {hasVideo ? (
                            <Videos data={props.data.video} />
                        ) : (
                            <div></div>
                        )}
                        <Typography variant="h6" my={2}>
                            {props.data.language}
                        </Typography>
                        <Typography variant="h6" my={2}>
                            {props.data.framework}
                        </Typography>
                        {hasLink ? (
                            <GithubIcon data={props.data.link} />
                        ) : (
                            <div></div>
                        )}
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
};

export default ExperienceModel;
