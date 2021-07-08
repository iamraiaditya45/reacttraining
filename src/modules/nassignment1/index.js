import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Appbar from './appbar.js';
import Sidebar from './drawer.js';
import Card1 from './card1.js';
import Card2 from './card2.js';

const drawerWidth = 70;
const styles=makeStyles((theme)=>({
    appBar: {
        height:75,
    },
  mainContainer: {
    backgroundColor:"#e5e4e2",
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
}));  
export default function material() {
    const classes=styles()
  return (
      <>
<div className={classes.mainContainer}>
    <Appbar/>
  <Sidebar/>
<div className={classes.card1}>
    <Typography>WorkOrder/A123456</Typography>
</div>
<div className={classes.maincard}>
                  <Card1/>
                  <Card2/>
</div>
</div>
</>

  )};