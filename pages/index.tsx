import Header from "../component/herader"
import { createStyles, makeStyles } from "@material-ui/core"



const useStyles = makeStyles((theme) => createStyles({
    '@global': {
        '*::-webkit-scrollbar': {
          width: '0.4em'
        },
        '*::-webkit-scrollbar-track': {
          '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(0,0,0,.1)',
          outline: '1px solid slategrey'
        }
      },
    

    root: {
        backgroundColor: "#81c784",
        
        
    },
    content:{
        backgroundImage:'url(/20210326.png)',
        backgroundSize : "cover",
        
        width: "100%",
        minHeight: "100vh",
        textAlign: "center",
        backgroundPosition : "center",
    },
    aboutContent:{
      width: "100%",
      minHeight: "100vh",
      textAlign: "center",
      backgroundPosition : "center",
    },
    WorkContet : {
      backgroundColor : "blue",
      width: "100%",
      minHeight: "100vh",
      textAlign: "center",
      backgroundPosition : "center",
    }
}));


const Blog = () => {
    const classes = useStyles();


    return (
        <body style={{ margin: 0 }} className={classes.root}>
            <Header/>
            <div  className = { classes.content}>
            </div>
            <div className = {classes.aboutContent}>
              ssssssss
            </div>
            <div className = {classes.WorkContet}>
              ssssssss
            </div>

        </body>

    );

}

export default Blog;
