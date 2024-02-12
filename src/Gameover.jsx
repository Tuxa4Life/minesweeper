import React from "react";

const Gameover = () => {
    return (
        <div style={{
            width: '100%', height: '100dvh', position: 'fixed', left: '0', top: '0', display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
            <div style={{
                width: '300px', height: 'auto', padding: '15px', border: '2px black solid', borderRadius: '7px', background: 'white'
            }}>
                <h1>Gameover!</h1>
                <button>Start again</button>
                <button>Close</button>
            </div>

        </div>
    )
}

export default Gameover;