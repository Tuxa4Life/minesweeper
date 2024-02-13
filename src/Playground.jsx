import React, { useState, useEffect } from "react";
import Field from "./Field";
import { copyToBoolean, generateBoard, getNeighbors, revealBombs } from "./Functions";
import Gameover from "./Gameover";

const Playground = () => {
    const [playground, setPlayground] = useState([])
    const [booleanBoard, setBooleanBoard] = useState([])
    const [flagBoard, setFlagBoard] = useState([])

    const [toggle, setToggle] = useState(false)
    const [restart, setRestart] = useState(false)
    const toggleRestart = () => setRestart(!restart)

    const [isGameover, setIsGameover] = useState(false)
    
    useEffect(() => {
        let field = generateBoard(12, 14)

        setIsGameover(false)
        
        setPlayground(field)
        setBooleanBoard(copyToBoolean(field))
        setFlagBoard(copyToBoolean(field))
    }, [restart])
    
    const renderField = () => {
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
        let neighbors = getNeighbors(playground, row, col)
        let flagCount = 0
        neighbors.forEach(e => { if (flagBoard[e[0]][e[1]]) flagCount ++ })

        if (flagCount === playground[row][col]) {
            neighbors.forEach(e => {
                if (!flagBoard[e[0]][e[1]]) {
                    openField(e[0], e[1])
                }
            })
        }
    }

    let gameover = () => {
        let board = booleanBoard

        setBooleanBoard(revealBombs(playground, board))
        setIsGameover(true)
    }

    return (
        <div className="playground" style={{display: 'flex'}}>
            { renderField() }
            { isGameover ? <Gameover restart={toggleRestart} close={() => setIsGameover(false)} /> : null }
        </div>
    )
}

export default Playground;