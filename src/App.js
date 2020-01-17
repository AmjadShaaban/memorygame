import React from 'react';
import Navbar from './components/Navbar';
import Game from './components/Game';

const App = () => {
  return (
    <div className='container-fluid' style={{ paddingTop: '100px' }}>
      <Navbar />
      <Game />
      <div>rules body</div>
      <div>footer</div>
    </div>
  );
};

export default App;
