import React from "react";
import Avatar from "@material-ui/core/Avatar";
import {makeStyles, TableCell, TableRow} from "@material-ui/core";
import {red} from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() => ({
    avatar: {
        backgroundColor: red[700],
    },
    rating: {
        marginLeft: "25px"
    },
}));

export default function Recommendation(props) {
    const classes = useStyles();
    return (
        <TableRow>
            <TableCell colSpan={6}>
                <Rating className={classes.rating} name="read-only" value={props.recommendation.rating} readOnly/>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar aria-label="recipe" className={classes.avatar}>R</Avatar>
                    </Grid>
                    <Grid item xs>
                        <Typography>
                            {props.recommendation.comment}
                        </Typography>
                    </Grid>
                </Grid>
            </TableCell>
        </TableRow>
    );
}