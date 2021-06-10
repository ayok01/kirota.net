import { createStyles, makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => createStyles({
    
    
    root:{
        paddingTop : "10Vh",
        textAlign : "center", 
    },
    title : {
        fontSize : "3.56rem",
        paddingBottom : "5vh",
    },
    illstSpace:{
        WebkitOverflowScrolling: "touch",
        overflowX: "auto",
        whiteSpace : "nowrap",
        marginBottom :"50px", 
        listStyle: "none",
        overflow : "left",
    },
    illstImg:{
        display:"inline-block",
        //backgroundColor:"#CCC"

    },
    ImgBox:{
        objectFit: "cover",
        overflow: "hidden",
        paddingRight :"70px",
        paddingLeft : "70px",
        width : "400px",
        height : "400px",
        position: "relative",
    },
}));

const Gallery = () => {
    const classes = useStyles();
    const numbers = [1, 2, 3, 4, 5,6];

    return(
        <div className = {classes.root} >
            <h1 className = {classes.title}>Gallery</h1>
            <ul className ={classes.illstSpace}>
                {numbers.map((ilustbox:number, i:number) => 
                <li className ={classes.illstImg}  key={i}>
                    <img className = {classes.ImgBox} src={"./20210326.png"} alt="profile-icon"/>
                </li>)}
            </ul>

            <a >もっと見る</a>

            
        </div>
    )
}

export default Gallery;