import { createStyles, makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => createStyles({
    root : {
        paddingTop : "20Vh",
        textAlign : "center", 
    },
    title : {
        fontSize : "3.56rem",
        paddingBottom : "5vh",
    },
}));

const AboutProfile = ()  => {
    const classes = useStyles();

    return(
        <div className = { classes.root}>
            <h1 className = {classes.title}>Profile</h1>
        </div>
    );
}

export default AboutProfile;