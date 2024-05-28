import logo from './logo.svg';
import './App.css';

function App() {

  // what do I need
  // players / 2
  // click on divs
  // 



  return (
    <div className="gameTicTacToe">
      <div className='gameBoard'>
        <div className='topSquares'>
          <div className='square topLeft'></div>
          <div className='square topMiddle'></div>
          <div className='square topRight'></div>
        </div>
        <div className='middleSquares'>
          <div className='square middleLeft'></div>
          <div className='square middleMiddle'></div>
          <div className='square middleRight'></div>
        </div>
        <div className='bottomSquares'>
          <div className='square bottomLeft'></div>
          <div className='square bottomMiddle'></div>
          <div className='square bottomRight'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
