import React from "react";
import Timer from "./Timer";

const Stats = ({ bombs, restart, hasStarted }) => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '15px'}}>
            <p className="ui basic label">
                <Timer hasStarted={hasStarted}/>
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