import { createStyles, makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => createStyles({
    root:{
        paddingTop : "10Vh",
        textAlign : "center", 
    },
    title : {
        fontSize : "3.56rem",
        paddingBottom : "5vh",
    }
}));

const Gallery = () => {
    const classes = useStyles();

    return(
        <div className = {classes.root} >
            <h1 className = {classes.title}>Gallery</h1>
            
        </div>
    )
}

export default Gallery;