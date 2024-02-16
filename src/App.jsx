import React, { useState, useEffect } from "react";
import Playground from "./Playground";
import Extras from "./Extras";
import Stats from "./Stats";

const App = () => {
    const [width, setWidth] = useState(12)
    const [height, setHeight] = useState(14)
    const [bombCount, setBombCount] = useState(28)
    const [restart, setRestart] = useState(false)
    const toggleRestart = () => setRestart(!restart)

    const increase = (value, func) => { 
        if (value + 1 < 30) func(value + 1)
    }
    const decrease = (value, func) => { 
        if (value - 1 > 8) func(value - 1)
    }

    const addBomb = () => {
        if (bombCount / (width * height) < 0.2) setBombCount(bombCount + 1)
    }
    const removeBomb = () => {
        if (bombCount > 1) setBombCount(bombCount - 1)
    }

    return (
        <div>
            <Stats restart={toggleRestart} />
            <Playground 
                width={width} height={height} bombCount={bombCount} restart={toggleRestart} 
                
            />
            <Extras 
                addBomb={addBomb}   removeBomb={removeBomb}
                increaseHeight={() => increase(height, setHeight)} decreaseHeight={() => decrease(height, setHeight)}
                increaseWidth={() => increase(width, setWidth)} decreaseWidth={() => decrease(width, setWidth)}
                height={height} width={width} bombCount={bombCount}
            />
        </div>
    )
}

export default App; 