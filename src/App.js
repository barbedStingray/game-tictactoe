import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {


  let [playerSymbol, setPlayerSymbol] = useState('X');

  let [gameSpaces, setGameSpaces] = useState({
    topLeft: null,
    topMiddle: null,
    topRight: null,
    middleLeft: null,
    middleMiddle: null,
    middleRight: null,
    bottomLeft: null,
    bottomMiddle: null,
    bottomRight: null
  });

  const winningCombinations = [
    ['topLeft', 'topMiddle', 'topRight'],
    ['middleLeft', 'middleMiddle', 'middleRight'],
    ['bottomLeft', 'bottomMiddle', 'bottomRight'],
    ['topLeft', 'middleLeft', 'bottomLeft'],
    ['topMiddle', 'middleMiddle', 'bottomMiddle'],
    ['topRight', 'middleRight', 'bottomRight'],
    ['topLeft', 'middleMiddle', 'bottomRight'],
    ['topRight', 'middleMiddle', 'bottomLeft']
  ];

  function checkForWinner(spaces) {
    console.log('spaces', spaces);
    for (let combination of winningCombinations) {
      // console.log('combination', combination);
      const [a, b, c] = combination;
      // console.log('a', a);
      // console.log('a, b, c', a, b, c);
      // console.log('space a, b, c', spaces[a], spaces[b], spaces[c]);
      if (spaces[a] && spaces[a] === spaces[b] && spaces[a] === spaces[c]) {
        return spaces[a];
      }
    }
    return null;
  }


  function takeATurn(square) {
    console.log('taking a turn');
    const newGameSpaces = { ...gameSpaces };

    // valid space to play check
    if (newGameSpaces[square] !== null) {
      console.log('this space is taken!');
      alert('This square is taken!');
      return;
    } else {

      newGameSpaces[square] = playerSymbol;
      console.log('square affected', gameSpaces[square]);
      setGameSpaces(newGameSpaces);

      const winner = checkForWinner(newGameSpaces);
      if (winner !== null) {
        // alert(`The ${winner}'s have it!`);
        return;
      }
    }
    setPlayerSymbol(playerSymbol === 'X' ? 'O' : 'X');
  }


  return (
    <div className="gameTicTacToe">
      <div className='turnDisplay'>
        <p>Player 1's turn</p>
      </div>
      <div className='gameBoard'>
        <div className='topSquares'>
          <div onClick={() => takeATurn('topLeft')} className='square topLeft'>{gameSpaces.topLeft}</div>
          <div onClick={() => takeATurn('topMiddle')} className='square topMiddle'>{gameSpaces.topMiddle}</div>
          <div onClick={() => takeATurn('topRight')} className='square topRight'>{gameSpaces.topRight}</div>
        </div>
        <div className='middleSquares'>
          <div onClick={() => takeATurn('middleLeft')} className='square middleLeft'>{gameSpaces.middleLeft}</div>
          <div onClick={() => takeATurn('middleMiddle')} className='square middleMiddle'>{gameSpaces.middleMiddle}</div>
          <div onClick={() => takeATurn('middleRight')} className='square middleRight'>{gameSpaces.middleRight}</div>
        </div>
        <div className='bottomSquares'>
          <div onClick={() => takeATurn('bottomLeft')} className='square bottomLeft'>{gameSpaces.bottomLeft}</div>
          <div onClick={() => takeATurn('bottomMiddle')} className='square bottomMiddle'>{gameSpaces.bottomMiddle}</div>
          <div onClick={() => takeATurn('bottomRight')} className='square bottomRight'>{gameSpaces.bottomRight}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
