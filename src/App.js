import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Store from './pages/StorePage';
import Contact from './pages/ContactPage';
import Program from './pages/ProgramPage';
import Story from './pages/StoryPage';
import Cart from './pages/CartPage';
import Header from './components/Headder';
import Footer from './components/Footer';
import { ShopContextProvider } from './app/context/shop-context';

function App() {
  return (
    <div className='App'>
      <ShopContextProvider>
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='program' element={<Program/>}/>
          <Route path= 'story' element={<Story/>}/>
          <Route path='store' element={<Store/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='cart' element={<Cart/>}/>
        </Routes>    
        <Footer/>
      </ShopContextProvider>
    </div>
  );
}

export default App;
