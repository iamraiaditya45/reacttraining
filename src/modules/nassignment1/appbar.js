import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Man from "./man.jpeg"
import Logo from "./logo.jpg"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { Hidden ,useState } from '@material-ui/core';
const drawerWidth = 70;

const styles=makeStyles((theme)=>({
  
  //   appBar: {
  //   //   [theme.breakpoints.up('sm')]: {
  //   //      width: `calc(100% - ${drawerWidth}px)`,
  //       height:75,
  //   //   },
  //   },  
  appBar: {
     zIndex: theme.zIndex.drawer +1,
     backgroundColor:"#00688B",
     boxShadow:"0px",
     height:62.5,
     [theme.breakpoints.down('sm')]:{         
      zIndex: theme.zIndex.drawer +1,
      backgroundColor:"#00688B",
      boxShadow:"0px",
      width:"100%",
      height:55,
    },
  },
  menu:{
    visibility:{Hidden},
      [theme.breakpoints.down('sm')]:{         
      marginRight:15,
      marginLeft:"-10px"
      }, 
    },
   expand:{
        color:"white",
        marginRight:"20px",
        fontSize:"42px",
        [theme.breakpoints.down('sm')]:{         
          color:"white",
          marginRight:"20px",
          height:"30px",
          width:"30px",
     },
   },
  expands:{
     color:"white",
     marginRight:"20px",
     fontSize:"35px",
     [theme.breakpoints.down('sm')]:{         
      color:"white",
      marginRight:"20px",
      fontSize:"30px"
  },
 },
  cafe:{
   marginRight:"5px",
   marginLeft:"18px",
   fontSize:20,
    fontWeight:500,
    fontWeight:"bold",
    [theme.breakpoints.down('sm')]:{         
      marginRight:"5px",
      marginLeft:"14px",
      fontSize:20,
       fontWeight:500,
       fontWeight:"bold",
     },
  },
   up:{
     display:'flex',
     flexDirection:'row',
     justifyContent:'space-between',
     [theme.breakpoints.down('sm')]:{         
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between'
    },
   },
   man:{
     height:"45px",
     width:"45px",
     borderRadius:"50%",
     marginLeft:"-15px",
     [theme.breakpoints.down('sm')]:{         
      height:"30px",
      width:"30px",
      borderRadius:"50%",
      marginLeft:"-10px"
    },
   },
  logo:{
     height:"38px",
     width:"38px",
     borderRadius:"50%",
     marginRight:"20px",
     [theme.breakpoints.down('sm')]:{         
      height:"28px",
      width:"28px",
      borderRadius:"50%",
      marginRight:"20px",
      marginTop:"1px"
    },
   },

  right:{
      marginLeft:"1432px",
      [theme.breakpoints.down('sm')]:{         
        marginLeft:"55px",
        display:"flex",
        flexDirection:"row",
        overflow: "hidden",
       },
     },

}));
    export default function Material() {     
        const classes=styles()
      return (
          <>
    <div className={classes.mainContainer}>
     <AppBar className={classes.appBar} >
      <Toolbar> 
        {/* <MenuIcon className={classes.menu}/> */}
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