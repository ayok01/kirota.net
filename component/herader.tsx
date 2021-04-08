import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
 list: {
    width: 250,
 },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
}));

export default function DenseAppBar() {
    
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar  position="relative" color="inherit">
        <Toolbar >
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
            </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}