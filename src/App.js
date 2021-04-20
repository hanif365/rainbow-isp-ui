import React, { createContext, useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Admin from "./components/AdminPanel/Admin/Admin";
import Order from "./components/UserCorner/Order/Order";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Login from "./components/Login/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import OrderList from "./components/AdminPanel/OrderList/OrderList";
import AddService from "./components/AdminPanel/AddService/AddService";
import MakeAdmin from "./components/AdminPanel/MakeAdmin/MakeAdmin";
import ManageService from "./components/AdminPanel/ManageService/ManageService";
import Orders from "./components/UserCorner/Orders/Orders";
import OrderLists from "./components/UserCorner/BookingLists/BookingLists";
import Review from "./components/UserCorner/Review/Review";
import BookingLists from "./components/UserCorner/BookingLists/BookingLists";


export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/orderlist">
            <OrderList></OrderList>
          </Route>
          <Route path="/addservice">
            <AddService></AddService>
          </Route>
          <Route path="/makeadmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <PrivateRoute path="/manageservices">
            <ManageService></ManageService>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          {/* <PrivateRoute path="/service/:serviceId">
            <Order></Order>
          </PrivateRoute> */}
          <PrivateRoute path="/service/:serviceId">
            <Orders></Orders>
          </PrivateRoute>
          {/* <Route path="/order">
            <Order></Order>
          </Route> */}
          <PrivateRoute path="/orders">
            <Orders></Orders>
          </PrivateRoute>
          <Route path="/bookinglists">
            <BookingLists></BookingLists>
          </Route>
          <Route path="/addreview">
            <Review></Review>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider >
  );
}

export default App;
