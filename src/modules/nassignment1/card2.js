import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import TuneRoundedIcon from '@material-ui/icons/TuneRounded';
import Tables from './table.js'
const drawerWidth = 70;

const styles=makeStyles((theme)=>({
      circle2:{
        backgroundColor:'#dcdcdc',
        height:"38px",
        width:"2px",
        marginLeft:"15px",
        marginTop:"-5px"
    },

           card3:{
        height:820,
        width:1190,
        backgroundColor:"white",
        margin:5,
        marginRight:0,
        boxShadow:"0 0 4px grey",
        padding:10
    },
    hr1:{
        marginLeft:"10px",
        width:"98%",
        marginTop:8,
        marginBottom:26,
      },
    editbutton:{
        color:"#007bb8",
        margin:15,
        marginLeft:5,
        borderColor:"#007bb8",
        height:"40px",
    },
    editbutton2:{
        color:"black",
        margin:15,
        marginLeft:5,
        borderColor:"#dcdcdc",
        width:"320px",
        height:"40px",
        paddingRight:"200px"
    },
    editbutton3:{
        color:"black",
        margin:15,
        marginLeft:5,
        borderColor:"#dcdcdc",
        height:"40px",
        marginTop:-7,
        marginLeft:830
    },
    deletebutton:{
        color:"black",
        marginLeft:20,
        marginTop:-7,
        borderColor:"#dcdcdc",
        height:"40px",
    },
    xlight:{
        color:"grey",
        fontSize:"15px",
        marginTop:"-19px"
    },
    selected:{
        color:"grey",
        marginLeft:15,
    },
    delete:{
        display:"flex"
    },
}));
export default function material() {
  
    const classes=styles()
   
  return (
      <>
    <div className={classes.card3}>
        <div>
    <Typography variant="h5">Requested material</Typography>
    <Button variant="outlined" className={classes.editbutton2} startIcon={
                <SearchIcon fontSize={"large"} className={classes.addicons} />
              }
            >
              Search
            </Button> 
            <Button
              variant="outlined"
              className={classes.editbutton}
              startIcon={
                <AddIcon fontSize={"xlarge"} className={classes.addicon} />
              }
            >
              ADD
            </Button> 
<hr className={classes.hr1}/>
<div className={classes.delete}>
<Typography  className={classes.selected}>1 Selected</Typography>
<div className={classes.circle2}></div>
<Button
              variant="outlined"
              className={classes.deletebutton}
            >
            DELETE
            </Button> 
            <Button variant="outlined" className={classes.editbutton3} startIcon={
                <TuneRoundedIcon fontSize={"large"} className={classes.addicons} />
              }
            >
              Search
            </Button> 
            </div>
            <div>
         <Tables/>
    </div>
            </div>
    </div>
</>

  )};