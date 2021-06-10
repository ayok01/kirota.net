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

        </div>
    );
}

export default AboutProfile;