import React from "react";

const Gameover = ({ close, restart }) => {
    return (
        <div style={{
            width: '100%', height: '100dvh', position: 'fixed', left: '0', top: '0', display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
            <div style={{
                width: '300px', height: 'auto', padding: '15px', border: '2px black solid', borderRadius: '7px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'
            }}>
                <h1>Game Over!</h1>
                <button onClick={restart} style={{margin: '5px', cursor: 'pointer'}}>Restart</button>
                <button onClick={close} style={{cursor: 'pointer'}}>Close</button>
            </div>

        </div>
    )
}

export default Gameover;