import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import {red} from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Rating from '@material-ui/lab/Rating';
import {Link} from "react-router-dom";

const useStyles = makeStyles(() => ({
    card: {
        maxWidth: "90%",
        margin: "auto",
    },
    avatar: {
        backgroundColor: red[700],
    },
    img: {
        width: "100%",
        maxHeight: "238px"
    }
}));

export default function VideoCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon/>
                    </IconButton>
                }
                title={props.video.name}
                subheader="September 14, 2016"
            />

            <Link to={`/video/${props.video.id}`}>
                <img className={classes.img} src={`http://i3.ytimg.com/vi/${props.video.youTubeId}/0.jpg`}/>
            </Link>

            <CardActions disableSpacing>
                <Rating name="read-only" value={4} readOnly/>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon/>
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon/>
                </IconButton>
            </CardActions>
        </Card>
    );
}