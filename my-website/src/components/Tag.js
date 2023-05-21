import React from "react";
import { Button, Tooltip } from "@mui/material";
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';

const Tag = (props) => {
    return (
            <Tooltip title={props.tooltip} style={{ p: "2%" }}>
                <Button
                    color="success"
                    variant="contained"
                    endIcon={<TipsAndUpdatesOutlinedIcon />}
                >
                    {props.buttonText}
                </Button>
            </Tooltip>
    );
};

export default Tag;
