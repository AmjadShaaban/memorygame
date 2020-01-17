import React from 'react';

const userStyle = { width: '120px', padding: '7px' };

const GameCards = ({ handleCardClick, characters }) => (
  <>
    {characters.map(char => (
      <div key={char.id} className='card' style={userStyle}>
        <img
          className='card-img-top'
          src={char.src}
          alt=''
          onClick={() => handleCardClick(char)}
          onMouseOver={() => console.log(char.clicked)}
        />
      </div>
    ))}
  </>
);

export default GameCards;
