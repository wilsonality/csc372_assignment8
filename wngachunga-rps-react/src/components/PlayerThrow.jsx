// todo - widget to allow player to choose throw
import { useEffect, useState, useRef } from "react";
import "../styling/styles.css";
export default function PlayerThrow({ onPlayerSelect }){
    // wngachunga-rps-react/public/+
    const imgPaths = ["rock.jpg", "paper.jpg","scissors.jpg"];
    const textChoices = ["rock", "paper", "scissors"];
    const imgRefs = useRef([]);

    useEffect(() => {
        imgRefs.current.forEach((img) => {
            if (img) {
                img.addEventListener('click', playerSelect);
            }
        });

        return () => {
            imgRefs.current.forEach((img) => {
                if (img) {
                    img.removeEventListener('click', playerSelect);
                }
            });
        };
    }, []);

    function playerSelect(event){
        imgRefs.current.forEach((img) => {
            if (img) img.classList.remove('selected');
        });
        event.currentTarget.classList.add('selected');
        
        const pChoice = imgPaths.indexOf(event.currentTarget.src.split('/').pop());
        onPlayerSelect(pChoice);
    }

    return(
        <>
            <h3>Choose Play</h3>
            <div className="player-choice-box">
                {imgPaths.map((imgPath, i) => (
                    <img ref={el => imgRefs.current[i] = el} src={`/images/${imgPath}`} className="p-choice" alt={textChoices[i]} key={i} />
                ))}
            </div>
        </>
    )
    
}
