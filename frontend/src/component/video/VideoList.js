import React from 'react';
import VideoCard from "./VideoCard";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../../style/VideoList.css"
import {Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    img: {
        width: "100%",
        maxHeight: "22em"
    }
}));

export default function VideoList(props) {
    const classes = useStyles();
    return (
        <Paper>
            <h1 className="slide-title">{props.title}</h1>
            {props.videoList.map(video =>
                <VideoCard imgstyle={classes.img} video={video}/>)}
        </Paper>
    );
}
