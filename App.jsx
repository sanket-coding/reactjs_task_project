import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Your components
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Task22 from './pages/Task22';
import Task23 from './pages/Task23';
import Task24 from './pages/Task24';
import Task25 from './pages/Task25';
import Task26 from './pages/Task26';
 import ProductDetail from './pages/ProductDetail';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
 import Ecomm from './pages/Ecomm';
import EachMovie from './pages/EachMovie';
import ToDo from './pages/ToDo';
import Form from './pages/Form';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
function App() {
  return (
    <Router> {/* This is fine because it's imported as alias */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task22" element={<Task22 />} />
        <Route path="/task23" element={<Task23 />} />
        <Route path="/task24" element={<Task24 />} />
        <Route path="/task25" element={<Task25 />} />
        <Route path="/task26" element={<Task26 />} />
        <Route path="/ecomm" element={<Ecomm />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/cart" element={<Cart />} />
      
        <Route path="/eachmovie/:id" element={<EachMovie />} />
        <Route path="/form" element={<Form />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
         <Route path="/product-detail/:id" element={<ProductDetail />} />


      </Routes>
    </Router>
  );
}

export default App;
