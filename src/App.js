import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import MyOrders from './components/MyOrders/MyOrders';
import ManageOrders from './components/ManageOrders/ManageOrders';
import AddServices from './components/AddServices/AddServices';
import Footer from './components/Footer/Footer';
import AuthProvider from './context/AuthProvider';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import UpdateOrders from './components/UpdateOrders/UpdateOrders';
import NotFound from './components/NotFound/NotFound';
import Customer from './components/Customer/Customer';


function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>

            <Route path='/services'>
              <Services></Services>
            </Route>
            <Route path='/customer'>
              <Customer></Customer>
            </Route>
            <Route path='/myOrders'>
              <MyOrders></MyOrders>
            </Route>
            <Route path='/manageOrders'>
              <ManageOrders></ManageOrders>
            </Route>

            <PrivateRoute exact path='/servicedetails/:serviceId'>
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path='/addServices'>
              <AddServices></AddServices>
            </Route>
            <Route path="/orders/update/:productId">
              <UpdateOrders></UpdateOrders>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
