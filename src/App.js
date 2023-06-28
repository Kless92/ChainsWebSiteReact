import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Store from './pages/Store';
import Contact from './pages/Contact';
import Header from './components/Headder';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='store' element={<Store/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>    
    </div>
  );
}

export default App;
