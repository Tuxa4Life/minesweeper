import React, { useState, useEffect } from "react";

const App = () => {
    const [playground, setPlayground] = useState([])
    
    useEffect(() => {
        const field = [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ]

        setPlayground(field)
    }, [])
    
    return (
        <div className="playground">

        </div>
    )
}

export default App;