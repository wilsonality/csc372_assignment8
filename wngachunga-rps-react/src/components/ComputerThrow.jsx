// todo - widget to allow player to choose throw
import { useEffect, useState, useRef } from "react";
import "../styling/styles.css";
export default function ComputerThrow({ onCPUSelect, curTurn}){
    const imgPaths = ["rock.jpg", "paper.jpg","scissors.jpg"];
    const textChoices = ["rock", "paper", "scissors"];
    const [currentImage, setCurrentImage] = useState("/images/question.jpg");
    const [isHighlighted, setIsHighlighted] = useState(false);
    const cpuChoiceRef = useRef(null);
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        if (curTurn === "cpu"){
            imageCycle().then((result) => {
                cpuSelect();
                console.log("run cpu select");
            });
        }
    }, [curTurn]);

    function imageCycle(){
        console.log("run img cycle");
        return new Promise(resolve => {
            let index = 0;
            setIsHighlighted(true);
                
            let id = setInterval(() => {
                setCurrentImage(`/images/${imgPaths[index]}`);
                (index == 2) ? index = 0 : index++;
            }, 500);

            setTimeout(() => {
                clearInterval(id);
                setIsHighlighted(false);
                resolve('going back to cpuPlay');
            }, 3000);
        })
    }

    function cpuSelect(event){
        // make this the selected button
        let randInt = Math.floor(Math.random() * 3);
        
        onCPUSelect(textChoices[randInt]);
        setCurrentImage(`/images/${imgPaths[randInt]}`);
    }

    return(
        <>
        <div className="cpu-choice-box">
            <h3>cpu plays... </h3>
            <img 
                ref={cpuChoiceRef}
                src={currentImage} 
                alt="CPU Move" 
                className={isHighlighted ? 'highlight' : ''}
            />
        </div>
            
        </>
    )
    
}