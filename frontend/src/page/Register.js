import React, {useContext, useEffect} from "react";
import {makeStyles, Paper, TableBody, TextField} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {UserContext} from "../context/UserContext";

const useStyles = makeStyles(() => ({
    textField: {
        weight: "100%",
        border: "outlined",
        margin: "100%"
    },

    paper: {
        maxWidth: "18%",
        padding: "1%",
        margin: "auto",
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

export default function Login(props) {

    const classes = useStyles();
    const {userMethod} = useContext(UserContext);

    return (
        <>
            <br/>
            <Paper className={classes.paper}>
                <h1>Welcome</h1>
                <form onSubmit={userMethod.signUp} noValidate autoComplete="off">
                    <Grid container direction="column" alignItems="center">
                        <Grid item>
                            <TextField type="text" name="username" id="outlined-basic" label="Username"
                                       variant="outlined" required/>
                        </Grid>
                        <br/>
                        <Grid item>
                            <TextField type="password" name="password" id="outlined-basic" label="Password"
                                       variant="outlined" required/>
                        </Grid>
                        <br/>
                        <Grid item>
                            <Button type="submit" className={classes.button}>Register</Button>
                        </Grid>
                        <br/>
                    </Grid>
                </form>
            </Paper>
            <br/>
        </>
    );
}