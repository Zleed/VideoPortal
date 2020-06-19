import AppBar from "@material-ui/core/AppBar/AppBar";
import {Button, ButtonGroup, makeStyles, Toolbar} from "@material-ui/core";
import React, {useContext} from "react";
import {red} from "@material-ui/core/colors";
import {useHistory} from "react-router-dom";
import ShareVideo from "../video/ShareVideo";
import {UserContext} from "../../context/UserContext";

const useStyles = makeStyles(() => ({
    navBar: {
        backgroundColor: red[700],
        position: "fixed",
    },
    button: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 16,
        height: 60,
        width: 113
    },
    shareButton: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 16,
        height: 60,
        justifyContent: "right",
        align: "right"
    }
}));

export default function NavBar() {

    const classes = useStyles();
    const history = useHistory();
    const {userMethod} = useContext(UserContext);

    const HomeClickEvent = () => {
        history.push("/")
    };

    return (
        <>
            <AppBar position="static" color={"primary"} className={classes.navBar}>
                <Toolbar>
                    <ButtonGroup variant="text" color="inherit" aria-label="text primary button group">
                        <Button onClick={HomeClickEvent} className={classes.button}>Home</Button>
                        <Button className={classes.button}>Featured</Button>
                        <Button className={classes.button}>Top Rated</Button>
                        <Button className={classes.button}>All Video</Button>
                    </ButtonGroup>
                    <Button className={classes.shareButton}>Share Video</Button>
                    <Button onClick={userMethod.logout} className={classes.shareButton}>Logout</Button>
                </Toolbar>
            </AppBar>
            <br/><br/><br/>
            <ShareVideo/>
        </>
    );
}
