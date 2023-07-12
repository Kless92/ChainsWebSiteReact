import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Store from './pages/StorePage';
import Contact from './pages/ContactPage';
import Program from './pages/ProgramPage';
import Story from './pages/StoryPage';
import Header from './components/Headder';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='program' element={<Program/>}/>
        <Route path= 'story' element={<Story/>}/>
        <Route path='store' element={<Store/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>    
      <Footer/>
    </div>
  );
}

export default App;
