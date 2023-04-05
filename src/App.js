import './App.css';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import {Home} from './pages/Home';
import Announcement from './components/Announcement';
import {Cart} from './pages/Cart';
import {Shop} from './pages/Shop';
import {Checkout} from './pages/Checkout';
import {ShopContextProvider} from './context/shopContext'
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
          <Router>
            <Announcement/>
            <Navbar/>
            <Routes>
            <Route path="/" element={<Home/>}/>
              <Route path="/shop" element={<Shop/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/checkout" element={<Checkout/>}/>
            </Routes>
          </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;

//<Shop/>
//<Routes path="/shop" element={<Shop/>} />

//<ShopContextProvider>
      //<Router>
     //<Announcement/>
      //<Navbar/>
      //<Home/>
      //<Routes path="/shop"  element={<Shop/>}/>
      
      //<Routes path="/cart" element={<Cart/>} />
      //</Router>
      //</ShopContextProvider>