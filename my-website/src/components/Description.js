import React from "react";
import { Typography } from "@mui/material";

const Description = (props) => {
    return (
        <div>
            {props.data.map((para) => (
                <Typography
                    variant="h5"
                    key={Math.floor(Math.random() * Date.now())}
                    my={2}
                >
                    {para}
                </Typography>
            ))}
        </div>
    );
};

export default Description;
