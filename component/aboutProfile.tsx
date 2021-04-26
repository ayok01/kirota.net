import { createStyles, makeStyles } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => createStyles({
    root : {
        paddingTop : "20Vh",
        textAlign : "center", 
    },
    title : {
        fontSize : "3.56rem",
        paddingBottom : "5vh",
    },
    card : { 
        
    },
    large: {

        width: "100px",
        height: "100px",
      }
}));

const AboutProfile = ()  => {
    const classes = useStyles();

    return(
        <div className = { classes.root}>
            <h1 className = {classes.title}>Profile</h1>
            <div className = {classes.card}></div>
            <Avatar alt="Remy Sharp" src="./20210326.png" style={{alignSelf: 'center'}} className={classes.large} />
        </div>
    );
}

export default AboutProfile;