import React, { useState, useEffect } from "react";
import Field from "./Field";
import { copyToBoolean, generateBoard, getNeighbors, revealBombs } from "./Functions";

const App = () => {
    const [playground, setPlayground] = useState([])
    const [booleanBoard, setBooleanBoard] = useState([])
    const [flagBoard, setFlagBoard] = useState([])

    const [toggle, setToggle] = useState(false)
    
    useEffect(() => {
        let field = generateBoard()
        
        setPlayground(field)
        setBooleanBoard(copyToBoolean(field))
        setFlagBoard(copyToBoolean(field))
    }, [])
    
    const renderField = () => {
        console.log(flagBoard)
        return playground.map((row, rowIndex) => (
          <div key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <Field key={cellIndex} value={cell} isOpen={booleanBoard[rowIndex][cellIndex]} openField={() => openField(rowIndex, cellIndex)} revealOthers={() => revealOthers(rowIndex, cellIndex)} isFlagged={flagBoard[rowIndex][cellIndex]} flagField={() => flagField(rowIndex, cellIndex)} />
            ))}
            <br />
          </div>
        ))
    }

    const openField = (row, col) => {
        let board = booleanBoard
        board[row][col] = true 

        if (playground[row][col] === -1) gameover()

        if (playground[row][col] === 0) {
            let neighbors = getNeighbors(playground, row, col)

            neighbors.forEach(e => {
                if (board[e[0]][e[1]] === false) openField(e[0], e[1])
            })
        }

        setBooleanBoard(board)
        setToggle(!toggle)
    }

    let flagField = (row, col) => {
        let board = flagBoard
        board[row][col] = !board[row][col]
        
        setFlagBoard(board)
        setToggle(!toggle)
    }

    let revealOthers = (row, col) => {
        let neighbors = getNeighbors(playground, row, col) // openField for all of them with map
        neighbors.map(e => {
            if (!flagBoard[e[0]][e[1]]) {
                openField(e[0], e[1])
            }
        })
    }

    let gameover = () => {
        let board = booleanBoard

        setBooleanBoard(revealBombs(playground, board))
        setToggle(!toggle)
    }

    return (
        <div className="playground" style={{display: 'flex'}}>
            { renderField() }
        </div>
    )
}

export default App;