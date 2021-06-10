import { createStyles, makeStyles } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import { profile } from "node:console";

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
      },
    profileSpace:{
        marginTop: "50px",
        //paddingLeft: "30%",
        textAlign: "center",
        Color : "rgba(217, 219, 221, 0.438)",
    },
    profileIcon: {
    },
    profileImg:{
        width: "auto",
        height: "150px",
        borderRadius: "50%",
        textAlign:"center",
    },
    profileName:{
        paddingTop: "20px",
        fontSize: "40px",
        

    },
    profileComment:{

    },
}));

const AboutProfile = ()  => {
    const classes = useStyles();

    return(
        <div className = { classes.root}>
            <h1 className = {classes.title}>profile</h1>
            <div className = {classes.profileSpace}>
                <div className = {classes.profileIcon}>
                    <img className = {classes.profileImg} src={"./20210527-100.png"} alt="profile-icon"/>
                </div>
                <div className = {classes.profileName} >白月きろた</div>
                <div className = {classes.profileComment}>
                    <p>趣味で絵を描いてる学生
                        イラストを何かにいかしたいけどイラスト以外に
                        好きなことが見つからないまま過ごしてる
                    </p>
                </div>
                
            </div>

        </div>
    );
}

export default AboutProfile;