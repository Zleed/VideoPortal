import React, {useContext} from "react";
import {makeStyles, Paper, TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {VideoContext} from "../../context/VideoContext";
import {UserContext} from "../../context/UserContext";

const useStyles = makeStyles(() => ({
    textField: {
        weight: "100%",
        resize: "none",
        border: "outlined",
    },
    paper: {
        maxWidth: "30%",
        padding: "1%",
        margin: "auto"
    },
    button: {
        backgroundColor: "#388e3c",
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 14,
        align: "center",
        "&:hover": {
            backgroundColor: 'rgb(0, 96, 15)'
        }
    }
}));

export default function ShareVideo() {

    const {videoMethod} = useContext(VideoContext);
    const {userMethod} = useContext(UserContext);
    const classes = useStyles();

    return (
        <Paper className={classes.paper} hidden={userMethod.ifSinged()}>
            <form onSubmit={videoMethod.postVideo} noValidate autoComplete="off">
                <Grid container direction="row" justify="space-between" alignItems="center">
                    <Grid item>
                        <TextField name="name" id="outlined-basic" label="Title" variant="outlined"/>
                    </Grid>
                    <Grid item>
                        <TextField name="url" id="outlined-basic" label="YouTube URL" variant="outlined"/>
                    </Grid>
                    <Grid item>
                        <Button type="submit" className={classes.button}>Share</Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
}