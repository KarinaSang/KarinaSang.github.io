import React from "react";
import { Typography, Link, Tooltip } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const Videos = (props) => {
    return (
        <div>
            <Typography variant="h5" mb={2}>
                {"Check out the videos demos here:"}
            </Typography>
            {props.data.map((video) => (
                <Tooltip
                    title={video.description}
                    key={Math.floor(Math.random() * Date.now())}
                >
                    <Link href={video.link} target="_blank" mx={2}>
                        <PlayCircleIcon
                            color="error"
                            fontSize="large"
                        ></PlayCircleIcon>
                    </Link>
                </Tooltip>
            ))}
        </div>
    );
};

export default Videos;
