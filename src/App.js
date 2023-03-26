import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import { useState } from 'react';
import UserLayout from './components/userLayout';

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
      };
  return (
    <div className="App ">
      <UserLayout isScrolled={isScrolled} />
    </div>
  );
}

export default App;
