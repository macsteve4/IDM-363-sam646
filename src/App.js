import React from 'react';
import './App.css';
import Header  from './components/Header/header';
import Footer  from './components/Footer/footer';
import RamenCard  from './components/RamenCard/ramencard';
import Categories  from './components/Categories/categories';


function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <RamenCard />
      <Footer />
    </div>
  );
}

export default App;