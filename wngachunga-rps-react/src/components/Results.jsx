// todo - widget to allow player to choose throw
import { useEffect, useState, useRef } from "react";
import "../styling/styles.css";
export default function Results({ pThrow, cThrow, onDetermine}){
    const textChoices = ["rock", "paper", "scissors"];
    const [gameRes, setGameRes] = useState(null);
    const [gameResStr, setGameResStr] = useState("...");

    useEffect(() => {
        determineWinner();
    }, [cThrow]);

    useEffect(() => {
        // update gameres to app.jsx and also display to user
        switch (gameRes){
            case "player":
                setGameResStr("player wins!");
                break;
            case "cpu":
                setGameResStr("player loss!");
                break;
            case "draw":
                setGameResStr("it's a draw!");
                break;
        }
        if (gameRes) onDetermine(gameRes);
    }, [gameRes]);

    function determineWinner(){
        if (cThrow == pThrow){
            setGameRes("draw");
        }
        else{
            switch (pThrow){
                case "rock":
                    if (cThrow == "scissors"){
                        setGameRes("player");
                    }
                    if (cThrow == "paper"){
                        setGameRes("cpu");
                    }
                    break;
                case "paper":
                    if (cThrow == "rock"){
                        setGameRes("player");
                    }
                    if (cThrow == "scissors"){
                        setGameRes("cpu");
                    }
                    break;
                case "scissors":
                    if (cThrow == "paper"){
                        setGameRes("player");
                    }
                    if (cThrow == "rock"){
                        setGameRes("cpu");
                    }
                    break;
            }
        }
    }

    return(
        <>
        <div className="cpu-choice-box">
            <h3>Game Result: {gameResStr}</h3>
        </div>
        </>
    )
    
}