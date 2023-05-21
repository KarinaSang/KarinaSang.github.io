import React from "react";

import { Stack } from "@mui/material";
import Tag from "./Tag.js";

const Tags = () => {
    return (
        <Stack
            spacing={{ xs: 1, sm: 2 }}
            direction="row"
            useFlexGap
            flexWrap="wrap"
        >
            <Tag
                tooltip="I worked with Spring Boot for 4 out of 5 of my past internships"
                buttonText="Java Spring Boot Expert"
            />
            <Tag
                tooltip="I built this website with React and Material UI!"
                buttonText="React Newbie"
            />{" "}
            <Tag
                tooltip="DP questions with Python can be so easy"
                buttonText="Python Leetcoder"
            />
        </Stack>
    );
};

export default Tags;
