import { createStyles, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => createStyles({
    root : {
        paddingTop : "20Vh",
        textAlign : "center", 
    },
    title : {
        fontSize : "3.56rem",
        paddingBottom : "5vh",
    },
    text : {
        fontSize : "20px"
    }
}));

const MainContent = () => {
    const classes = useStyles();

    return(
        <div className = {classes.root}>
            <h1 className = {classes.title}>About this site</h1>
            <p className = {classes.text}>ここは白月きろたの制作したものを適当においてるサイトです。</p>
            <p className = {classes.text}>作ったを適当においていきます。</p>
        </div>
        
    );
}

export default MainContent;