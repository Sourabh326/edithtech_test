import React from "react";
import './css/App.css'
import Login from "./components/Login";
import Register from "./components/Register";
import {Switch,Route} from  'react-router-dom'
import Dashbord from "./components/Dashbord";
import ForgetPassword from "./components/ForgetPassword";
const App = () => {
  
  return (
   <>
  
   <Switch>
     <Route exact path="/" component={Register} />
     <Route exact path="/login" component={Login} />
     <Route exact path="/dashbord" component={Dashbord} />
     <Route exact path="/forget_password" component={ForgetPassword} />
   </Switch>
 
   </>
  );
};

export default App;