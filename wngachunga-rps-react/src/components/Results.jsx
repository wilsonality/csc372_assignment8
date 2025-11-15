// todo - widget to allow player to choose throw
import { useEffect, useState, useRef } from "react";
import "../styling/styles.css";
export default function Results({ pThrow, cThrow}){
    const textChoices = ["rock", "paper", "scissors"];
    const [gameRes, setGameRes] = useState(null);


    function determineWinner(){
        if (cThrow == pThrow){
            setGameRes("it's a draw!");
        }
        else{
            switch (pThrow){
                case "rock":
                    if (cThrow == "scissors"){
                        setGameRes("player win!");
                    }
                    if (cThrow == "paper"){
                        setGameRes("player loss!");
                    }
                    break;
                case "paper":
                    if (cThrow == "rock"){
                        setGameRes("player win!");
                    }
                    if (cThrow == "scissors"){
                        setGameRes("player loss!");
                    }
                    break;
                case "scissors":
                    if (cThrow == "paper"){
                        setGameRes("player win!");
                    }
                    if (cThrow == "rock"){
                        setGameRes("player loss!");
                    }
                    break;
            }
        }
    }

    return(
        <>
        <div className="cpu-choice-box">
            <h3>Game Result: {gameRes}</h3>
        </div>
        </>
    )
    
}