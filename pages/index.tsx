import Header from "../component/herader"
import { createStyles, makeStyles } from "@material-ui/core"
import AboutThisSite from "../component/aboutThisSite"
import AboutProfile from "../component/aboutProfile"
import Works from "../component/works"
import Gallery from "../component/gallery"

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
        //背景が決まったときにファイル指定お願いします。
        backgroundImage:'url(/58325-m.jpg)',//この背景はtestです
        backgroundAttachment : 'fixed',
        width:"100%",

        backgroundColor: "#81c784",//背景が決まった場合はコメントアウトしてください
        
        
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
    profile : {
      backgroundColor : "#FFFFFF",
      width: "100%",
      minHeight: "100vh",
      textAlign: "center",
      backgroundPosition : "center",
    },
    works : {
      width: "100%",
      minHeight: "100vh",
      textAlign: "center",
      backgroundPosition : "center",
    },
    gallery:{
      //backgroundColor : "#FFFFFF",
      width: "100%",
      minHeight: "100vh",
      textAlign: "center",
      backgroundPosition : "center",
    }
}));




const TopPage = () => {
    const classes = useStyles();

    
    return (
        <body style={{ margin: 0 }} className={classes.root}>
            <Header/>
            <div  className = { classes.content}>
            </div>
            <div id = "aboutThisSite" className = {classes.aboutContent}>
              <AboutThisSite/>             
            </div>
            <div id = "profile" className = {classes.profile}>
              <AboutProfile/>
            </div>
            {
            //<div id = "works" className = {classes.works}>
            //  <Works/>
            //</div>
            }
            <div id = "gallery" className = {classes.gallery}>
              <Gallery/>
            </div>

        </body>

    );

}

export default TopPage;