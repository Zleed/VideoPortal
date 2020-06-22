import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import {red} from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Rating from '@material-ui/lab/Rating';
import {Link} from "react-router-dom";
import VideoDetailsButton from "./VideoDetailsButton";
import MyAvatar from "../avatar/MyAvatar";
import {VideoContext} from "../../context/VideoContext";
import Cookies from "universal-cookie";
import {UserContext} from "../../context/UserContext";

const useStyles = makeStyles(() => ({
    card: {
        maxWidth: "90%",
        margin: "auto",
    },
    avatar: {
        backgroundColor: red[700],
    },
}));

export default function VideoCard(props) {
    const classes = useStyles();
    const date = props.video.date.split("T")[0];
    const time = props.video.date.split("T")[1].split(".")[0];
    const {videoMethod} = useContext(VideoContext);
    const {userMethod} = useContext(UserContext);
    const cookies = new Cookies();

    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <MyAvatar userId={props.video.userId}/>
                }
                action={
                    <VideoDetailsButton/>
                }
                title={props.video.name}
                subheader={date + "   " + time}
            />

            <Link to={`/video/${props.video.id}`}>
                <img className={props.imgstyle} src={`http://i3.ytimg.com/vi/${props.video.youTubeId}/0.jpg`}/>
            </Link>

            <CardActions disableSpacing>
                <Rating name="read-only" value={props.video.rating} readOnly/>
                <div hidden={userMethod.ifSinged()}>
                    <IconButton aria-label="add to favorites" hidden>
                        <FavoriteIcon onClick={() => {
                            videoMethod.addFavVid(cookies.get("userId"), props.video.id);
                            userMethod.flipFlag();
                        }}/>
                    </IconButton>
                </div>
                <IconButton aria-label="share">
                    <ShareIcon/>
                </IconButton>
            </CardActions>
        </Card>
    );
}