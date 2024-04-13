import React, { useState, useEffect } from "react";
import "../Style/slot.css";

function SlotView(){

    const picks = [
                "../src/assets/bob.png",
                "../src/assets/garry.jpg", 
                "../src/assets/patrick.jpg", 
                "../src/assets/squid.png",
                "../src/assets/A.png",
                "../src/assets/K.png",
                "../src/assets/Q.png",
                "../src/assets/J.png",
            ];

    const [refresh, setRefresh] = useState(false);
    const [bet, setBet] = useState(2);
    const [balance, setBalance] = useState(100000);
    const [board, setBoard] = useState([]);
    const [showWinning, setShowWinning] = useState(false);
    const [spinClicked, setSpinClicked] = useState(false);

    useEffect(() => {
        const newBoard = [];
        for (let i = 0; i < 5; i++) {
            const row = [];
            for (let j = 0; j < 3; j++) {
                row.push(picks[Math.floor(Math.random() * picks.length)]);
            }
            newBoard.push(row);
        }
        setBoard(newBoard);

        checkWinning(newBoard);
        
        if (showWinning) {
            const timeoutId = setTimeout(() => {
                setShowWinning(false);
            }, 1000);

            return () => clearTimeout(timeoutId);
        }

    }, [refresh]);

    function checkWinning(newBoard){

        //straight lines
        if(newBoard[0][0] === newBoard[1][0] && newBoard[1][0] === newBoard[2][0] && newBoard[2][0] === newBoard[3][0] && newBoard[3][0] === newBoard[4][0]){
            if(newBoard[0][0] === "../src/assets/A.png" || newBoard[0][0] === "../src/assets/K.png" || newBoard[0][0] === "../src/assets/Q.png" || newBoard[0][0] === "../src/assets/J.png"){
                setBalance(prevBalance => prevBalance + (bet*20));
                setShowWinning(true);
            }else if(newBoard[0][0] === "../src/assets/bob.png"){
                setBalance(prevBalance => prevBalance + (bet*1000));
                setShowWinning(true);
            }else if(newBoard[0][0] === "../src/assets/garry.png"){
                setBalance(prevBalance => prevBalance + (bet*120));
                setShowWinning(true);
            }else if(newBoard[0][0] === "../src/assets/patrick.jpg"){
                setBalance(prevBalance => prevBalance + (bet*320));
                setShowWinning(true);
            }else if(newBoard[0][0] === "../src/assets/squid.png"){
                setBalance(prevBalance => prevBalance + (bet*120));
                setShowWinning(true);
            }
        }else if(newBoard[0][0] === newBoard[1][0] && newBoard[1][0] === newBoard[2][0] && newBoard[2][0] === newBoard[3][0]){
            if(newBoard[0][0] === "../src/assets/A.png" || newBoard[0][0] === "../src/assets/K.png" || newBoard[0][0] === "../src/assets/Q.png" || newBoard[0][0] === "../src/assets/J.png"){
                setBalance(prevBalance => prevBalance + (bet*5));
                setShowWinning(true);
            }else if(newBoard[0][0] === "../src/assets/bob.png"){
                setBalance(prevBalance => prevBalance + (bet*200));
                setShowWinning(true);
            }else if(newBoard[0][0] === "../src/assets/garry.png"){
                setBalance(prevBalance => prevBalance + (bet*16));
                setShowWinning(true);
            }else if(newBoard[0][0] === "../src/assets/patrick.jpg"){
                setBalance(prevBalance => prevBalance + (bet*60));
                setShowWinning(true);
            }else if(newBoard[0][0] === "../src/assets/squid.png"){
                setBalance(prevBalance => prevBalance + (bet*16));
                setShowWinning(true);
            }
        }else if(newBoard[0][0] === newBoard[1][0] && newBoard[1][0] === newBoard[2][0]){
            if(newBoard[0][0] === "../src/assets/A.png" || newBoard[0][0] === "../src/assets/K.png" || newBoard[0][0] === "../src/assets/Q.png" || newBoard[0][0] === "../src/assets/J.png"){
                setBalance(prevBalance => prevBalance + (bet));
                setShowWinning(true);
            }else if(newBoard[0][0] === "../src/assets/bob.png"){
                setBalance(prevBalance => prevBalance + (bet*20));
                setShowWinning(true);
            }else if(newBoard[0][0] === "../src/assets/garry.png"){
                setBalance(prevBalance => prevBalance + (bet*4));
                setShowWinning(true);
            }else if(newBoard[0][0] === "../src/assets/patrick.jpg"){
                setBalance(prevBalance => prevBalance + (bet*6));
                setShowWinning(true);
            }else if(newBoard[0][0] === "../src/assets/squid.png"){
                setBalance(prevBalance => prevBalance + (bet*4));
                setShowWinning(true);
            }
        }

        if(newBoard[0][1] === newBoard[1][1] && newBoard[1][1] === newBoard[2][1] && newBoard[2][1] === newBoard[3][1] && newBoard[3][1] === newBoard[4][1]){
            if(newBoard[0][1] === "../src/assets/A.png" || newBoard[0][1] === "../src/assets/K.png" || newBoard[0][1] === "../src/assets/Q.png" || newBoard[0][1] === "../src/assets/J.png"){
                setBalance(prevBalance => prevBalance + (bet*20));
                setShowWinning(true);
            }else if(newBoard[0][1] === "../src/assets/bob.png"){
                setBalance(prevBalance => prevBalance + (bet*1000));
                setShowWinning(true);
            }else if(newBoard[0][1] === "../src/assets/garry.png"){
                setBalance(prevBalance => prevBalance + (bet*120));
                setShowWinning(true);
            }else if(newBoard[0][1] === "../src/assets/patrick.jpg"){
                setBalance(prevBalance => prevBalance + (bet*320));
                setShowWinning(true);
            }else if(newBoard[0][1] === "../src/assets/squid.png"){
                setBalance(prevBalance => prevBalance + (bet*120));
                setShowWinning(true);
            }
        }else if(newBoard[0][1] === newBoard[1][1] && newBoard[1][1] === newBoard[2][1] && newBoard[2][1] === newBoard[3][1]){
            if(newBoard[0][1] === "../src/assets/A.png" || newBoard[0][1] === "../src/assets/K.png" || newBoard[0][1] === "../src/assets/Q.png" || newBoard[0][1] === "../src/assets/J.png"){
                setBalance(prevBalance => prevBalance + (bet*5));
                setShowWinning(true);
            }else if(newBoard[0][1] === "../src/assets/bob.png"){
                setBalance(prevBalance => prevBalance + (bet*200));
                setShowWinning(true);
            }else if(newBoard[0][1] === "../src/assets/garry.png"){
                setBalance(prevBalance => prevBalance + (bet*16));
                setShowWinning(true);
            }else if(newBoard[0][1] === "../src/assets/patrick.jpg"){
                setBalance(prevBalance => prevBalance + (bet*60));
                setShowWinning(true);
            }else if(newBoard[0][1] === "../src/assets/squid.png"){
                setBalance(prevBalance => prevBalance + (bet*16));
                setShowWinning(true);
            }
        }else if(newBoard[0][1] === newBoard[1][1] && newBoard[1][1] === newBoard[2][1]){
            if(newBoard[0][1] === "../src/assets/A.png" || newBoard[0][1] === "../src/assets/K.png" || newBoard[0][1] === "../src/assets/Q.png" || newBoard[0][1] === "../src/assets/J.png"){
                setBalance(prevBalance => prevBalance + (bet));
                setShowWinning(true);
            }else if(newBoard[0][1] === "../src/assets/bob.png"){
                setBalance(prevBalance => prevBalance + (bet*20));
                setShowWinning(true);
            }else if(newBoard[0][1] === "../src/assets/garry.png"){
                setBalance(prevBalance => prevBalance + (bet*4));
                setShowWinning(true);
            }else if(newBoard[0][1] === "../src/assets/patrick.jpg"){
                setBalance(prevBalance => prevBalance + (bet*6));
                setShowWinning(true);
            }else if(newBoard[0][1] === "../src/assets/squid.png"){
                setBalance(prevBalance => prevBalance + (bet*4));
                setShowWinning(true);
            }
        }

        if(newBoard[0][2] === newBoard[1][2] && newBoard[1][2] === newBoard[2][2] && newBoard[2][2] === newBoard[3][2] && newBoard[3][2] === newBoard[4][2]){
            if(newBoard[0][2] === "../src/assets/A.png" || newBoard[0][2] === "../src/assets/K.png" || newBoard[0][2] === "../src/assets/Q.png" || newBoard[0][2] === "../src/assets/J.png"){
                setBalance(prevBalance => prevBalance + (bet*20));
                setShowWinning(true);
            }else if(newBoard[0][2] === "../src/assets/bob.png"){
                setShowWinning(true);
                setBalance(prevBalance => prevBalance + (bet*1000));
            }else if(newBoard[0][2] === "../src/assets/garry.png"){
                setBalance(prevBalance => prevBalance + (bet*120));
                setShowWinning(true);
            }else if(newBoard[0][2] === "../src/assets/patrick.jpg"){
                setBalance(prevBalance => prevBalance + (bet*320));
                setShowWinning(true);
            }else if(newBoard[0][2] === "../src/assets/squid.png"){
                setBalance(prevBalance => prevBalance + (bet*120));
                setShowWinning(true);
            }
        }else if(newBoard[0][2] === newBoard[1][2] && newBoard[1][2] === newBoard[2][2] && newBoard[2][2] === newBoard[3][2]){
            if(newBoard[0][2] === "../src/assets/A.png" || newBoard[0][2] === "../src/assets/K.png" || newBoard[0][2] === "../src/assets/Q.png" || newBoard[0][2] === "../src/assets/J.png"){
                setBalance(prevBalance => prevBalance + (bet*5));
                setShowWinning(true);
            }else if(newBoard[0][2] === "../src/assets/bob.png"){
                setBalance(prevBalance => prevBalance + (bet*200));
                setShowWinning(true);
            }else if(newBoard[0][2] === "../src/assets/garry.png"){
                setBalance(prevBalance => prevBalance + (bet*16));
                setShowWinning(true);
            }else if(newBoard[0][2] === "../src/assets/patrick.jpg"){
                setBalance(prevBalance => prevBalance + (bet*60));
                setShowWinning(true);
            }else if(newBoard[0][2] === "../src/assets/squid.png"){
                setBalance(prevBalance => prevBalance + (bet*16));
                setShowWinning(true);
            }
        }else if(newBoard[0][2] === newBoard[1][2] && newBoard[1][2] === newBoard[2][2]){
            if(newBoard[0][2] === "../src/assets/A.png" || newBoard[0][2] === "../src/assets/K.png" || newBoard[0][2] === "../src/assets/Q.png" || newBoard[0][2] === "../src/assets/J.png"){
                setBalance(prevBalance => prevBalance + (bet));
                setShowWinning(true);
            }else if(newBoard[0][2] === "../src/assets/bob.png"){
                setBalance(prevBalance => prevBalance + (bet*20));
                setShowWinning(true);
            }else if(newBoard[0][2] === "../src/assets/garry.png"){
                setBalance(prevBalance => prevBalance + (bet*4));
                setShowWinning(true);
            }else if(newBoard[0][2] === "../src/assets/patrick.jpg"){
                setBalance(prevBalance => prevBalance + (bet*6));
                setShowWinning(true);
            }else if(newBoard[0][2] === "../src/assets/squid.png"){
                setBalance(prevBalance => prevBalance + (bet*4));
                setShowWinning(true);
            }
        }

        //diagonal

        if(newBoard[0][0] === newBoard[1][1] && newBoard[1][1] === newBoard[2][2] && newBoard[2][2] === newBoard[3][1] && newBoard[3][1] === newBoard[4][0]){
            if(newBoard[0][0] === "../src/assets/A.png" || newBoard[0][0] === "../src/assets/K.png" || newBoard[0][0] === "../src/assets/Q.png" || newBoard[0][0] === "../src/assets/J.png"){
                setBalance(prevBalance => prevBalance + (bet*20));
                setShowWinning(true);
            }else if(newBoard[0][0] === "../src/assets/bob.png"){
                setBalance(prevBalance => prevBalance + (bet*1000));
                setShowWinning(true);
            }else if(newBoard[0][0] === "../src/assets/garry.png"){
                setBalance(prevBalance => prevBalance + (bet*120));
                setShowWinning(true);
            }else if(newBoard[0][0] === "../src/assets/patrick.jpg"){
                setBalance(prevBalance => prevBalance + (bet*320));
                setShowWinning(true);
            }else if(newBoard[0][0] === "../src/assets/squid.png"){
                setBalance(prevBalance => prevBalance + (bet*120));
                setShowWinning(true);
            }
        }else if(newBoard[0][0] === newBoard[1][1] && newBoard[1][1] === newBoard[2][2] && newBoard[2][2] === newBoard[3][1]){
            if(newBoard[0][0] === "../src/assets/A.png" || newBoard[0][0] === "../src/assets/K.png" || newBoard[0][0] === "../src/assets/Q.png" || newBoard[0][0] === "../src/assets/J.png"){
                setBalance(prevBalance => prevBalance + (bet*5));
                setShowWinning(true);
            }else if(newBoard[0][0] === "../src/assets/bob.png"){
                setBalance(prevBalance => prevBalance + (bet*200));
                setShowWinning(true);
            }else if(newBoard[0][0] === "../src/assets/garry.png"){
                setBalance(prevBalance => prevBalance + (bet*16));
                setShowWinning(true);
            }else if(newBoard[0][0] === "../src/assets/patrick.jpg"){
                setBalance(prevBalance => prevBalance + (bet*60));
                setShowWinning(true);
            }else if(newBoard[0][0] === "../src/assets/squid.png"){
                setBalance(prevBalance => prevBalance + (bet*16));
                setShowWinning(true);
            }
        }else if(newBoard[0][0] === newBoard[1][1] && newBoard[1][1] === newBoard[2][2]){
            if(newBoard[0][0] === "../src/assets/A.png" || newBoard[0][0] === "../src/assets/K.png" || newBoard[0][0] === "../src/assets/Q.png" || newBoard[0][0] === "../src/assets/J.png"){
                setBalance(prevBalance => prevBalance + (bet));
                setShowWinning(true);
            }else if(newBoard[0][0] === "../src/assets/bob.png"){
                setBalance(prevBalance => prevBalance + (bet*20));
                setShowWinning(true);
            }else if(newBoard[0][0] === "../src/assets/garry.png"){
                setBalance(prevBalance => prevBalance + (bet*4));
                setShowWinning(true);
            }else if(newBoard[0][0] === "../src/assets/patrick.jpg"){
                setBalance(prevBalance => prevBalance + (bet*6));
                setShowWinning(true);
            }else if(newBoard[0][0] === "../src/assets/squid.png"){
                setBalance(prevBalance => prevBalance + (bet*4));
                setShowWinning(true);
            }
        }

        if(newBoard[0][2] === newBoard[1][1] && newBoard[1][1] === newBoard[2][0] && newBoard[2][0] === newBoard[3][1] && newBoard[3][1] === newBoard[4][2]){
            if(newBoard[0][2] === "../src/assets/A.png" || newBoard[0][2] === "../src/assets/K.png" || newBoard[0][2] === "../src/assets/Q.png" || newBoard[0][2] === "../src/assets/J.png"){
                setBalance(prevBalance => prevBalance + (bet*20));
                setShowWinning(true);
            }else if(newBoard[0][2] === "../src/assets/bob.png"){
                setBalance(prevBalance => prevBalance + (bet*1000));
                setShowWinning(true);
            }else if(newBoard[0][2] === "../src/assets/garry.png"){
                setBalance(prevBalance => prevBalance + (bet*120));
                setShowWinning(true);
            }else if(newBoard[0][2] === "../src/assets/patrick.jpg"){
                setBalance(prevBalance => prevBalance + (bet*320));
                setShowWinning(true);
            }else if(newBoard[0][2] === "../src/assets/squid.png"){
                setBalance(prevBalance => prevBalance + (bet*120));
                setShowWinning(true);
            }
        }else if(newBoard[0][2] === newBoard[1][1] && newBoard[1][1] === newBoard[2][0] && newBoard[2][0] === newBoard[3][1]){
            if(newBoard[0][2] === "../src/assets/A.png" || newBoard[0][2] === "../src/assets/K.png" || newBoard[0][2] === "../src/assets/Q.png" || newBoard[0][2] === "../src/assets/J.png"){
                setBalance(prevBalance => prevBalance + (bet*5));
                setShowWinning(true);
            }else if(newBoard[0][2] === "../src/assets/bob.png"){
                setBalance(prevBalance => prevBalance + (bet*200));
                setShowWinning(true);
            }else if(newBoard[0][2] === "../src/assets/garry.png"){
                setBalance(prevBalance => prevBalance + (bet*16));
                setShowWinning(true);
            }else if(newBoard[0][2] === "../src/assets/patrick.jpg"){
                setBalance(prevBalance => prevBalance + (bet*60));
                setShowWinning(true);
            }else if(newBoard[0][2] === "../src/assets/squid.png"){
                setBalance(prevBalance => prevBalance + (bet*16));
                setShowWinning(true);
            }
        }else if(newBoard[0][2] === newBoard[1][1] && newBoard[1][1] === newBoard[2][0]){
            if(newBoard[0][2] === "../src/assets/A.png" || newBoard[0][2] === "../src/assets/K.png" || newBoard[0][2] === "../src/assets/Q.png" || newBoard[0][2] === "../src/assets/J.png"){
                setBalance(prevBalance => prevBalance + (bet));
                setShowWinning(true);
            }else if(newBoard[0][2] === "../src/assets/bob.png"){
                setBalance(prevBalance => prevBalance + (bet*20));
                setShowWinning(true);
            }else if(newBoard[0][2] === "../src/assets/garry.png"){
                setBalance(prevBalance => prevBalance + (bet*4));
                setShowWinning(true);
            }else if(newBoard[0][2] === "../src/assets/patrick.jpg"){
                setBalance(prevBalance => prevBalance + (bet*6));
                setShowWinning(true);
            }else if(newBoard[0][2] === "../src/assets/squid.png"){
                setBalance(prevBalance => prevBalance + (bet*4));
                setShowWinning(true);
            }
        }
    }


    function handleNewPicks() {
        if (balance >= bet && !spinClicked) { 
            setBalance(prevBalance => prevBalance - bet);
            setRefresh(!refresh);
            setSpinClicked(true);
    
            const picks = document.querySelectorAll('.picks');
            picks.forEach((pick, index) => {
                pick.classList.add('spin-animation');
            });
    
            setTimeout(() => {
                picks.forEach((pick, index) => {
                    pick.classList.remove('spin-animation');
                });
                setSpinClicked(false);
            }, 1000);
        }
    }
    
    

    function increaseBet(){
        if(bet < 20){
            setBet(prevBet => prevBet + 1);
        }
    }

    function decreaseBet(){
        if(bet > 1 ){
            setBet(prevBet => prevBet - 1);
        }
    }

    return(
        <>
        <div className="slotView-container">
            <div className="slot-container">
                {board.map((row, i) => (
                    <div key={i} className="column">
                        {row.map((pick, j) => (
                            <img key={j} src={pick} className="picks" />
                        ))}
                    </div>
                ))}
            </div>
            <div className="money-container">
                <p className="balance">{balance}€</p>
                <button onClick={decreaseBet} className="decrease-button">-</button>
                <p className="bet">{bet}€</p>
                <button onClick={increaseBet} className="increase-button">+</button>
                <button className="spin-button" onClick={handleNewPicks}>Spin</button>
            </div>
        </div>
        <div className="overlay-container">
            {showWinning && <div className="winning-container">You Win!</div>}
        </div>
        </>
    );
}

export default SlotView;
