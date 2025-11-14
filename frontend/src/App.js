import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="pt-20">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;