import AppBar from "@material-ui/core/AppBar/AppBar";
import {Button, ButtonGroup, makeStyles, Toolbar} from "@material-ui/core";
import React, {useContext} from "react";
import {red} from "@material-ui/core/colors";
import {useHistory} from "react-router-dom";
import {UserContext} from "../../context/UserContext";
import NavVideoButton from "./NavVideoButton";

const useStyles = makeStyles(() => ({
    navBar: {
        backgroundColor: red[700],
        position: "fixed",
    },
    button: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: "0.8em",
        height: "5em",
        width: "7em",
    },
}));

export default function NavBar() {

    const classes = useStyles();
    const history = useHistory();
    const {userMethod} = useContext(UserContext);

    const HomeClickEvent = () => {
        history.push("/")
    };
    const ShareClickEvent = () => {
        history.push("/share")
    };
    const RegisterClickEvent = () => {
        history.push("/register")
    };
    const LoginClickEvent = () => {
        history.push("/login")
    };
    const LogoutClickEvent = () => {
        userMethod.logout()
    };

    const LoginRegister = () => {
        return (!userMethod.ifSinged()) ?
            <ButtonGroup variant="text" color="inherit" aria-label="text primary button group">
                <Button onClick={ShareClickEvent} className={classes.button}>Share</Button>
                <Button onClick={LogoutClickEvent} className={classes.button}>Logout</Button>
            </ButtonGroup>
            :
            <ButtonGroup variant="text" color="inherit" aria-label="text primary button group">
                <Button onClick={LoginClickEvent} className={classes.button}>Login</Button>
                <Button onClick={RegisterClickEvent} className={classes.button}>register</Button>
            </ButtonGroup>
    };

    return (
        <>
            <AppBar position="static" color={"primary"} className={classes.navBar}>
                <Toolbar>
                    <ButtonGroup variant="text" color="inherit" aria-label="text primary button group">
                        <Button onClick={HomeClickEvent} className={classes.button}>Home</Button>
                        <NavVideoButton btnstyle={classes.button}/>
                    </ButtonGroup>
                    {LoginRegister()}
                </Toolbar>
            </AppBar>
            <br/><br/><br/>
        </>
    );
}
