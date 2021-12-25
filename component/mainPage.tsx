import {createStyles, makeStyles} from "@material-ui/core";
import { CallMissedSharp } from "@material-ui/icons";

const useStyles = makeStyles((theme) => createStyles({
    root : {
        margin: '0px',
    },
    mainTitle:{
        margin:'0px',
        paddingTop: '250px',
    }
}))

const mainPage = () => {
    const classes = useStyles();

    return(
        <div className = {classes.root}>
            <h1 className = {classes.mainTitle}>
                title
            </h1>
        </div>
    );
}

export default mainPage;