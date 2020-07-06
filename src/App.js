import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Fooooter.js';
import Main from './components/Main.js';
import './components/Navbar.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
