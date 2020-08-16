import React from 'react';
import "./App.css";
import Ingredients from '../../components/ReactHooksApp/Ingredients/Ingredients';
import Auth from "../../components/ReactHooksApp/Auth";
import AuthContextProvider from "./context/auth-context";
import { AuthContext } from "./context/auth-context";

const App = props => {
  // return <Auth />;
  return <AuthContextProvider><Auth /></AuthContextProvider>
};

export default App;
