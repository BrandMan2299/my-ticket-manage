import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';

export default function Ticket(props) {
  const hide = () => {
    props.setHiddenCounter(props.hiddenCounter + 1);
    props.ticket.hidden = true;
    props.ticket.class = 'hiddenTicket';
  };

  const date = new Date(props.ticket.creationTime);

  return (
    <Card
      className={props.ticket.class}
      elevation={4}
      hidden={props.ticket.hidden}
      style={{
        width: '80vw',
        margin: '5px',
      }}
    >
      <CardContent>
        <Typography
          className="title"
          variant="h5"
          component="h2"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {props.ticket.title}
          <CardActions>
            <Button
              size="small"
              onClick={hide}
              className="hideTicketButton"
            >
              Hide
            </Button>
          </CardActions>
        </Typography>
        <Typography
          className="content"
          style={{ marginBottom: '15px' }}
        >
          {props.ticket.content}
        </Typography>
        <Typography
          className="labels"
          style={{ marginBottom: '15px' }}
          component="div"
        >
          {props.ticket.labels && props.ticket.labels.map((label) => (
            <Chip className="label" key={label} label={label} color="primary" />))}
        </Typography>
        <Typography className="info" variant="subtitle1" component="p" color="textSecondary">
          {props.ticket.userEmail}
          {' '}
          |
          {date.toString()}
        </Typography>
      </CardContent>
    </Card>
  );
}
