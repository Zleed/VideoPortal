import React, {useContext, useState} from "react";
import {makeStyles, TableCell, TableRow} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Rating from "@material-ui/lab/Rating";
import {blue} from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import {VideoContext} from "../../context/VideoContext";
import {UserContext} from "../../context/UserContext";
import Grid from "@material-ui/core/Grid";

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
    },
    right: {
        width: "100%",
        justifyContent: "right"
    }
}));

export default function RecommendationForm() {

    const classes = useStyles();
    const [value, setValue] = useState(3);
    const {video, videoMethod} = useContext(VideoContext);
    const {userMethod} = useContext(UserContext);

    return (
        <TableRow>
            <TableCell>
                <form onSubmit={videoMethod.postRecommendation} hidden={userMethod.ifSinged()}>
                    <input name="videoId" value={video.id} hidden/>
                    <Grid direction="column">
                        <Grid item>
                            <Rating name="rating" value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}/>
                        </Grid>
                        <Grid item>
                            <textarea name={"comment"} rows={6} className={classes.textField}
                                      aria-label="empty textarea"
                                      placeholder="Comment"/>
                        </Grid>
                        <Grid container alignItems="flex-start" justify="flex-end" direction="row">
                            <Button type={"submit"} className={classes.button}>Post</Button>
                        </Grid>
                    </Grid>
                </form>
            </TableCell>
        </TableRow>
    );
}