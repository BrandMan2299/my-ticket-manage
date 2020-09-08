import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: 'calc(1em)',
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function NavBar(props) {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <div className={classes.search}>
          <InputBase
            id="searchInput"
            onChange={props.onTextChange}
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
        <Typography hidden={!props.hiddenCounter} variant="subtitle1">
          <span id="hideTicketsCounter" style={{ padding: '3px' }}>{props.hiddenCounter}</span>
          Tickets are hidden
          <Button
            id="restoreHideTickets"
            variant="contained"
            color="primary"
            disableElevation
            onClick={props.restore}
          >
            restore
          </Button>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
