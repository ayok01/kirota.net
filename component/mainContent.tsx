import { createStyles, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => createStyles({
    root : {
        paddingTop : "20Vh",
        textAlign : "center", 
    }
}));

const MainContent = () => {
    const classes = useStyles();

    return(
        <div className = {classes.root}>
            <h1>About this site</h1>
            <p>ここはきろたの制作したものを適当においてるサイトです。</p>
            <p>作ったBotや描いたイラストなどを適当においていきます。</p>
        </div>
        
    );
}

export default MainContent;