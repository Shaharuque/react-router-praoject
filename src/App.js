import logo from './logo.svg';
import './App.css';
//for routing purpose

import Home from './components/Home/Home';
import Products from './components/Products/Products';
import About from './components/About/About';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/Notfound/NotFound';
import Header from './components/Header/Header';
function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        {/*if kono path match na korley NotFound componenet show korbo*/}
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
