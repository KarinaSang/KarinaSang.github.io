import React from "react";
import { Link } from "@mui/material";
import { GitHub } from "@mui/icons-material";

const GithubIcon = (props) => {
    return (
        <Link href={props.data} target="_blank">
            <GitHub style={{ color: "#171515" }} fontSize="large"></GitHub>
        </Link>
    );
};

export default GithubIcon;
