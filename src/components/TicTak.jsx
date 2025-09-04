import React from "react";
import { useState } from "react";
import '../App.css';

function Square({value,onSquareClick})
{
    
    return <button className="square" onClick={onSquareClick}>{value}</button>
}

export default function Board()
{
    const [xIsNext, setXIsNext] = useState(true);
    const [squares,setSquares] = useState(Array(9).fill(null));
    const [blank, setBlank] = useState(Array.from({length:9},(_,i)=>i));
    const [computer, setComputer] = useState(" ");
    const [isUserTurn, setIsUserTurn] = useState(true);

    function handleClick(i) 
    {
        if ( !isUserTurn || squares[i] || claculateWin(squares)) {
            return;
        }

        // copy current board
        const nextSquare = squares.slice();

        // player X move
        nextSquare[i] = "X";

        // update board immediately
        setSquares(nextSquare);

        // remove from blank
        const newBlank = blank.filter(val => val !== i);
        setBlank(newBlank);
        setIsUserTurn(false);

        setTimeout(()=>{
            // now pass the updated board to suggestion
            const suggestionIndex = sugetion(nextSquare);
            let computerMove = null;
            if (suggestionIndex === null) 
            {
                const computerIndex = Math.floor(Math.random() * newBlank.length);
                setComputer(newBlank[computerIndex]);
                computerMove = newBlank[computerIndex];
            } 
            else 
            {
                setComputer(suggestionIndex);
                computerMove = suggestionIndex ;
            }

            if(computerMove !== null)
            {
                nextSquare[computerMove] = "O";
            }
            setIsUserTurn(true);
        },1000);
        
    }


    const winner = claculateWin(squares);
    let status;
    if (winner) {
        status = "Winner: " + (winner === "X" ? "X": "computer");
    } else {
        status = "Next player: " + (xIsNext ? "X" : "computer");
    }

    return (
        <>
        <div className="status">{status}</div>
        <div className="board-row">
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>

        <button className="reset" onClick={() => {
            setSquares(Array(9).fill(null));
            setXIsNext(true);
            setBlank(Array.from({length:9},(_,i)=>i));
            setComputer(' ');
            }}>
            Reset
        </button>

        </>
    );
}

function claculateWin(squares)
{
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for (let i = 0; i < lines.length; i++) 
    {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) 
        {
            return squares[a];
        }
    }
    return null;
}


function sugetion(squares) 
{
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(let i = 0 ; i< lines.length ; i++)
    {
        const [a , b, c] =lines[i];
        if(squares[a] && squares[a] === squares[b] && !squares[c])
        {
            return c;
        }
        else if (squares[a] && squares[a] === squares[c] && !squares[b])
        {
            return b;
        }
        else if (squares[b] && squares[b] === squares[c] && !squares[a])
        {
            return a;
        }
    }
    return null;
}
