import React, {useContext} from "react";
import {makeStyles, Paper, TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {VideoContext} from "../../context/VideoContext";
import {UserContext} from "../../context/UserContext";
import NavBar from "../navbar/NavBar";

const useStyles = makeStyles(() => ({
    textField: {
        weight: "100%",
        resize: "none",
        border: "outlined",
    },
    paper: {
        width: "80vw",
        maxWidth: 300,
        padding: "1%",
        margin: "auto",
        marginTop: "200px",
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

    const message = () => {
        return (userMethod.ifSinged()) ? <h1>Login to share videos</h1> : <h1>Welcome</h1>
    };

    return (
        <>
            <NavBar/>
            <Paper className={classes.paper}>
                {message()}
                <form onSubmit={videoMethod.postVideo} noValidate autoComplete="off" hidden={userMethod.ifSinged()}>
                    <Grid container direction="column" alignItems="center">
                        <Grid item>
                            <TextField name="name" id="outlined-basic" label="Title" variant="outlined"/>
                        </Grid>
                        <br/>
                        <Grid item>
                            <TextField name="url" id="outlined-basic" label="YouTube URL" variant="outlined"/>
                        </Grid>
                        <br/>
                        <Grid item>
                            <Button type="submit" className={classes.button}>Share</Button>
                        </Grid>
                        <br/>
                    </Grid>
                </form>
            </Paper>
        </>
    );
}