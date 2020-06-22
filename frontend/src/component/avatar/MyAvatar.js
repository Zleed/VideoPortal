import React, {useContext} from "react";
import {UserContext} from "../../context/UserContext";
import Avatar from "@material-ui/core/Avatar";
import {makeStyles} from "@material-ui/core/styles";
import {cyan, red} from "@material-ui/core/colors";
import Cookies from 'universal-cookie';

const useStyles = makeStyles(() => ({
    avatar: {
        backgroundColor: red[700],
    },
    me: {
        backgroundColor: cyan[700],
    },
}));

export default function MyAvatar(props) {

    const {userMethod} = useContext(UserContext);
    const cookies = new Cookies();
    const classes = useStyles();

    const buildAvatar = () => {
        if(props.userId == cookies.get("userId"))
            return <Avatar aria-label="recipe" className={classes.me}>Me</Avatar>;
        // return <Avatar aria-label="recipe" className={classes.avatar}>{userMethod.getFirstLetterUserName(props.userId)}</Avatar>;
        return <Avatar aria-label="recipe" className={classes.avatar}/>;
    };

    return buildAvatar();
}