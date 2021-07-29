import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles ,  withStyles, withTheme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  
    innercard1:{
        backgroundColor:"#4e4b4a",
        height:65,
        width:"70%",
        zIndex: theme.zIndex.card +1,
        margin:"10px 170px",
        overflow:"auto",
        display:"flex",
        justifyContent:"space-between",
        paddingTop:8,
        paddingRight:20,
        [theme.breakpoints.down('sm')]:{ 
          backgroundColor:"#4e4b4a",
          height:215,
          width:"300px",
          zIndex: theme.zIndex.card +1,
          margin:"10px",
          overflow:"auto",
          display:"flex",
          flexDirection:"column",
          justifyContent:"space-around",
        }
    },
   
 addbutton:{
     backgroundColor:"orange",
     borderRadius:"25px",
     height:45,
     width:"110px",
     color:"white",
     marginTop:"10px",
     [theme.breakpoints.down('sm')]:{ 
      backgroundColor:"orange",
      borderRadius:"25px",
      height:45,
      width:"110px",
      color:"white",
      marginLeft:"100px",
  }
     
 },
 tasktext:{
     display:"flex",
     flexDirection:"column",
     paddingRight:"20px"
 },
 
 input1:{
  padding: "10px 12px",
  display: "inline-block",
  border: "1px solid #ccc",
  borderRadius: "4px",
  outline:"none",
  marginLeft:"15px" ,
  borderRadius:"15px",
  [theme.breakpoints.down('sm')]:{ 
      padding: "10px 12px",
  display: "inline-block",
  border: "2px solid orange",
  borderRadius: "4px",
  outline:"none",
  marginLeft:"25px" ,
  borderRadius:"15px",
  width:240,
  overflow:"auto",
  marginBottom:"10px"
  }
  
},
input2:{
  padding: "10px 12px",
  display: "inline-block",
  border: "1px solid #ccc",
  borderRadius: "4px",
  outline:"none", 
  marginLeft:"15px",
  borderRadius:"15px",
  [theme.breakpoints.down('sm')]:{ 
      padding: "10px 12px",
  display: "inline-block",
  border: "2px solid orange",
  borderRadius: "4px",
  outline:"none",
  marginLeft:"25px" ,
  borderRadius:"15px",
  width:240,
  overflow:"auto",
  marginBottom:"-30px"
  }
},
label:{
    color:"white",
    marginLeft:"20px",
    [theme.breakpoints.down('sm')]:{ 
      color:"white",
      marginLeft:"30px",
  }
},
inputbox:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    [theme.breakpoints.down('sm')]:{ 
      display:"flex",
      flexDirection:"column",
      justifyContent:"space-between",
  }
},
comde:{
  [theme.breakpoints.down('sm')]:{ 
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
},
},
}));
<div className={classes.innercard1}>
    <div className={classes.inputbox}>
        <div>
    <label for="fname" className={classes.label}>Name</label><br></br>
    <input type="text" id="fname" name="firstname" value={inputList1} onChange={(e)=>setInputList1(e.target.value)} 
    className={classes.input1} />
    </div>
<div>
    <label for="lname" className={classes.label}>Description</label><br></br>
    <input type="text" id="lname" name="lastname"defaultValue="test" value={inputList2} onChange={(e)=>setInputList2(e.target.value)}  className={classes.input2}/>
    </div>
    </div>
        <Button variant="contained" type="submit" onClick={submit}   className={classes.addbutton}>
        Add todo
      </Button>
</div>
