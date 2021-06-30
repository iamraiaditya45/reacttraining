import React, {useReducer} from "react";


import ColorsDetails from "./colors";
import {
  initialColorState,
  initialThemeState,
  colorReducer,
  themeReducer,
} from "./reducers";
import { AppContext } from "./context";

function Assignment12() {
  const [colorState, colorDispatch] = useReducer(
    colorReducer,
    initialColorState
  );
  const [themeState, themeDispatch] = useReducer(
    themeReducer,
    initialThemeState
  );
  return (
    <AppContext.Provider
      value={{
        appState: { colorState, themeState },
        dispatch: { colorDispatch, themeDispatch },
      }}
    >
      <ColorsDetails />
    </AppContext.Provider>
  );
}

export default Assignment12;