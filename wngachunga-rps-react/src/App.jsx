import { useEffect, useState, useRef } from 'react'
import './styling/styles.css'
import PlayerThrow from './components/PlayerThrow';
import ComputerThrow from './components/ComputerThrow';
import Results from './components/Results';
import ScoreBoard from './components/Scoreboard';
import GameReset from "./components/GameReset";

function App() {
  const [playerThrow, setPlayerThrow] = useState(0);
  const [cpuThrow, setCpuThrow] = useState("...");
  const [turn, setTurn] = useState("player");
  const textChoices = ["rock", "paper", "scissors"];
  const cpuThrowRef = useRef(null);

  const [winner, setWinner] = useState(null);
  const [playerScore, setPlayerScore] = useState(0);
  const [cpuScore, setCpuScore] = useState(0);
  const [drawCt, setDrawCt] = useState(0);

  useEffect(() => {
    if (winner === "player") {
      setPlayerScore(prev => prev + 1);
    } else if (winner === "cpu") {
      setCpuScore(prev => prev + 1);
    } else if (winner === "draw") {
      setDrawCt(prev => prev + 1);
    }
  }, [winner]);

  function switchTurn(){
      if (turn === "cpu"){
        setTurn("player");
      } else {
        setTurn("cpu");
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
          <ComputerThrow onCPUSelect={setCpuThrow} curTurn={turn}/>
          <p>CPU Throw: <span ref={cpuThrowRef}>{cpuThrow}</span> </p>
        </div>
      </section>
      <section className="post-game">
        <Results pThrow={textChoices[playerThrow]} cThrow={cpuThrow} onDetermine={setWinner}/>
        <ScoreBoard cpuScore={cpuScore} playerScore={playerScore} drawCt={drawCt} onReset={() => {
          setPlayerScore(0);
          setCpuScore(0);
          setDrawCt(0);
        }}/>
      </section>
    </div>
  )
}

export default App
