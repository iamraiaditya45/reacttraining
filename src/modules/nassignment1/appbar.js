import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles, useTheme, withTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Man from "./man.jpeg"
import Logo from "./logo.jpg"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';

const drawerWidth = 70;

const styles=makeStyles((theme)=>({
  
    appBar: {
    //   [theme.breakpoints.up('sm')]: {
    //      width: `calc(100% - ${drawerWidth}px)`,
        height:75,
    //   },
    },
  mainContainer: {
    backgroundColor:"red",
  },
  
  appBar: {
    zIndex: theme.zIndex.drawer +1,
    backgroundColor:"#00688B",
    boxShadow:"0px"
    
  },
   expand:{
       color:"white",
       marginRight:"20px",
       fontSize:"42px"
  },
  expands:{
    color:"white",
    marginRight:"20px",
    fontSize:"35px"
},
 cafe:{
  marginRight:"5px",
  marginLeft:"18px",
  fontSize:20,
   fontWeight:500,
   fontWeight:"bold",
 },
  up:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  man:{
    height:"45px",
    width:"45px",
    borderRadius:"50%",
    marginLeft:"-15px"
  },
  logo:{
    height:"38px",
    width:"38px",
    borderRadius:"50%",
    marginRight:"20px",
  },

 right:{
     marginLeft:"1432px",
    },

}));
    export default function material() {
  
        const classes=styles()
       
      return (
          <>
    <div className={classes.mainContainer}>
     <AppBar className={classes.appBar} >
      <Toolbar> 
    <img className={classes.man} src={Man}/>
    <div className={classes.up}>
              <Typography className={classes.cafe} >Suntex</Typography>
             
              <ArrowDropDownIcon className={classes.expands} />
              </div>
    <div className={classes.right}>
    <SettingsIcon className={classes.expand} />
    <img className={classes.logo} src={Logo}/>
                       <AppsIcon className={classes.expand}  />
              </div>
              </Toolbar> 
        </AppBar>   
    </div>
    <div>
    </div>
    </>
     )};