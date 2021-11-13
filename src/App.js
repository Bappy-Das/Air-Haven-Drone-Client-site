
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import DashBoard from './pages/DashBoard/DashBoard';
import ExploreProduct from './pages/ExploreProduct/ExploreProduct';
import Home from './pages/Home/Home';
import Login from './pages/Home/Login/Login';
import Register from './pages/Home/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import ProductInfo from './pages/ProductInfo/ProductInfo';
import Footer from './pages/Shared/Footer/Footer';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/allproducts">
              <ExploreProduct></ExploreProduct>
            </Route>
            <PrivateRoute path="/productinfo/:productId">
              <ProductInfo></ProductInfo>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <DashBoard></DashBoard>
            </PrivateRoute>

            <Route path="/*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
