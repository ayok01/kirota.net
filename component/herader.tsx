import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    position :"fixed",
  },
   title: {
  flexGrow: 1,
  },
  navButton :{
    marginRight:"40px",
    
  },
  menuButton: {
  marginRight: theme.spacing(),
  marginLeft:"60px",
  }

}));

const DenseAppBar = () => {
    
  const classes = useStyles();

  return (
    <header className = {classes.root}>
            <AppBar position="relative" color="inherit" >
        <Toolbar>
          
          <Typography  className={classes.title}></Typography>
          <Button className={classes.navButton} color="inherit">トップ</Button>
          <Button className={classes.navButton} color="inherit">このサイトについて</Button>
          <Button className={classes.navButton} color="inherit">ポートフォリオ</Button>
          <Button className={classes.navButton} color="inherit">ブログ</Button>
          <Button className={classes.navButton} color="inherit">連絡先</Button>

          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default DenseAppBar;