import React, {useContext, useState} from "react";
import {Box, makeStyles, TableCell, TableRow} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Rating from "@material-ui/lab/Rating";
import {blue} from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import {VideoContext} from "../../context/VideoContext";
import {UserContext} from "../../context/UserContext";

const useStyles = makeStyles(() => ({
    textField: {
        display: "inline-block",
        minWidth: "100%",
        resize: "none",
        rowsMin: 6
    },
    avatar: {
        backgroundColor: blue[700],
    },
    button: {
        display: "inline-block",
        backgroundColor: "#388e3c",
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 14,
        "&:hover": {
            backgroundColor: 'rgb(0, 96, 15)'
        }
    },
    cell: {
        width: "100%"
    }
}));

export default function RecommendationForm() {

    const classes = useStyles();
    const [value, setValue] = useState(3);
    const {video, videoMethod} = useContext(VideoContext);
    const {userMethod} = useContext(UserContext);


    const avatar = () => {
        return !userMethod.ifSinged() ? <Avatar aria-label="recipe" className={classes.avatar} >Me</Avatar> : null;
    };

    const form = () => {
        return <form onSubmit={videoMethod.postRecommendation} hidden={userMethod.ifSinged()}>
                    <input name="videoId" value={video.id} hidden/>
                    <Rating name="rating" value={value} onChange={(event, newValue) => {
                        setValue(newValue);
                    }}/>
                    <textarea name={"comment"} rows={6} className={classes.textField}
                              aria-label="empty textarea"
                              placeholder="Comment"/>
                    <Button type={"submit"} className={classes.button}>Post</Button>
                </form>
    };

    return (
        <TableRow>
            <TableCell>
                {avatar()}
            </TableCell>
            <TableCell colSpan={3} className={classes.cell}>
                {form()}
            </TableCell>
        </TableRow>
    );
}