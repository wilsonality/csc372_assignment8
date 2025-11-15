import { useEffect, useState, useRef } from 'react'
import './styling/styles.css'
import PlayerThrow from './components/PlayerThrow';
import ComputerThrow from './components/ComputerThrow';
import Results from './components/Results';

function App() {
  const [playerThrow, setPlayerThrow] = useState(0);
  const [cpuThrow, setCpuThrow] = useState("...");
  const [playerScore, setPlayerScore] = useState(0);
  const [cpuScore, setCpuScore] = useState();
  const [turn, setTurn] = useState("player");
  const textChoices = ["rock", "paper", "scissors"];
  const cpuThrowRef = useRef(null);

  function switchTurn(){
      if (turn === "cpu"){
        setTurn("player");
      } else {
        setTurn("cpu");
      }
      console.log("switch turn to : " + turn);
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
          <ComputerThrow onCPUSelect={setCpuThrow} curTurn={turn}/>
          <p>CPU Throw: <span ref={cpuThrowRef}>{cpuThrow}</span> </p>
        </div>
      </section>
      <section className="post-game">
        <Results pThrow={playerThrow} cThrow={cpuThrow}/>
      </section>
    </div>
  )
}

export default App
