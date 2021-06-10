import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';



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
  navButtonSns : {
    marginRight:"0px",
  },
  menuButton: {
  marginRight: theme.spacing(),
  marginLeft:"0px",
  }

}));

const DenseAppBar = () => {
    
  const classes = useStyles();

  const topLink = () =>{
    window.scrollTo(0, 0);
  }



  return (
    <header className = {classes.root}>
            <AppBar  position="relative" color="inherit"  style={{ background: 'transparent', boxShadow: 'none'}} >
        <Toolbar>
          
          <Typography  className={classes.title}></Typography>
          <Button id = "top" onClick={topLink} className={classes.navButton} color="inherit">トップ</Button>
          
          <Button onClick={() => {
            window.location.href = "#aboutThisSite";
            }}
            className={classes.navButton}
            color="inherit">このサイトについて
            </Button>
          
          <Button onClick={() => {
            window.location.href = "#profile";
            }}
          className={classes.navButton} color="inherit">
            プロフィール
          </Button>

          <Button onClick={() => {
            window.location.href = "#gallery";
            }}
            className={classes.navButton} color="inherit">
            ブログ
          </Button>

          <Button className={classes.navButton} color="inherit">連絡先</Button>
          <Button className={classes.navButtonSns} color="inherit"><TwitterIcon /></Button>
          <Button className={classes.navButtonSns} color="inherit"><YouTubeIcon /></Button>

          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default DenseAppBar;