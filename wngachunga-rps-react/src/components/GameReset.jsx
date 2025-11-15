// todo - button update the states of user scores, stored in app

// todo - widget to allow player to choose throw
import { useEffect, useState, useRef } from "react";
import "../styling/styles.css";
export default function GameReset({ onReset }){
    return(
        <button onClick={onReset}>reset</button>
    )
    
}
