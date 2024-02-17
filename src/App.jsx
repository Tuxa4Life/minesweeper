import React, { useState } from "react";
import Playground from "./Playground";
import Extras from "./Extras";
import { decrease, increase } from "./Functions";

const App = () => {
    const [width, setWidth] = useState(30)
    const [height, setHeight] = useState(16)
    const [bombCount, setBombCount] = useState(99)
    const [restart, setRestart] = useState(false)
    const toggleRestart = () => setRestart(!restart)

    const addBomb = () => {
        if (bombCount / (width * height) < 0.2) setBombCount(bombCount + 1)
    }
    const removeBomb = () => {
        if (bombCount > 1) setBombCount(bombCount - 1)
    }

    return (
        <div>
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