import React from "react";

import { Stack } from "@mui/material";

import Tag from "./Tag.js";
import me from "../jsons/me.json";

const Tags = () => {
    return (
        <Stack
            spacing={{ xs: 1, sm: 2 }}
            direction="row"
            useFlexGap
            flexWrap="wrap"
        >
            {me.tags.map((tag) => 
                <Tag key={tag.id} buttonText={tag.text} tooltip={tag.tooltip} />
            )}
        </Stack>
    );
};

export default Tags;
