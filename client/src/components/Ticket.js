import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default function Ticket(props) {
    const hide = () => {
        props.setHiddenCounter(props.hiddenCounter + 1);
        props.ticket.hidden = true;
        props.ticket.class = "hiddenTicket";
    }

    return (
        <Card className={props.ticket.class} elevation={20} variant="outlined" hidden={props.ticket.hidden}>
            <CardActions style={{ display: "flex", flexDirection: "row-reverse" }}>
                <Button
                    size="small"
                    onClick={hide}
                    className="hideTicketButton"
                >
                    Hide
                </Button>
            </CardActions>
            <CardContent>
                <Typography className="title" variant="h6" component="h2">
                    {props.ticket.title}
                </Typography>
                <Typography className="content" color="textSecondary">
                    {props.ticket.content}
                </Typography>
                <Typography variant="body2" component="p">
                    {props.ticket.labels && props.ticket.labels.map((label, index) => {
                        return (
                            <button className="label" key={index}>
                                {label}
                            </button>
                        )
                    })}
                </Typography>
            </CardContent>
        </Card>
    );
}
