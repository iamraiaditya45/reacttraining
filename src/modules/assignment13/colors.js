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


function ColorsDetails() {
  const { appState, dispatch } = useContext(AppContext);
  const { colorState, themeState } = appState;
  return (
    <Box style={themeState.Theme} className={classes.MainContainer}>
      <Typography
        className={classes.MainHeading}
        align={"center"}
      >{"CARDS"}
      </Typography>
      <Grid className={classes.CardsContainer} container spacing={6}>
        {colorState.colorsData?.map((current, index) => (
          <Grid key={ind} item lg={4}>
            <Card className={classes.Cards}>
              <Box
                className={classes.CardBoxColor}
                style={{ backgroundColor:white }}
              ></Box>
              <Box className={classes.CardDetail}>
                <Typography className={classes.CardDetailHead} align={"center"}>
                  {"CARD DETAILS"}
                </Typography>
                <Box className={classes.DetailBox}>
                  <Typography variant={"h5"}>{"color name:"}</Typography>
                  <Typography className={classes.DetailLabel} variant={"h6"}>
                    {current.name}
                  </Typography>
                </Box>

                <Box className={classes.DetailBox}>
                  <Typography variant={"h5"}>{"color code:"}</Typography>
                  <Typography className={classes.DetailLabel} variant={"h6"}>
                    {current.color}
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
      <Box className={classes.ChangeBtnBox} pb={3}>
        <FormControlLabel
          value="bottom"
          control={
            <Button
            className={classes.ThemeButton}
              color="inherit"
              onClick={() => dispatch.themeDispatch({ type: "ChangeTheme" })}
            >CHANGE THEME</Button>
          }
          label={themeState.CurrentTheme}
        />
      </Box>
    </Box>
  );
}

export default ColorsDetails;