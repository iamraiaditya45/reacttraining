import React from "react";
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    card:{
        // backgroundColor:"blue",
        border:"3px solid blue",
        height:"70px",
        width:"1000px",
        textItems:"center",
        marginLeft:"380px",
        padding:"5px",
        margin:"30px",
        display:"flex",
        
    },
    text:{
        color:"white",
        fontSize:"50px",
        fontWeight:"bolder"
    },
    text2:{
        color:"white",
        fontSize:"20px",
        fontWeight:"bolder",
        padding:20
    },
    divider:{
        height:60,
        width:4,
        backgroundColor:"blue",
        margin:8
    }
    
    }));

    const Hero = () => {
        const classes = useStyles();
        return (
            <> 
            <div className={classes.card}>
                <Typography className={classes.text}>Offers</Typography>
                <div className={classes.divider}>
                </div>
               <Marquee> <Typography className={classes.text2}>Apply your promocode and get eligible for more than 50%Off</Typography>
               </Marquee></div>   
            </>
        );
    };
    export default Hero;