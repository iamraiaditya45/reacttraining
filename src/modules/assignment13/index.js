import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { makeStyles, useTheme, withTheme } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import { FormControlLabel } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import Checkbox from '@material-ui/core/Checkbox';
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Man from "./man.jpeg"
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
const drawerWidth = 240;

const styles=makeStyles((theme)=>({
  
    appBar: {
      [theme.breakpoints.up('sm')]: {
         width: `calc(100% - ${drawerWidth}px)`,
        height:75
      },
    },
    menuItems:{

        backgroundColor:"#0077ed",
        padding:'17px',
        height:43,
        width:45,
        marginLeft:"-24px"
      },
     menuIconWhite:{
         color:"white",
         height:35,
         width:35,
       },


  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer +1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    marginTop:"40px"
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  heading:{
    marginLeft:"25px",
    fontSize:18,
     marginBottom:13,
     color:'#0077ed',
     fontWeight:900,
     marginTop:"20px",
  },
  heading2:{
    marginLeft:"25px",
    fontSize:17,
     fontWeight:900,
  },
  heading3:{
    marginLeft:"12px",
    fontSize:17,
     fontWeight:900,
     width:150,
     marginRight:"37px",
  },
 cafe:{
  marginRight:"30px",
  marginLeft:"30px",
  fontSize:17,
   fontWeight:500,
 },
 anton:{
  marginRight:"10px",
  marginLeft:"10px",
  fontSize:17,
   fontWeight:500,
 },
 schedule:{
  marginRight:"30px",
  marginLeft:"30px",
  fontSize:17,
   fontWeight:500,
   color:'#0077ed',
 },
  up:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  man:{
    height:"50px",
    width:"50px",
    borderRadius:"50%",
    marginLeft:"20px"
  },
 mid:{
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-around',
  marginLeft:"150px"
 } ,
 noti:{
   marginLeft:"480px"
 }
}));
export default function material() {
  
    const classes=styles()
   
  return (
      <div>
<div className={classes.root}>
<div className={classes.rightBar}>
 <AppBar color="white" className={classes.appBar} >
  <Toolbar>
      <div className={classes.menuItems}>
  <HomeIcon className={classes.menuIconWhite}  />
</div>
<img className={classes.man} src={Man}/>
<div className={classes.up}>
          <Typography className={classes.cafe} >Cafe Lover's</Typography>
         
          <ExpandMoreIcon className={classes.expand} />
          </div>
          <div className={classes.mid}>
          <Typography className={classes.cafe} >Dashboard</Typography>
          <Typography className={classes.schedule} >Schedule</Typography>
          <Typography className={classes.cafe} >Messagenger</Typography>
          <Typography className={classes.cafe} >Report</Typography>
          <Typography className={classes.cafe} >Staff</Typography>
</div>
<NotificationsNoneIcon className={classes.noti}/>
<img className={classes.man} src={Man}/>
<div className={classes.up}>
          <Typography className={classes.anton} >Anton</Typography>
         
          <ExpandMoreIcon className={classes.expand} />
          </div>
{/*  
    <FormControlLabel
        value="bottom"
        control={
    <Switch
    checked={true}
    className={classes.switch} />
        }
        label="On" className={classes.label}
        labelPlacement="bottom"
        /> */}
    {/* <Button variant="contained"  className={classes.blue} color="primary" 
    
    startIcon={<PersonAddIcon fontSize={"large"} />}>
  Sign up Free
</Button>
<Button variant="contained" className={classes.green}     startIcon={<FingerprintIcon fontSize={"large"} />}>

  Login
</Button> */}


    </Toolbar> 
    </AppBar>  
</div>

<Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
          <Typography className={classes.heading} >VIEW</Typography>
            {['Shifts', 'Absences', 'Events'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon> <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      /></ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          {/* <Divider /> */}
          <List>
          <Typography className={classes.heading} >LOCATIONS&TEAM</Typography>
          <div className={classes.up}>
          <Typography className={classes.heading2} >Lilli's Cafe</Typography>
         
          <ExpandLessIcon className={classes.expand} />
          </div>
            {['Bar', 'Kitchen'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon> <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      /></ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <List>
          <div className={classes.up}>
          <Typography className={classes.heading2} >John's Cafe </Typography>
          <ExpandLessIcon className={classes.expand}/>
          </div>
            {['Shifts', 'Absences', 'Events'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon> <Checkbox
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      /></ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          {/* <Divider /> */}
          <List>
            <ListItem>
            <div className={classes.up}>
            <Typography className={classes.heading3} >Nadia's Cafe </Typography>
            <ExpandMoreIcon className={classes.expand} />
          </div>
            </ListItem>
          </List>
        </div>
      </Drawer>

</div>
</div>

  )};