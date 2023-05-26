import React from "react";
import { useState } from "react";
import { Modal, Box, Button, Typography, Link } from "@mui/material";
import { GitHub } from "@mui/icons-material";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "primary.main",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
};

const ExperienceModel = (props) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                        <Typography variant="h3" mb={4}>
                            {props.data.title}
                        </Typography>
                        <img
                            src={props.data.image.image}
                            alt="experience"
                            loading="lazy"
                            style={{ width: "80%", height: "80%" }}
                        />
                        <Typography variant="p" mt={4}>
                            {props.data.description}
                        </Typography>
                    </Box>

                    <Link
                        href={props.data.link}
                        target="_blank"
                        display="flex"
                        justifyContent="right"
                    >
                        <GitHub style={{ color: "#171515" }} fontSize="large" />
                    </Link>
                </Box>
            </Modal>
        </Box>
    );
};

export default ExperienceModel;
