import React from 'react';
import { makeStyles, useTheme, withTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CreateIcon from '@material-ui/icons/Create';

const drawerWidth = 70;

const styles=makeStyles((theme)=>({

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

editbutton:{
  color:"#007bb8",
  margin:15,
  marginLeft:5,
  borderColor:"#007bb8",
  height:"40px",
},

hr:{
  marginLeft:"10px",
  width:"98%",
  marginTop:10
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

export default function material() {
  
    const classes=styles()
   
  return (
      <>
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
                  </>
                  )};