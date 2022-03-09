import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import RegisterPage from "./pages/registerPage/RegisterPage";
import './App.css'
import ProductsPage from "./pages/productsPage/ProductsPage";
import LogInPage from "./pages/loginPage/LogInPage";
import PrivateRoute from "./utils/PrivateRoure";
import UserProfilePage from "./pages/userProfilePage/UserProfilePage";
import { useSelector } from "react-redux";
import AdminPage from "./pages/AdminPage";

const App = () => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;


  return (

    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/products" component={ProductsPage} />
        <Route exact path="/login" component={LogInPage} />

        <Route exact path="/profile"  >
          <PrivateRoute  userInfo={userInfo}>
            <UserProfilePage  userInfo={userInfo} />
          </PrivateRoute>
        </Route>

        <Route exact path="/admin"  >
          <PrivateRoute  isAdmin={true} userInfo={userInfo}>
            <AdminPage  userInfo={userInfo} />
          </PrivateRoute>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
