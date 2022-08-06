import Menu from "./components/Menu/Menu";
import SecondaryMenu from "./components/SecondaryMenu/SecondaryMenu";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import AuthScreen from "./screens/AuthScreen";
import Footer from './components/Footer/Footer';
import EmptyCart from './components/Emptycart/EmptyCart';
// import "antd/dist/antd.css"
import './App.css';
import MyOrders from "./components/MyOrders/MyOrders";
import ProductScreen from "./screens/ProductScreen";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const location = window.location.href
  return (
    <div className="App">
      {
        location.includes("auth") ? <></> : 
      <><Menu /><SecondaryMenu /></>
      }
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="cart" element={<CartScreen />} />
        <Route path="cart" element={<EmptyCart />} />
        <Route path="order" element={<MyOrders />} />
        <Route path="product" element={<ProductScreen />} />
        <Route path="auth" element={<AuthScreen />}>
          <Route path=":type" element={<AuthScreen />} />
        </Route>
      </Routes>
      {
        location.includes("auth") ? <></> : 
        <Footer />
      }
    
    </div>
  );
}

export default App;
