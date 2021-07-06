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
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import CreateIcon from '@material-ui/icons/Create';
import AddIcon from '@material-ui/icons/Add';
import TuneRoundedIcon from '@material-ui/icons/TuneRounded';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import { palette } from '@material-ui/system';

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
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
        backgroundColor:"#00416a"
      },
      drawerContainer: {
        overflow: 'auto',
      },
      icon:{
          color:"white",
          fontSize:"37px"
      },
      menuItems:{
        backgroundColor:'#545aa7',
        padding:'15px',
        marginTop:'-8px',
        height:58,
      },
      menuItem:{
        backgroundColor:'#436b95',
        padding:'15px',
        marginTop:'-8px',
        height:58,
      },
      circle:{
          backgroundColor:'#71a6d2',
          height:"58px",
          width:"4px",
          marginLeft:"-15px",
          marginRight:"13px"
      },
      circle2:{
        backgroundColor:'#dcdcdc',
        height:"38px",
        width:"2px",
        marginLeft:"15px",
        marginTop:"-5px"
    },
      card1:{
          margin:drawerWidth-5.57,
          backgroundColor:"white",
          height:28.07,
          width:"94.85%",
          padding:"15px",
          marginBottom:5,
          boxShadow:"0 0 4px grey",
      },
      maincard:{
          display:"flex",
          flexDirection:"row",
          justifyContent:"spaceBetween",
      },
      card2:{
          height:820,
          width:530,
          backgroundColor:"white",
          margin:5,
          boxShadow:"0 0 4px grey",
          marginLeft:drawerWidth+9,
          padding:10
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
    hr:{
        marginLeft:"10px",
        width:"98%",
        marginTop:10
    },
    hr1:{
        marginLeft:"10px",
        width:"98%",
        marginTop:8,
        marginBottom:26,
    },
    light:{
        color:"grey"
        
    },
    bold:{
        color:"black",
        fontWeight:"bold",
        marginTop:"-15px",
        overflow:"auto"
    },
    cardbtngreen:{
        backgroundColor:"#138808",
        marginLeft:"150px",
        borderRadius:"20px",
        color:"white",
        fontWeight:"bold",
        width:180,
        padding:"10px",
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
    }
    
}));
function createData(Checkbox ,name,id, calories, fat, carbs, protein) {
    return {Checkbox, name,id, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData( 1,<Checkbox/>, 159, 6.0, 24, 4.0,8),
    createData(2,<Checkbox/>, 237, 9.0, 37, 4.3,9),
    createData(3,<Checkbox/>, 262, 16.0, 24, 6.0,10),
    createData(4,<Checkbox/>, 305, 3.7, 67, 4.3,11),
    createData(4,<Checkbox/>, 305, 3.7, 67, 4.3,11),
    createData(4,<Checkbox/>, 305, 3.7, 67, 4.3,11),
    createData(4,<Checkbox/>, 305, 3.7, 67, 4.3,11),

  ];
  
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
            <ListItem className={classes.menuItems}>
            <HomeIcon className={classes.icon}/>
            </ListItem>
          </List>
          <List>
            <ListItem>
            <MailIcon className={classes.icon}/>
            </ListItem>
            <ListItem className={classes.menuItem}>
                <div className={classes.circle}></div>
            <NotificationsNoneIcon className={classes.icon}/>
            </ListItem>
            <ListItem>
            <SearchIcon className={classes.icon}/>
            </ListItem>
            <ListItem>
            <ShoppingCartIcon className={classes.icon}/>
            </ListItem>
          </List>
          <List>
            <ListItem>
            <MenuIcon className={classes.icon}/>
            </ListItem>
          </List>
        </div>
      </Drawer>
<div className={classes.card1}>
    <Typography>WorkOrder/A123456</Typography>
</div>

<div className={classes.maincard}>
    <div className={classes.card2}>
    <Typography variant="h5">Work Order Detail</Typography>
    <Button
              variant="outlined"
              className={classes.editbutton}
              startIcon={
                <CreateIcon fontSize={"large"} className={classes.addicon} />
              }
            >
              EDIT
            </Button> 
            <hr className={classes.hr}/>
            <List>
            <ListItem >
            <Typography className={classes.light}>Work Order Number</Typography>
            <Button variant="contained"className={classes.cardbtngreen} >Search</Button>
            </ListItem>
            <ListItem >
            <Typography className={classes.bold}>A123456</Typography>
            </ListItem>
            <ListItem>
            <Typography className={classes.light}>Warehouse</Typography>
            </ListItem>
            <ListItem>
            <Typography className={classes.bold}>Warehouse007</Typography>
            </ListItem>
            <ListItem >
                <Typography className={classes.light}>Requested By</Typography>
            </ListItem>
            <ListItem >
                <Typography className={classes.bold}>Cutting</Typography>
            </ListItem>
            <ListItem>
            <Typography className={classes.light}>Customer</Typography>
            </ListItem>
            <ListItem>
            <Typography className={classes.bold}>Addidas</Typography>
            </ListItem>
            <ListItem>
            <Typography className={classes.light}>Due Date</Typography>
            </ListItem>
            <ListItem>
            <Typography className={classes.bold}>20-10-20</Typography>
            </ListItem>
            <ListItem>
            <Typography className={classes.light}>Qty</Typography>
            </ListItem>
            <ListItem>
            <Typography className={classes.bold}>Not Avl</Typography>
            </ListItem>
            <ListItem>
            <Typography className={classes.light}>UOM</Typography>
            </ListItem>
            <ListItem>
            <Typography className={classes.bold}>Yard,Bag</Typography>
            </ListItem>
            <ListItem>
            <Typography className={classes.light}>Remarks</Typography>
            </ListItem>
            <ListItem>
            <Typography className={classes.bold}>xxxxx sssss xxxxx</Typography>
            </ListItem>
          </List>
          <List>
              <ListItem>
          <Typography className={classes.xlight}>Modified By:XYZ</Typography>
            </ListItem>
            <ListItem>
            <Typography className={classes.xlight}>Date Modified:20/10/20</Typography>
            </ListItem>
            <ListItem>
            <Typography className={classes.xlight}>Created by:yang</Typography>
            </ListItem>
            <ListItem>
            <Typography className={classes.xlight}>Date Created:21-10-21</Typography>
            </ListItem>
          </List>
                  </div>
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
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
         <TableCell> <Checkbox defaultChecked color="primary"></Checkbox></TableCell>
            <TableCell align="right">Dessert </TableCell>
            <TableCell align="right">id</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.Checkbox}</TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
    </div>
            </div>
    </div>
</div>
</>

  )};