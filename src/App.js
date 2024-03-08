import Home from "./screen/Home";
import About from "./screen/About"
import Product from "./screen/Product"
import Contact from "./screen/Contact"

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
            <div>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/product' element={<Product/>} />
                    <Route path='/contact' element={<Contact/>} />
                </Routes>
            </div>
        </Router>
    </>
  );
}

export default App;
