import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import TuneRoundedIcon from '@material-ui/icons/TuneRounded';
import Tables from './table.js';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const drawerWidth = 70;

const styles=makeStyles((theme)=>({

           card3:{
         height:820,
         width:1190,
         backgroundColor:"white",
         margin:5,
         marginRight:0,
         boxShadow:"0 0 4px grey",
         padding:10,
         [theme.breakpoints.down('sm')]:{
         height:820,
         width:292,
         backgroundColor:"white",
         margin:5,
         marginRight:0,
         boxShadow:"0 0 4px grey",
         padding:10,
         marginLeft:drawerWidth-13,
           }
          },
       search:{
        color:"black",
        margin:15,
        marginLeft:5,
        borderColor:"#dcdcdc",
        width:"320px",
        height:"40px",
        paddingRight:"200px",
        [theme.breakpoints.down('sm')]:{
         color:"black",
         margin:15,
         marginLeft:5,
         borderColor:"#dcdcdc",
         width:"120px",
         height:"40px",
         paddingRight:"20px",
         marginRight:"45px"
     },
    },
     add:{
         color:"#007bb8",
         margin:15,
         marginLeft:5,
         borderColor:"#007bb8",
         height:"40px",
         [theme.breakpoints.down('sm')]:{
          color:"#007bb8",
          marginLeft:-2,
          borderColor:"#007bb8",
          height:"40px",
      },
     },
     hr1:{
      marginLeft:"10px",
      width:"98%",
      marginTop:8,
      marginBottom:26,
      [theme.breakpoints.down('sm')]:{
         marginLeft:"1px",
         width:"100%",
         marginTop:8,
     },
    },
    three:{
      marginTop:"20px",
      marginBottom:"15px",
      display:"flex",
      justifyContent:"space-between",
      padding:"5px",
      [theme.breakpoints.down('sm')]:{  
      marginTop:"20px",
      marginBottom:"15px",
      display:"flex",
      justifyContent:"space-between",
      padding:"5px"
    },
  },

  delete:{
    display:"flex",
    [theme.breakpoints.down('sm')]:{         
     display:"flex",
     flexDirection:"row"
 },
},
  selected:{
    color:"grey",
    marginLeft:15,
    width:80,
    [theme.breakpoints.down('sm')]:{         
     color:"grey",
     fontSize:"12px",
     width:58,
     marginLeft:0
 },
},
circle2:{
  backgroundColor:'#dcdcdc',
  height:"38px",
  width:"2px",
  marginLeft:"15px",
  marginTop:"-5px",
  [theme.breakpoints.down('sm')]:{
   backgroundColor:'#dcdcdc',
   height:"38px",
   width:"2px",
   marginLeft:"15px",
   marginTop:"-5px"
  },
 },
 deletebutton:{
  color:"black",
  marginLeft:20,
  marginTop:-7,
  borderColor:"#dcdcdc",
  height:"40px",
  [theme.breakpoints.down('sm')]:{
   color:"black",
   marginTop:-7,
   borderColor:"#dcdcdc",
   height:"40px",
   fontSize:"12px",
   marginLeft:"10px",
   marginRight:"10px",
},
},
     filter:{
         color:"black",
         margin:15,
         marginLeft:5,
         borderColor:"#dcdcdc",
         height:"40px",
         marginTop:-7,
         marginLeft:845,
         [theme.breakpoints.down('sm')]:{
          color:"black",
          borderColor:"#dcdcdc",
          height:"40px",
          marginTop:-7,
          fontSize:"12px",
         width:90,
         marginLeft:0,
      },
     },
     
   
}));
export default function material() {
  
    const classes=styles()
   
  return (
      <>
    <div className={classes.card3}>
        <div>
    <Typography variant="h5">Requested material</Typography>
    <Button variant="outlined" className={classes.search} startIcon={
                <SearchIcon fontSize={"large"} className={classes.addicons} />
              }
            >
              Search
            </Button> 
            <Button
              variant="outlined"
              className={classes.add}
              startIcon={
                <AddIcon/>
              }
            >
              ADD
            </Button> 
<hr className={classes.hr1}/>
<div className={classes.three}>
<div className={classes.delete}>
<Typography  className={classes.selected}>1 Selected</Typography>
<div className={classes.circle2}></div>
<Button
              variant="outlined"
              className={classes.deletebutton}
            >
            DELETE
            </Button> 
            <Button variant="outlined" className={classes.filter} startIcon={
                <TuneRoundedIcon  className={classes.addicons} />
              }
            >
              FILTERS
            </Button> 
            </div>
            </div>
            <div>
         <Tables/>
    </div>
            </div>
    </div>
</>

  )};