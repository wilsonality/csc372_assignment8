// todo - widget to allow player to choose throw
import { useEffect, useState, useRef } from "react";
import "../styling/styles.css";
import GameReset from "./GameReset";

export default function ScoreBoard({ cpuScore, playerScore, drawCt, onReset}){
    return(
        <>
            <p>Player : {playerScore}</p>
            <p>CPU : {cpuScore}</p>
            <p>Draws : {drawCt}</p>
            <GameReset onReset={onReset}/>
        </>
    )
    
}
