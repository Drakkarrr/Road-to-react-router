import { Routes, Route } from "react-router-dom";
import './App.css';
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import NotFound from "./components/NotFound";
import Products from "./components/Products";
import FeaturedProducts from "./components/FeaturedProducts";
import NewProducts from "./components/NewProducts";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/order-summary" element={<OrderSummary/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/products" element={<Products/> }>
          <Route index element={<FeaturedProducts/>} />
          <Route path="featured" element={<FeaturedProducts/>} />
          <Route path="new" element={<NewProducts/>} />
        </Route>
        <Route path="/users" element={<Users/>} />
        <Route path="*" element={<NotFound/> } />
     </Routes>
    </div>
  );
}

export default App;
