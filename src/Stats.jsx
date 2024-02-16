import React from "react";

const Stats = ({ bombs, restart }) => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '15px'}}>
            <p className="ui basic label">
                00:00
            </p>

            <p className="ui basic label">
                💣 { bombs } 
            </p>

            <button onClick={restart} className="ui button icon secondary inverted tiny">
                <i className="icon redo"></i>
            </button>
        </div>
    )
}

export default Stats;