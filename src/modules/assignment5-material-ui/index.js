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
import AddIcon from '@material-ui/icons/Add';
import VpnLockIcon from '@material-ui/icons/VpnLock';
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
    color:"green",
    marginTop:10
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
tableheading: {
  position: "absolute",
  width: "700px",
  margin: "490px -20px",
  color: "grey",
},
tablecontainer: {
  position: "absolute",
  margin: "570px 110px",
  width: "1260px",
  height: "550px",
  boxShadow: "0 0 2px grey",
},
tablehead: {
  fontSize: "22px",
  fontWeight: "bold",
  width: "250px",
},
tablehead2: {
  fontSize: "20px",
  fontWeight: "bold",
  width: "350px",
},
sellercol: {
  fontSize: "17px",
  color: "blue",
},
paymentcol: {
  fontSize: "20px",
},
pricecol: {
  fontSize: "22px",
  color: "green",
  fontWeight: "bold",
},
limitcol: {
  fontSize: "20px",
},
buybutton: {
  backgroundColor: "orange",
  color:"white",
  padding: "7px 25px",
  marginLeft: "-60px",
  fontSize: "15px",
  fontWeight: "bold",
},
showbutton: {
  width: "200px",
  fontWeight: "bold",
  fontSize: "20px",
  marginLeft: "-150px",
},
tablebottom: {
  position: "absolute",
  margin: "2340px 110px",
},
youcanbe: {
  fontSize: "25px",
  fontWeight: "bold",
},
postadbutton: {
  color: "green",
  fontSize: "20px",
  border: "1px solid green",
},
addicon: {
  fontSize: "30px",
  color: "green",
},
buymonero: {
  color: "green",
  fontSize: "24px",
},
showingad: {
  position: "absolute",
  margin: "2480px 500px",
},
showingcontent: {
  fontSize: "22px",
  width: "500px",
},
changebutton: {
  color: "blue",
  fontSize: "22px",
},
horizontal: {
  width: "1200px",
  position: "absolute",
  margin: "2130px 130px",
},
bottombody: {
  position: "absolute",
  margin: "2570px 300px",
},
bottomhead: {
  fontWeight: "bold",
  padding: "15px 0px",
},
bottomcontent: {
  fontSize: "18px",
},
horizontal: {
  width: "1200px",
  position: "absolute",
  margin: "2535px 130px",
},
accounticon: {
  color: "blue",
},
tableheading2: {
  position: "absolute",
  width: "700px",
  margin: "1160px -20px",
  color: "black",
},
tablecontainer2: {
  position: "absolute",
  margin: "1240px 110px",
  width: "1260px",
  height: "550px",
  boxShadow: "0 0 2px grey",
},
tableheading3: {
  position: "absolute",
  width: "700px",
  margin: "1820px 40px",
  color: "black",
},
tablecontainer3: {
  position: "absolute",
  margin: "1880px 110px",
  width: "1260px",
  height: "422px",
  boxShadow: "0 0 2px grey",
},
distancecol: {
  fontSize: "20px",
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
                          <TableCell><Button variant="contained" className={classes.buybutton}>BUY
                                  </Button></TableCell>
                      </TableRow>
                      <TableRow>
                          <TableCell className={classes.sellercol}><u>appukttam0(529;100%)</u></TableCell>
                          <TableCell className={classes.paymentcol}>Other online payment</TableCell>
                          <TableCell className={classes.pricecol}>19566.77 INR</TableCell>
                          <TableCell className={classes.limitcol}>100.00-22000.00 INR</TableCell>
                          <TableCell><Button variant="contained" className={classes.buybutton}>BUY
                                  </Button></TableCell>
                      </TableRow>
                      <TableRow>
                          <TableCell className={classes.sellercol}><u>jdboi(5114;100%)</u></TableCell>
                          <TableCell className={classes.paymentcol}>IMPS Bank Transfer India</TableCell>
                          <TableCell className={classes.pricecol}>21366.77 INR</TableCell>
                          <TableCell className={classes.limitcol}>8500.00-50000.00 INR</TableCell>
                          <TableCell><Button variant="contained" className={classes.buybutton}>BUY
                                  </Button></TableCell>
                      </TableRow>
                      <TableRow>
                          <TableCell className={classes.sellercol}><u>chgbyry(4535;100%)</u></TableCell>
                          <TableCell className={classes.paymentcol}>IMPS Bank Transfer India</TableCell>
                          <TableCell className={classes.pricecol}>21966.77 INR</TableCell>
                          <TableCell className={classes.limitcol}>1000.00-25000.00 INR</TableCell>
                          <TableCell><Button variant="contained" className={classes.buybutton}>BUY
                                  </Button></TableCell>
                      </TableRow>
                      <TableRow>
                          <TableCell className={classes.sellercol}><u>chandanbits007(54;100%)</u></TableCell>
                          <TableCell className={classes.paymentcol}>IMPS Bank Transfer India</TableCell>
                          <TableCell className={classes.pricecol}>19366.77 INR</TableCell>
                          <TableCell className={classes.limitcol}>2500.00-20000.00 INR</TableCell>
                          <TableCell><Button variant="contained" className={classes.buybutton}>BUY
                                  </Button></TableCell>
                      </TableRow>
                      <TableRow>
                          <TableCell className={classes.sellercol}><u>appukuttam(5764;100%)</u></TableCell>
                          <TableCell className={classes.paymentcol}>IMPS Bank Transfer India</TableCell>
                          <TableCell className={classes.pricecol}>21766.77 INR</TableCell>
                          <TableCell className={classes.limitcol}>Up to 25000.00 INR</TableCell>
                          <TableCell><Button variant="contained"className={classes.buybutton}>BUY
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
          <div className={classes.tableheading3}>
          <Typography variant="h3" align="right">
            Sell Monero For Cash in India
          </Typography>
        </div>
        <div className={classes.tablecontainer3}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow hover>
                  <TableCell className={classes.tablehead}>Buyer</TableCell>
                  <TableCell className={classes.tablehead}>Distance</TableCell>
                  <TableCell className={classes.tablehead2}>Location</TableCell>
                  <TableCell className={classes.tablehead}>Price/XMR</TableCell>
                  <TableCell className={classes.tablehead2}>Limits</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow hover>
                  <TableCell className={classes.sellercol}>
                    <u>chandanbits007(54;100%)</u>
                  </TableCell>
                  <TableCell className={classes.distancecol}>
                    <u>500.0KM</u>
                  </TableCell>
                  <TableCell className={classes.paymentcol}>
                    <LocationOnIcon
                      fontSize={"small"}
                      className={classes.accounticon}
                    />
                    DELHI
                  </TableCell>
                  <TableCell className={classes.pricecol}>
                    19366.77 INR
                  </TableCell>
                  <TableCell className={classes.limitcol}>
                    250.00-20000.00 INR
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      className={classes.buybutton}
                    >
                      SELL
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell className={classes.sellercol}>
                    <u>appukttam0(529;100%)</u>
                  </TableCell>
                  <TableCell className={classes.distancecol}>
                    <u>450.0KM</u>
                  </TableCell>
                  <TableCell className={classes.paymentcol}>
                    <LocationOnIcon
                      fontSize={"small"}
                      className={classes.accounticon}
                    />
                    MUMBAI
                  </TableCell>
                  <TableCell className={classes.pricecol}>
                    19566.77 INR
                  </TableCell>
                  <TableCell className={classes.limitcol}>
                    100.00-22000.00INR
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      className={classes.buybutton}
                    >
                      SELL
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell className={classes.sellercol}>
                    <u>jdboi(5114;100%)</u>
                  </TableCell>
                  <TableCell className={classes.distancecol}>
                    <u>650.5KM</u>
                  </TableCell>
                  <TableCell className={classes.paymentcol}>
                    <LocationOnIcon
                      fontSize={"small"}
                      className={classes.accounticon}
                    />
                    LUCKNOW
                  </TableCell>
                  <TableCell className={classes.pricecol}>
                    21366.77 INR
                  </TableCell>
                  <TableCell className={classes.limitcol}>
                    800.00-50000.00INR
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      className={classes.buybutton}
                    >
                      SELL
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell className={classes.sellercol}>
                    <u>chgbyry(4535;100%)</u>
                  </TableCell>
                  <TableCell className={classes.distancecol}>
                    <u>530.0KM</u>
                  </TableCell>
                  <TableCell className={classes.paymentcol}>
                    <LocationOnIcon
                      fontSize={"small"}
                      className={classes.accounticon}
                    />
                    JAIPUR
                  </TableCell>
                  <TableCell className={classes.pricecol}>
                    21966.77 INR
                  </TableCell>
                  <TableCell className={classes.limitcol}>
                    900.00-25000.00INR
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      className={classes.buybutton}
                    >
                      SELL
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                    <Button color="primary" className={classes.showbutton}>
                      SHOW MORE...
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
                  </div>
                  <div className={classes.tablebottom}>
          <Typography className={classes.youcanbe}>
            You can be the first one to{" "}
            <Button
              variant="outlined"
              color="primary"
              className={classes.postadbutton}
              startIcon={
                <AddIcon fontSize={"large"} className={classes.addicon} />
              }
            >
              POST AN AD
            </Button>
            in the following categories.
          </Typography>
          <Typography className={classes.buymonero}>
            <u>
              <AddIcon fontSize={"large"} className={classes.addicon} />
              Buy Monero with cash in India
            </u>
          </Typography>
        </div>
        <div className={classes.showingad}>
          <Typography className={classes.showingcontent}>
            <VpnLockIcon fontSize={"large"} />
            Show advertisements in India
            <Button
              variant="container"
              color="primary"
              className={classes.changebutton}
            >
              CHANGE
            </Button>
          </Typography>
        </div>
        <div className={classes.horizontal}>
          <hr></hr>
        </div>
        <div className={classes.bottombody}>
          <Typography variant="h5" className={classes.bottomhead}>
            Protect your right to privacy - buy Monero.
          </Typography>
          <Typography className={classes.bottomcontent}>
            If you are concerned about the invasion of privacy - the best
            cryptocurrency to invest in is XMR. Monero is an untraceable coin
            developed with privacy by design in mind.
          </Typography>
          <Typography className={classes.bottomcontent}>
            Where to buy Monero? LocalMonero is the biggest, most trusted and
            well-established P2P Monero exchange in the XMR community. We have
            no KYC checks - you can simply buy Monero anonymously without ID
            verification with PayPal, credit card, gift card, cash by mail or
            convert bitcoin to Monero - our platform supports any payment
            method.
          </Typography>
          <Typography variant="h5" className={classes.bottomhead}>
            Sell Monero to people worldwide or locally - support the community
            and make money with cryptocurrency.
          </Typography>
          <Typography className={classes.bottomcontent}>
            LocalMonero is the best place to sell XMR - whether it's your mining
            rewards, Monero price arbitrage, or you simply see the value in
            servicing the community. The escrow system and our secure Monero
            wallet provide you with a robust XMR trading experience - so you can
            convert XMR to USD, EUR, AUD, GBP or any other local currency with
            peace of mind.
          </Typography>
        </div>
        <div className={classes.horizontal2}>
          <hr></hr>
        </div>
</div>
  );
}



