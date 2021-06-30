import React, { useContext } from "react";
import { AppContext } from "./context";
import {
  Grid,
  Box,
  Card,
  Typography,
  makeStyles,
  Button,
  Switch,
  FormControlLabel,
} from "@material-ui/core";
import { yellow } from "@material-ui/core/colors";
const Styles = makeStyles({
  Button:{
    backgroundColor:yellow,
  }
})

function ColorsDetails() {
  const classes = Styles();
  const { appState, dispatch } = useContext(AppContext);
  const { colorState, themeState } = appState;
  return (
    <Box style={themeState.Theme} className={classes.MainContainer}>
        <Box className={classes.ChangeBtnBox} pb={3}>
        <FormControlLabel
          value="button"
          control={
            <Button
            className={classes.Button}
              color="inherit"
              onClick={() => dispatch.themeDispatch({ type: "SWITCH" })}
            >SWITCH</Button>
          }
          label={themeState.CurrentTheme}
        />
      </Box>
      <Typography
        className={classes.MainHeading}
        align={"center"}
      >{"CARDS"}
      </Typography>
      <Grid className={classes.CardsContainer} container spacing={6}>
        {colorState.colorsData?.map((current, index) => (
          <Grid key={index} item lg={4}>
            <Card className={classes.Cards}>
                          <Box className={classes.CardDetail}>
                <Typography className={classes.CardDetailHead} align={"center"}>
                  {"CARD CONTENT"}
                </Typography>
                <Box className={classes.DetailBox}>
                  <Typography variant={"h5"}>{"color name:"}</Typography>
                  <Typography className={classes.DetailLabel} variant={"h6"}>
                    {current.name}
                  </Typography>
                </Box>
                <Box className={classes.DetailBox}>
                  <Typography variant={"h5"}>{"year:"}</Typography>
                  <Typography className={classes.DetailLabel} variant={"h6"}>
                    {current.year}
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    
    </Box>
  );
}

export default ColorsDetails;