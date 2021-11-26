import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./components/Home/Home/Home";
import Header from './components/Shared/Header/Header';
import Login from './components/Login/Login/Login';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Footer from './components/Shared/Footer/Footer';
import Brands from './components/Brands/Brands';
import Products from './components/Products/Products';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Purchase from './components/Purchase/Purchase';

function App() {
  return (
    <div className="App min-vh-100">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/brands">
              <Brands></Brands>
            </Route>
            <Route path="/products">
              <Products></Products>
            </Route>
            <PrivateRoute path="/product/:productId">
              <Purchase></Purchase>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="*">
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
