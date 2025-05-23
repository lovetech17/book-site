
import './App.css';
import FooterPage from './components/FooterPage';
import HomePage from './components/HomePage';
import Menubar from './components/Menubar';

function App() {
  return (
    <div>
      <img src='./home.jpg'alt='상단배경' width = '100%' />
      <Menubar/>
    
      <FooterPage/>
  </div>
  );
}

export default App;
