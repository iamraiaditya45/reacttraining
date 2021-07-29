import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles, withTheme } from "@material-ui/core/styles";

const CssTextField = withStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "orange",
        border: "2px solid yellow",
        borderRadius: "20px",
        backgroundColor: "white",
        height: 45,
      },
      "&:hover fieldset": {
        borderColor: "orange",
      },
    },
  },
})(TextField);
const useStyles = makeStyles((theme) => ({
  maincard: {
    height: 750,
    width: 1400,
    backgroundColor: "#c0c0c0",
    overflow: "auto",
    margin: 150,
    marginTop: 100,
    [theme.breakpoints.down("sm")]: {
      zIndex: theme.zIndex.maincard + 1,
      height: 680,
      width: "360px",
      backgroundColor: "#c0c0c0",
      overflow: "auto",
      margin: 8,
      marginTop: 50,
    },
  },
  card: {
    height: 600,
    width: 1100,
    backgroundColor: "#353839",
    overflow: "auto",
    margin: "70px  150px",
    borderRadius: "40px",
    zIndex: theme.zIndex.maincard + 1,
    [theme.breakpoints.down("sm")]: {
      height: 600,
      width: "340px",
      backgroundColor: "#353839",
      overflow: "auto",
      margin: "30px  10px",
      borderRadius: "30px",
    },
  },
  todo: {
    color: "white",
    fontSize: "40px",
    fontWeight: "bold",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      color: "white",
      fontSize: "28px",
      fontWeight: "bold",
      textAlign: "center",
    },
  },
  innercard1: {
    backgroundColor: "#4e4b4a",
    height: 65,
    width: "70%",
    zIndex: theme.zIndex.card + 1,
    margin: "10px 170px",
    overflow: "auto",
    display: "flex",
    justifyContent: "space-between",
    paddingTop: 8,
    paddingRight: 20,
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "#4e4b4a",
      height: 215,
      width: "300px",
      zIndex: theme.zIndex.card + 1,
      margin: "10px",
      overflow: "auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
    },
  },
  innercard2: {
    backgroundColor: "#4e4b4a",
    height: 70,
    width: "70%",
    zIndex: theme.zIndex.card + 1,
    margin: "30px 170px -27px 170px",
    overflow: "auto",
    display: "flex",
    justifyContent: "space-between",
    paddingTop: 2,
    paddingRight: 20,
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "#4e4b4a",
      height: 70,
      width: "300px",
      zIndex: theme.zIndex.card + 1,
      margin: "10px 0px -8px 10px",
      overflow: "auto",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      paddingTop: 2,
    },
  },
  addbutton: {
    backgroundColor: "orange",
    borderRadius: "25px",
    height: 45,
    width: "110px",
    color: "white",
    marginTop: "10px",
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "orange",
      borderRadius: "25px",
      height: 45,
      width: "110px",
      color: "white",
      marginLeft: "100px",
    },
  },
  tasktext: {
    display: "flex",
    flexDirection: "column",
    paddingRight: "20px",
  },
  task: {
    color: "orange",
    fontSize: "30px",
    fontWeight: "bold",
    marginLeft: "20px",
    [theme.breakpoints.down("sm")]: {
      color: "orange",
      fontSize: "20px",
      fontWeight: "bold",
      marginLeft: "15px",
    },
  },
  strike: {
    color: "grey",
    textDecoration: "line-through",
  },
  task1: {
    color: "white",
    marginLeft: "23px",
    [theme.breakpoints.down("sm")]: {
      color: "white",
      marginLeft: "17px",
      fontSize: "12px",
      width: "100px",
    },
  },
  strike: {
    color: "grey",
    textDecoration: "line-through",
  },
  complete: {
    color: "#87ebd6",
    border: "2px solid #87ebd6",
    borderRadius: "20px",
    fontSize: "10px",
    height: "35px",
    margin: 15,
    backgroundColor: "white",
    [theme.breakpoints.down("sm")]: {
      color: "#87ebd6",
      border: "2px solid #87ebd6",
      borderRadius: "20px",
      fontSize: "8px",
      height: "30px",
      margin: 13,
      backgroundColor: "white",
      width: "50px",
      marginTop: 20,
    },
  },
  delete: {
    color: "red",
    border: "2px solid red",
    borderRadius: "20px",
    fontSize: "10px",
    height: "38px",
    backgroundColor: "white",
    margin: 10,
    [theme.breakpoints.down("sm")]: {
      color: "red",
      border: "2px solid red",
      borderRadius: "20px",
      fontSize: "8px",
      height: "30px",
      marginTop: 20,
      backgroundColor: "white",
      width: "50px",
    },
  },
  input1: {
    padding: "10px 12px",
    display: "inline-block",
    border: "1px solid #ccc",
    borderRadius: "4px",
    outline: "none",
    marginLeft: "15px",
    borderRadius: "15px",
    [theme.breakpoints.down("sm")]: {
      padding: "10px 12px",
      display: "inline-block",
      border: "2px solid orange",
      borderRadius: "4px",
      outline: "none",
      marginLeft: "25px",
      borderRadius: "15px",
      width: 240,
      overflow: "auto",
      marginBottom: "10px",
    },
  },
  input2: {
    padding: "10px 12px",
    display: "inline-block",
    border: "1px solid #ccc",
    borderRadius: "4px",
    outline: "none",
    marginLeft: "15px",
    borderRadius: "15px",
    [theme.breakpoints.down("sm")]: {
      padding: "10px 12px",
      display: "inline-block",
      border: "2px solid orange",
      borderRadius: "4px",
      outline: "none",
      marginLeft: "25px",
      borderRadius: "15px",
      width: 240,
      overflow: "auto",
      marginBottom: "-30px",
    },
  },
  label: {
    color: "white",
    marginLeft: "20px",
    [theme.breakpoints.down("sm")]: {
      color: "white",
      marginLeft: "30px",
    },
  },
  inputbox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
  },
  comde: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [inputList1, setInputList1] = useState("");
  const [inputList2, setInputList2] = useState("");
  const [items, setItems] = useState([]);

  const submit = () => {
    if (!(inputList1 && inputList2)) {
    } else {
      const newItem = { inputList1, inputList2, isComplete: false };
      setItems([...items, newItem]);
      setInputList1("");
      setInputList2("");
    }
  };
  const deleteItem = (id) => {
    const updateditems = items.filter((elem, ind) => {
      return ind != id;
    });
    setItems(updateditems);
  };
  const completeItem = (id) => {
    let arr = items;
    arr[id].isComplete = true;
    setItems([...arr]);
  };

  return (
    <>
      <div className={classes.maincard}>
        <div className={classes.card}>
          <Typography className={classes.todo}>My Todos</Typography>

          <div className={classes.innercard1}>
            <div className={classes.inputbox}>
              <div>
                <label for="fname" className={classes.label}>
                  Name
                </label>
                <br></br>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  value={inputList1}
                  onChange={(e) => setInputList1(e.target.value)}
                  className={classes.input1}
                />
              </div>
              <div>
                <label for="lname" className={classes.label}>
                  Description
                </label>
                <br></br>
                <input
                  type="text"
                  id="lname"
                  name="lastname"
                  defaultValue="test"
                  value={inputList2}
                  onChange={(e) => setInputList2(e.target.value)}
                  className={classes.input2}
                />
              </div>
            </div>
            <Button
              variant="contained"
              type="submit"
              onClick={submit}
              className={classes.addbutton}
            >
              Add todo
            </Button>
          </div>

          {items.map((itemval, ind) => {
            let taskstyle = itemval.isComplete
              ? `${classes.task} ${classes.strike}`
              : `${classes.task}`;
              let taskstyle1=itemval.isComplete
              ? `${classes.task1} ${classes.strike}`
              : `${classes.task1}`;

            return (
              <>
                <div className={classes.innercard2}>
                  <div className={classes.tasktext}>
                    <Typography className={taskstyle} >
                      {itemval.inputList1}
                    </Typography>
                    <Typography className={taskstyle1}>
                      {itemval.inputList2}
                    </Typography>
                  </div>
                  <div className={classes.comde}>
                    {!items[ind].isComplete ? (
                      <Button
                        variant="outlined"
                        onClick={() => completeItem(ind)}
                        className={classes.complete}
                      >
                        Complete
                      </Button>
                    ) : null}

                    <Button
                      variant="outlined"
                      onClick={() => deleteItem(ind)}
                      className={classes.delete}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
