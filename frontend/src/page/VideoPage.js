import React, {useContext, useEffect} from "react";
import {makeStyles, Paper, TableBody} from "@material-ui/core";
import Recommendation from "../component/recommendation/Recommendation";
import Table from "@material-ui/core/Table";
import RecommendationForm from "../component/recommendation/RecommendationForm";
import {VideoContext} from "../context/VideoContext";

const useStyles = makeStyles(() => ({
    textField: {
        weight: "100%",
        resize: "none",
        border: "outlined"
    },
    paper: {
        maxWidth: "58%",
        padding: "1%",
        margin: "auto",
    },
}));

export default function VideoPage(props) {

    const classes = useStyles();

    const id = props.match.params.id;
    const {video, recommendationList, videoMethod} = useContext(VideoContext);

    useEffect(() => {
        videoMethod.getVideoById(id);
    }, []);

    const videoPlayer = () => {
        return (
            <iframe width="100%" height="630" src={video.url} frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>)
    };

    const recommendations = () => {
        return (
            <Table>
                <TableBody>
                    <RecommendationForm/>
                    {recommendationList.map(recommendation =>
                        <Recommendation recommendation={recommendation}/>
                    )}
                </TableBody>
            </Table>)
    };

    return (
        <>
            <br/>
            <Paper className={classes.paper}>
                {videoPlayer()}
                {recommendations()}
            </Paper>
            <br/>
        </>
    );
}