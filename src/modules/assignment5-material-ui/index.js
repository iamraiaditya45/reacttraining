import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import BallotIcon from '@material-ui/icons/Ballot';
import BusinessIcon from '@material-ui/icons/Business';
import CameraRollIcon from '@material-ui/icons/CameraRoll';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import { makeStyles, useTheme, withTheme } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import { FormControlLabel } from '@material-ui/core';
import { Table } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableContainer from '@material-ui/core/TableContainer';
import TableBody from '@material-ui/core/TableBody';
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import LocationOnIcon from "@material-ui/icons/LocationOn";
const drawerWidth=78
const styles=makeStyles((theme)=>({
  
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      height:80
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
drawerPaper:{
  width:drawerWidth,
  backgroundColor:'blue'
},
root:{
  display:'flex'
},
menuItem:{

  backgroundColor:'blue',
  padding:'15px',
},
menuItems:{

  backgroundColor:'black',
  padding:'15px',
  marginTop:'-8px',
  height:80,
},
ListItemIcon:{
  fontSize:700,
},
menuIconBlack:{
  color:"white",
  fontSize:"40px"
},

menuIconColor:{
  color:"white",
  fontSize:"40px"
},
green:{
  backgroundColor:'green',
  marginLeft:30,
  height:45,
  marginTop:20
},
blue:{
  marginLeft:1330,
  height:45,
  marginTop:20
},
card:{
  marginTop:140,
  marginLeft:250,
  position:'absolute',
  width:650,
  height:400
},
cardBtn:{
width:270,
height:55,
padding:14,
margin:'17px'
},
cardbtn:{
  width:575,
  height:55,
  padding:14,
  margin:'17px'
  },
  card2:{
    marginTop:140,
    marginLeft:950,
    position:'absolute',
    width:650,
    height:400
  },
  cardbtngreen:{
    backgroundColor:"green",
    height:50,
    width:200,
    marginTop:50
  },
  card2content:{
    textAlign:'center'
  },
  switch:{
    color:"red"
  },
  label:{
color:'black',
fontSize:2
  },
  
  tableheading:{

    position:"absolute",
    width:"700px",
    margin:"620px 174px",
    color:"grey",
    
},
tablecontainer:{

    position:"absolute",
    margin:"670px 178px",
    width:"1350px",
    height:"550px",
    boxShadow:"0 0 2px grey"
},
tablehead:{

    fontSize:"22px",
    fontWeight:"bold",
    width:"250px"
},
tablehead2:{

    fontSize:"20px",
    fontWeight:"bold",
    width:"350px"
},
sellercol:{

    fontSize:"17px",
    color:"blue"
},
paymentcol:{

    fontSize:"20px"
},
pricecol:{

    fontSize:"22px",
    color:"green",
    fontWeight:"bold"
},
limitcol:{

    fontSize:"20px"
},
buybutton:{

    backgroundColor:"orange",
    padding:"7px 25px",
    marginLeft:"-60px",
    fontSize:"15px",
    fontWeight:"bold"
},
showbutton:{

    width:"200px",
    fontWeight:"bold",
    fontSize:"20px",
    marginLeft:"-150px"
},
}));


