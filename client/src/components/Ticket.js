import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function Ticket(props) {
    const classes = useStyles();

    return (
        <Card className="ticket" elevation={20} variant="outlined">
            <CardActions style={{ display: "flex", flexDirection: "row-reverse" }}>
                <Button size="small">Hide</Button>
            </CardActions>
            <CardContent>
                <Typography className="title" variant="h6" component="h2">
                    {props.ticket.title}
                </Typography>
                <Typography className="content" color="textSecondary">
                    {props.ticket.content}
                </Typography>
                {/* <Typography variant="body2" component="p">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography> */}
                <CardActions style={{ display: "flex", flexDirection: "row-reverse" }}>
                    <Button size="small">Hide</Button>
                </CardActions>
            </CardContent>
        </Card>
    );
}
