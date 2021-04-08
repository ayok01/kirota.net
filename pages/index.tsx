import Header from "../component/herader"
import { createStyles, makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => createStyles({

    root: {
        display: 'flex',
    },
}));


const Blog = () => {
    const classes = useStyles();


    return (
        <body style={{ margin: 0 }}>
            <div className={classes.root} >
                <Header/>
            </div>
        </body>

    );

}

export default Blog;
