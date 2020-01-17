import React from 'react';

const Jumbotron = ({ score, topScore }) => {
  return (
    <div className='jumbotron jumbotron-fluid'>
      <div className='container'>
        <h1 className='display-4'>Clicky Game!</h1>
        <h2 className='display-6'>
          Score: {score}|Top Score: {topScore}
        </h2>
        <p className='lead'>
          Click on an image to earn points, but don't click on any image more
          than once!
        </p>
      </div>
    </div>
  );
};

export default Jumbotron;
