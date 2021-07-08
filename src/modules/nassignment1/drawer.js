import Drawer from '@material-ui/core/Drawer';
import HomeIcon from '@material-ui/icons/Home';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles, useTheme, withTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
const drawerWidth = 70;

const styles=makeStyles((theme)=>({
  
    appBar: {
        height:75,
    },
  mainContainer: {
    backgroundColor:"red",
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
}));
export default function material() {

    const classes=styles()
   
  return (
      <>
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
          </List><List>
            <ListItem className={classes.menuItem}>
                <div className={classes.circle}></div>
            <NotificationsNoneIcon className={classes.icon}/>
            </ListItem>
          </List><List>
            <ListItem>
            <SearchIcon className={classes.icon}/>
            </ListItem>
          </List><List>
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
      </>
     )};