import React, { useState } from "react";

const Field = ({ value }) => {
    const [isClosed, setIsClosed] = useState(false)
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
            width: '20px', height: '20px', background: `${isClosed ? '#a9aaac' : '#d1d1d3'}`, border: `2px ${isClosed ? '#57585a' : '#848688'} solid`, 
            margin: '0 1px 1px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: `${isClosed ? 'pointer' : 'default'}`
        }}>
            {lockClick ? '🚩' : isClosed ? '' : value === -1 ? '💣' : value === 0 ? ' ' : value }
        </div>
    )
}

export default Field;