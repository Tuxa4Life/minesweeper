import React, { useState, useEffect } from "react";
import Field from "./Field";

const App = () => {
    const [playground, setPlayground] = useState([])
    
    useEffect(() => {
        let field = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]

        randomizeField(field)
        assignValues(field)

        setPlayground(field)
    }, [])

    const randomizeField = (field) => {
        const width = field.length
        const height = field[0].length
        let bombCount = 28
        
        while (bombCount !== 0) {
            const randomRow = Math.floor(Math.random() * height) // 14
            const randomColumn = Math.floor(Math.random() * width) // 12

            if (field[randomColumn][randomRow] !== -1) {
                field[randomColumn][randomRow] = -1
                bombCount --
            }
        }
    }

    const assignValues = (field) => {
        for (let i = 0; i < field.length; i++) {
            for (let t = 0; t < field[0].length; t++) {
                if (field[i][t] === -1) continue
                let value = 0

                if (i < field.length - 1) if (field[i + 1][t] === -1) value ++ // right
                if (t < field[0].length - 1) if (field[i][t + 1] === -1) value ++ // down

                if (i > 0) if (field[i - 1][t] === -1) value ++ // left
                if (t > 0) if (field[i][t - 1] === -1) value ++ // top

                if (i < field.length - 1 && t <  field[0].length - 1) if (field[i + 1][t + 1]) value ++ // bottom right
                if (i > 0 && t >  0) if (field[i - 1][t - 1] === -1) value ++ // top left

                if (i < field.length - 1 && t > 0) if (field[i + 1][t - 1] === -1) value ++ // top right
                if (i > 0 && t < field[0].length) if (field[i - 1][t + 1] === -1) value ++ // bottom left

                field[i][t] = value
            }
        }
    }

    const renderField = () => {
        return playground.map((row, rowIndex) => (
          <div key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <Field key={cellIndex} value={cell} />
            ))}
            <br />
          </div>
        ));
      };

    return (
        <div className="playground" style={{display: 'flex'}}>
            { renderField() }
        </div>
    )
}

export default App;