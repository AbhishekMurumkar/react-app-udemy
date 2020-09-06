import React,{useContext} from 'react';
import "./App.css";
import Ingredients from '../../components/ReactHooksApp/Ingredients/Ingredients';
import Auth from "../../components/ReactHooksApp/Auth";
import { AuthContext } from "./context/auth-context";

const App = props => {
  // return <Auth />;
  const authContext = useContext(AuthContext);
  let content = <Auth/>;
  if(authContext.isAuth){
    content=<Ingredients />;
  }
  console.log(authContext);
  return content;
};

export default App;
