import React, { useState } from "react";

const Field = ({ value }) => {
    const [isClosed, setIsClosed] = useState(true)
    const [lockClick, setLockClick] = useState(false)

    const clickHandler = () => {
        if (!lockClick) setIsClosed(false)
    }

    const handleRightClick = (event) => {
        event.preventDefault()
        if (isClosed) setLockClick(!lockClick)
    }

    return (
        <div onClick={clickHandler} onContextMenu={handleRightClick} className="field" style={{
            width: '35px', height: '35px', background: `${isClosed ? '#a9aaac' : '#d1d1d3'}`, border: `2px ${isClosed ? '#57585a' : '#848688'} solid`, 
            margin: '0 1px 1px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: `${isClosed ? 'pointer' : 'default'}`, 
            borderRadius: '3px'
        }}>
            {lockClick ? '🚩' : isClosed ? '' : value === -1 ? '💣' : value === 0 ? ' ' : value }
        </div>
    )
}

export default Field;