import { React, useState } from "react";
import { Box, Button, Modal, TextField, Grid } from "@mui/material";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    maxHeight: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: "10px",
    overflow: "scroll",
    "& .MuiTextField-root": { m: 1, width: "100%" },
    p: 5,
    pl: 2,
};

const JoinClassModal = (props) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [wechat, setWechat] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = () => {
        const data = {
            name: name,
            email: email,
            wechat: wechat,
            message: props.title + message,
        };

        console.log(data);
        setName("");
        setEmail("");
        setWechat("");
        setMessage("");

        if (name == "" || (email == "" && wechat == "")) {
            handleClose();
            return;
        }

        window.emailjs
            .send("service_emuu61g", "template_mzehly4", data)
            .then((res) => {
                console.log("Email successfully sent!");
            });

        handleClose();
    };

    return (
        <Box>
            <Button
                color="success"
                variant="contained"
                endIcon={<QuestionAnswerOutlinedIcon />}
                onClick={handleOpen}
            >
                Request to Join
            </Button>
            <Modal open={open} onClose={handleClose}>
                <Box component="form" sx={style} noValidate>
                    <TextField
                        required
                        label="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        label="Wechat ID"
                        value={wechat}
                        onChange={(e) => setWechat(e.target.value)}
                    />
                    <TextField
                        label="Message"
                        multiline
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <Button
                        color="error"
                        variant="contained"
                        sx={{ mt: 4, float: "right" }}
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </Box>
            </Modal>
        </Box>
    );
};

export default JoinClassModal;
