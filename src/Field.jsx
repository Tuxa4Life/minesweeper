import React from "react";

const Field = ({ value, isOpen, openField, revealOthers, isFlagged, flagField }) => {
    const clickHandler = () => {
        if (!isFlagged) openField()
    }

    const handleRightClick = (event) => {
        event.preventDefault()

        if (!isOpen)  {
            flagField()
        } else {
            revealOthers()
        }
    }

    return (
        <div onClick={clickHandler} onContextMenu={handleRightClick} className="field" style={{
            width: '35px', height: '35px', background: `${!isOpen ? '#a9aaac' : '#d1d1d3'}`, border: `2px ${!isOpen ? '#57585a' : '#848688'} solid`, 
            margin: '0 1px 1px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: `${!isOpen ? 'pointer' : 'default'}`, 
            borderRadius: '3px'
        }}>
            {isFlagged ? '🚩' : isOpen ? value === -1 ? '💣' : value === 0 ? ' ' : value : ''}
        </div>
    )
}

export default Field;