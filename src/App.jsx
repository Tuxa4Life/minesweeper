import React, { useState, useEffect } from "react";
import Field from "./Field";
import { generateBoard } from "./Functions";

const App = () => {
    const [playground, setPlayground] = useState([])
    
    useEffect(() => {
        let field = generateBoard()
        setPlayground(field)
    }, [])

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