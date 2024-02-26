import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './register/Login';
import Singup from './register/Singup';
import Home from './comonents/Home';
import Productdeatiles from './Products/Proeductdeatiles'
import AddItems from './comonents/Addproduct';
import Addcategory from './comonents/Addcategory';
import Buynow from './comonents/Buynow';
import { Edit } from './comonents/Edit';
import Cart from './comonents/Cart';

function App() {
  const userData = localStorage.getItem('userData')
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={userData ? <Home /> : <Login />} />
          <Route path="/singup" element={userData ? <Home /> : <Singup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product-details/:id" element={<Productdeatiles />} />
          <Route path="/add-products" element={<AddItems />} />
          <Route path="/add-category" element={<Addcategory />} />
          <Route path="/buy-now" element={<Buynow />} />
          <Route path="/Edit/:id" element={<Edit />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
