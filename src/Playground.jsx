import React, { useState, useEffect } from "react";
import Field from "./Field";
import { copyToBoolean, generateBoard, getNeighbors, revealBombs } from "./Functions";
import Gameover from "./Gameover";
import Stats from "./Stats";

const Playground = ({ width, height, bombCount, restart }) => {
    const [playground, setPlayground] = useState([])
    const [booleanBoard, setBooleanBoard] = useState([])
    const [flagBoard, setFlagBoard] = useState([])

    const [toggle, setToggle] = useState(false)
    const [isGameover, setIsGameover] = useState(false)
    const [hasWon, setHasWon] = useState(false)

    const [openFieldCount, setOpenFieldCount] = useState(0)
    const [visualBombs, setVisualBombs] = useState(bombCount)
    const [hasStarted, setHasStarted] = useState(false)
    
    useEffect(() => {
        let field = generateBoard(width, height, bombCount)

        setIsGameover(false)
        
        setHasStarted(false)
        setOpenFieldCount(0)
        setHasWon(0)
        setVisualBombs(bombCount)
        setPlayground(field)
        setBooleanBoard(copyToBoolean(field))
        setFlagBoard(copyToBoolean(field))
    }, [restart, width, height, bombCount])

    useEffect(() => {
        if (openFieldCount === width * height - bombCount) setHasWon(true)
    }, [openFieldCount])
    
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
        if (!hasStarted) setHasStarted(true)
        let board = booleanBoard
        board[row][col] = true 
        setOpenFieldCount(openFields => openFields + 1)

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
        if (board[row][col]) setVisualBombs(visualBombs - 1) 
        else setVisualBombs(visualBombs + 1) 
        
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

        setHasStarted(false)
        setBooleanBoard(revealBombs(playground, board))
        setIsGameover(true)
    }

    return (
        <div className="playground"> 
            <Stats bombs={visualBombs} restart={restart} hasStarted={hasStarted} />
            <div  style={{display: 'flex'}}>
                { renderField() }
            </div>
            { hasWon ? <Gameover header={'You have won!'} btnText={'Play again'} restart={restart} close={() => setHasWon(false)} /> : null }
            { isGameover ? <Gameover header={'Game Over!'} btnText={'Restart'} restart={restart} close={() => setIsGameover(false)} /> : null }
        </div>
    )
}

export default Playground;