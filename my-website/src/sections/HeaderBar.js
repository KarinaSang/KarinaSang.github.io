import React from "react";
import { AppBar, Toolbar, Typography, Link } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";

import HeaderTabs from "./HeaderTabs.js";

const HeaderBar = (props) => {
    return (
        <AppBar sx={{ boxShadow: 0, bgcolor: "#FAFAFF" }}>
            <Toolbar>
                <Typography variant="h3" mr="30%">Karina Sang</Typography>
                <HeaderTabs
                    selected={props.selected}
                    onChangeTab={props.onChangeTab}
                />
                <Link
                    href="https://www.linkedin.com/in/karinasang//"
                    target="_blank"
                    mr="2%"
                >
                    <LinkedIn style={{ color: "#0072b1" }} fontSize="large" />
                </Link>
                <Link href="https://github.com/KarinaSang" target="_blank">
                    <GitHub style={{ color: "#171515" }} fontSize="large" />
                </Link>
            </Toolbar>
        </AppBar>
    );
};

export default HeaderBar;