export default function material() {
  
    const classes=styles()
   
  return (
<div className={classes.root}>
<div className={classes.rightBar}>
 <AppBar color="white" className={classes.appBar} >
  <Toolbar>
 
    <FormControlLabel
        value="bottom"
        control={
    <Switch
    checked={true}
    className={classes.switch} />
        }
        label="On" className={classes.label}
        labelPlacement="bottom"
        />
    <Button variant="contained"  className={classes.blue} color="primary" 
    
    startIcon={<PersonAddIcon fontSize={"large"} />}>
  Sign up Free
</Button>
<Button variant="contained" className={classes.green}     startIcon={<FingerprintIcon fontSize={"large"} />}>

  Login
</Button>


    </Toolbar> 
    </AppBar>  
</div>
<Drawer className={classes.drawer}
variant="permanent"
anchor="left"
classes={{paper:classes.drawerPaper}}>
 

 <List>
 <ListItem className={classes.menuItems}>
          <ListItemIcon >
          <HomeIcon className={classes.menuIconBlack}  />
        
          </ListItemIcon>
        </ListItem>
        <ListItem  className={classes.menuItem}>
          <ListItemIcon>
            <AccountBalanceWalletIcon className={classes.menuIconColor} />
          </ListItemIcon>
        </ListItem>
        <ListItem  className={classes.menuItem}>
          <ListItemIcon>
            <AssignmentIndIcon className={classes.menuIconColor} />
          </ListItemIcon>
        </ListItem>
        <ListItem  className={classes.menuItem}>
          <ListItemIcon>
            <BallotIcon className={classes.menuIconColor}/>
          </ListItemIcon>
        </ListItem>
        <ListItem  className={classes.menuItem}>
          <ListItemIcon>
            <BusinessIcon className={classes.menuIconColor}/>
          </ListItemIcon>
        </ListItem>
        <ListItem  className={classes.menuItem}>
          <ListItemIcon>
            <CameraRollIcon className={classes.menuIconColor}/>
          </ListItemIcon>
        </ListItem>
        <ListItem  className={classes.menuItem}>
          <ListItemIcon>
            <DirectionsCarIcon className={classes.menuIconColor}/>
          </ListItemIcon>
        </ListItem>
        <ListItem  className={classes.menuItem}>
          <ListItemIcon>
            <EmojiEventsIcon className={classes.menuIconColor} />
          </ListItemIcon>
        </ListItem>
        <ListItem  className={classes.menuItem}>
          <ListItemIcon>
            <MenuIcon className={classes.menuIconColor} />
          </ListItemIcon>
        </ListItem>
 </List>
        </Drawer>

<div className={classes.toolbar}>

</div>
        <Card className={classes.card}>
      <CardContent>
      <Button variant="contained" className={classes.cardBtn} color="primary"    startIcon={<ShoppingCartIcon />}>BUY</Button>
      <Button variant="outlined"className={classes.cardBtn} startIcon={<RemoveShoppingCartIcon fontSize={"large"}/>}>SELL</Button>
      <Button variant="outlined" className={classes.cardBtn}   >Amount</Button>
      <Button variant="outlined"className={classes.cardBtn} >INR</Button>
      <Button variant="outlined" className={classes.cardBtn}     >India</Button>
      <Button variant="outlined"className={classes.cardBtn} >All online offer</Button>
      <Button variant="contained"className={classes.cardbtn} color="primary" startIcon={<SearchIcon fontSize={"large"}/>}>Search</Button>

      </CardContent>
    </Card>

    <Card className={classes.card2}>
      <CardContent className={classes.card2content}>
    <Typography variant="h3">Buy Monero.</Typography>
    <Typography variant="h3">Sell Monero.</Typography>
    <Typography variant="h3">Cash or online.</Typography>
    <Typography variant="h3">Anywhere.</Typography>
      <Button variant="contained"className={classes.cardbtngreen}  startIcon={<PersonAddIcon fontSize={"large"}/>}>Search</Button>

      </CardContent>
    </Card>
    <div className={classes.tablehead}>
    <div className={classes.tableheading}>
          <Typography variant="h5" >Buy Monero online in India</Typography></div>
          <div className={classes.tablecontainer}>
          <TableContainer>
              <Table>
                  <TableHead>
                      <TableRow>
                          <TableCell className={classes.tablehead}>Seller</TableCell>
                          <TableCell className={classes.tablehead2}>Payment Methods</TableCell>
                          <TableCell className={classes.tablehead}>Price/XMR</TableCell>
                          <TableCell className={classes.tablehead2}>Limits</TableCell>
                          <TableCell ></TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                  <TableRow>
                          <TableCell className={classes.sellercol}><u>chandanbits007(54;100%)</u></TableCell>
                          <TableCell  className={classes.paymentcol}> IMPS Bank Transfer India</TableCell>
                          <TableCell className={classes.pricecol}>19366.77 INR</TableCell>
                          <TableCell className={classes.limitcol}>2500.00-20000.00 INR</TableCell>
                          <TableCell><Button variant="contained" color="primary"className={classes.buybutton}>BUY
                                  </Button></TableCell>
                      </TableRow>
                      <TableRow>
                          <TableCell className={classes.sellercol}><u>appukttam0(529;100%)</u></TableCell>
                          <TableCell className={classes.paymentcol}>Other online payment</TableCell>
                          <TableCell className={classes.pricecol}>19566.77 INR</TableCell>
                          <TableCell className={classes.limitcol}>100.00-22000.00 INR</TableCell>
                          <TableCell><Button variant="contained" color="primary"className={classes.buybutton}>BUY
                                  </Button></TableCell>
                      </TableRow>
                      <TableRow>
                          <TableCell className={classes.sellercol}><u>jdboi(5114;100%)</u></TableCell>
                          <TableCell className={classes.paymentcol}>IMPS Bank Transfer India</TableCell>
                          <TableCell className={classes.pricecol}>21366.77 INR</TableCell>
                          <TableCell className={classes.limitcol}>8500.00-50000.00 INR</TableCell>
                          <TableCell><Button variant="contained" color="primary"className={classes.buybutton}>BUY
                                  </Button></TableCell>
                      </TableRow>
                      <TableRow>
                          <TableCell className={classes.sellercol}><u>chgbyry(4535;100%)</u></TableCell>
                          <TableCell className={classes.paymentcol}>IMPS Bank Transfer India</TableCell>
                          <TableCell className={classes.pricecol}>21966.77 INR</TableCell>
                          <TableCell className={classes.limitcol}>1000.00-25000.00 INR</TableCell>
                          <TableCell><Button variant="contained" color="primary"className={classes.buybutton}>BUY
                                  </Button></TableCell>
                      </TableRow>
                      <TableRow>
                          <TableCell className={classes.sellercol}><u>chandanbits007(54;100%)</u></TableCell>
                          <TableCell className={classes.paymentcol}>IMPS Bank Transfer India</TableCell>
                          <TableCell className={classes.pricecol}>19366.77 INR</TableCell>
                          <TableCell className={classes.limitcol}>2500.00-20000.00 INR</TableCell>
                          <TableCell><Button variant="contained" color="primary"className={classes.buybutton}>BUY
                                  </Button></TableCell>
                      </TableRow>
                      <TableRow>
                          <TableCell className={classes.sellercol}><u>appukuttam(5764;100%)</u></TableCell>
                          <TableCell className={classes.paymentcol}>IMPS Bank Transfer India</TableCell>
                          <TableCell className={classes.pricecol}>21766.77 INR</TableCell>
                          <TableCell className={classes.limitcol}>Up to 25000.00 INR</TableCell>
                          <TableCell><Button variant="contained" color="primary"className={classes.buybutton}>BUY
                                  </Button></TableCell>
                      </TableRow>
                      <TableRow>
                          <TableCell></TableCell>
                          <TableCell></TableCell>
                          <TableCell></TableCell>
                          <TableCell></TableCell>
                          <TableCell><Button color="primary" className={classes.showbutton}>SHOW MORE...</Button></TableCell>
                      </TableRow>
                      
                  </TableBody>
              </Table>
          </TableContainer>
          </div>
          </div>
</div>
  );
}



