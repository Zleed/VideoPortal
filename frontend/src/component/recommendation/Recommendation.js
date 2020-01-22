import React from "react";
import Avatar from "@material-ui/core/Avatar";
import {makeStyles, TableCell, TableRow} from "@material-ui/core";
import {red} from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles(() => ({
    avatar: {
        backgroundColor: red[700],
    },
}));

export default function Recommendation(props) {
    const classes = useStyles();
    return (
        <TableRow>
            <TableCell>
                <Avatar aria-label="recipe" className={classes.avatar}>
                    R
                </Avatar>
            </TableCell>
            <TableCell colSpan={3} >
                <Typography>
                    {props.recommendation.comment}
                </Typography>
            </TableCell>
            <TableCell>
                <Rating name="read-only" value={props.recommendation.rating} readOnly/>
            </TableCell>
        </TableRow>
    );
}