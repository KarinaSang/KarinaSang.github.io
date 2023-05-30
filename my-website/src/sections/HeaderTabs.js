import React from "react";
import { Tabs, Tab, Box } from "@mui/material";

const HeaderTabs = (props) => {
    const handleChange = (event, newValue) => {
        props.onChangeTab(newValue);
    };

    return (
        <Tabs
            value={props.selected}
            onChange={handleChange}
            variant="scrollable"
            sx={{
                "& .MuiTabs-indicator": { backgroundColor: "#e0e0ff" },
                "& .Mui-selected ": { color: "#e0e0ff" },
                width: "40%",
                pl: "5%",
                mr: "3%"
            }}
        >
            <Tab label="About" sx={{ width: "33%" }} />
            <Tab label="Experience" sx={{ width: "33%" }} />
            <Tab label="Teaching" sx={{ width: "33%" }} />
        </Tabs>
    );
};

export default HeaderTabs;
