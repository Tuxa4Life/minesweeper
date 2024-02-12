import React, { useState } from "react";

const Field = ({ value, isOpen, openField }) => {
    const [lockClick, setLockClick] = useState(false)

    const clickHandler = () => {
        if (!lockClick) openField()
    }

    const handleRightClick = (event) => {
        event.preventDefault()
        if (!isOpen) setLockClick(!lockClick)
    }

    return (
        <div onClick={clickHandler} onContextMenu={handleRightClick} className="field" style={{
            width: '35px', height: '35px', background: `${!isOpen ? '#a9aaac' : '#d1d1d3'}`, border: `2px ${!isOpen ? '#57585a' : '#848688'} solid`, 
            margin: '0 1px 1px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: `${!isOpen ? 'pointer' : 'default'}`, 
            borderRadius: '3px'
        }}>
            {lockClick ? '🚩' : isOpen ? value === -1 ? '💣' : value === 0 ? ' ' : value : ''}
        </div>
    )
}

export default Field;