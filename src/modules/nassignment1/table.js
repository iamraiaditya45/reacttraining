import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import TablePagination from '@material-ui/core/TablePagination';
const drawerWidth = 70;

const styles=makeStyles((theme)=>({
    
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
    check:{
      color:"#4682B4"
    },
    bolder:{
      color:"black",
      fontWeight:"bold",
      marginTop:"-15px",
      overflow:"auto",
      backgroundColor:"#f4f0ec"
  },
  
    
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
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow className={classes.table}>
         <TableCell className={classes.bolder}> <Checkbox 
         defaultChecked color="green"className={classes.check}></Checkbox></TableCell>
            <TableCell className={classes.bolder} align="right">Dessert </TableCell>
            <TableCell className={classes.bolder}align="right">id</TableCell>
            <TableCell className={classes.bolder} align="right">Calories</TableCell>
            <TableCell className={classes.bolder}align="right">Fat&nbsp;(g)</TableCell>
            <TableCell className={classes.bolder}align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell className={classes.bolder}align="right">Protein&nbsp;(g)</TableCell>
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
</>

  )};