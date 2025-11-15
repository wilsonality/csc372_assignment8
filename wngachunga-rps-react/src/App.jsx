import { useState } from 'react'
import './styling/styles.css'
import PlayerThrow from './components/PlayerThrow';
import ComputerThrow from './components/ComputerThrow';

function App() {
  const [playerThrow, setPlayerThrow] = useState(0);
  const [cpuThrow, setCpuThrow] = useState(0);
  const [playerScore, setPlayerScore] = useState(0);
  const [cpuScore, setCpuScore] = useState();
  const textChoices = ["rock", "paper", "scissors"];
  let turn = "cpu";

  function switchTurn(){
      if (turn === "cpu"){
        turn = "player";
      } else {
        turn = "cpu";
      }
  }

  return (
    <div className='app-body'>
      <h1> Rock Paper Scissors!</h1>
      <section className='turns'>
        <div className="player">
          <PlayerThrow onPlayerSelect={setPlayerThrow}/>
          <p>Player Throw: {textChoices[playerThrow]}</p>
          <button id="player-confirm" onClick={switchTurn}> confirm?</button>
        </div>
        <div className="cpu">
          <ComputerThrow onCPUSelect={setCpuThrow} isActive={turn}/>
          <p id='cpu-throw'>CPU Throw: ... </p>
        </div>
        
      </section>
      
    </div>
  )
}

export default App
