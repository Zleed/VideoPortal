import React from "react";
import {makeStyles, TableCell, TableRow} from "@material-ui/core";
import {red} from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import Grid from "@material-ui/core/Grid";
import MyAvatar from "../avatar/MyAvatar";

const useStyles = makeStyles(() => ({
    avatar: {
        backgroundColor: red[700],
    },
    rating: {
        marginLeft: "25px"
    },
    right: {
        width: "100%",
        justifyContent: "right",
        textAlign: "right"
    }
}));

export default function Recommendation(props) {

    const classes = useStyles();
    const date = props.recommendation.date.split("T")[0];
    const time = props.recommendation.date.split("T")[1].split(".")[0];

    return (
        <TableRow>
            <TableCell>
                <Rating className={classes.rating} name="read-only" value={props.recommendation.rating} readOnly/>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <MyAvatar userId={props.recommendation.userId}/>
                    </Grid>
                    <Grid item xs>
                        <Typography>
                            {props.recommendation.comment}
                        </Typography>
                        <h5 className={classes.right}>
                            {date + "   " + time}
                        </h5>
                    </Grid>
                </Grid>
            </TableCell>
        </TableRow>
    );
}