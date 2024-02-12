import React, { useState, useEffect } from "react";
import Field from "./Field";
import { copyToBoolean, generateBoard, getNeighbors } from "./Functions";

const App = () => {
    const [playground, setPlayground] = useState([])
    const [booleanBoard, setBooleanBoard] = useState([])

    const [toggle, setToggle] = useState(false)
    
    useEffect(() => {
        let field = generateBoard()
        
        setPlayground(field)
        setBooleanBoard(copyToBoolean(field))
    }, [])
    
    const renderField = () => {
        return playground.map((row, rowIndex) => (
          <div key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <Field key={cellIndex} value={cell} isOpen={booleanBoard[rowIndex][cellIndex]} openField={() => openField(rowIndex, cellIndex)} />
            ))}
            <br />
          </div>
        ))
    }

    const openField = (row, col) => {
        let board = booleanBoard
        board[row][col] = true 

        if (playground[row][col] === 0) {
            let neighbors = getNeighbors(playground, row, col)

            neighbors.forEach(e => {
                if (board[e[0]][e[1]] === false) openField(e[0], e[1])
            })
        }

        setBooleanBoard(board)
        setToggle(!toggle)
    }

    return (
        <div className="playground" style={{display: 'flex'}}>
            { renderField() }
        </div>
    )
}

export default App;