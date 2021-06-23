import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route ,Switch} from "react-router-dom";
import { useHistory} from "react-router-dom";
import Login from "./login";

function Assignment9() {
  return (
    <div>
      <Login />
    </div>
  );
}

export default Assignment9;