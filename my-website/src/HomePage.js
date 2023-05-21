import React from "react";
import { useState, useRef } from "react";

import { Box, Toolbar, Divider } from "@mui/material";
import HeaderBar from "./sections/HeaderBar.js";
import About from "./sections/About.js";
import Experience from "./sections/Experience.js";
import Teaching from "./sections/Teaching.js";

const HomePage = () => {
    const aboutRef = useRef();
    const experienceRef = useRef();
    const teachingRef = useRef();

    const [selectedTab, setSelectedTab] = useState(0);

    const tabChangeHandler = (tab) => {
        setSelectedTab(tab);

        if (tab == 0) {
            aboutRef.current.scrollIntoView({ behavior: "smooth" });
        } else if (tab == 1) {
            experienceRef.current.scrollIntoView({ behavior: "smooth" });
        } else if (tab == 2) {
            teachingRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Box sx={{ m: "2%", p: "2%" }}>
            <HeaderBar selected={selectedTab} onChangeTab={tabChangeHandler} />
            <Divider sx={{ pb: "6%", my: "4%" }} ref={aboutRef}></Divider>
            <About />
            <Divider sx={{ pb: "6%", my: "4%" }} ref={experienceRef}></Divider>
            <Experience />
            <Divider sx={{ pb: "6%", my: "4%" }} ref={teachingRef}></Divider>
            <Teaching />
        </Box>
    );
};

export default HomePage;
