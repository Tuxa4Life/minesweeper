import React from "react";

const Extras = ({ increaseWidth, decreaseWidth, increaseHeight, decreaseHeight, addBomb, removeBomb, width, height, bombCount, restart }) => {
    return (
        <div style={{width: '100%', height: '37px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between'}}>
            <div>
                <div className="ui buttons tiny">
                    <button onClick={decreaseHeight} class="ui icon button tiny secondary inverted">
                        <i class="chevron down icon"></i>
                    </button>
                    <p className="ui basic label">
                        {height}
                    </p>
                    <button onClick={increaseHeight} class="ui icon button secondary inverted">
                        <i class="chevron up icon"></i>
                    </button>
                </div>

                <div className="ui buttons tiny" style={{marginLeft: '10px'}}>
                    <button onClick={decreaseWidth} class="ui icon button secondary inverted">
                        <i class="chevron left icon"></i>
                    </button>
                    <p className="ui basic label">
                        {width}
                    </p>
                    <button onClick={increaseWidth} class="ui icon button secondary inverted">
                        <i class="chevron right icon"></i>
                    </button>
                </div>

                <div className="ui buttons tiny" style={{marginLeft: '10px'}}>
                    <button onClick={removeBomb} class="ui icon button secondary inverted">
                        <i class="minus icon"></i>
                    </button>
                    <p className="ui basic label">
                        {bombCount}
                    </p>
                    <button onClick={addBomb} class="ui icon button secondary inverted">
                        <i class="plus icon"></i>
                    </button>
                </div>
            </div>

            <div>
                <button onClick={restart} class="ui icon button tiny secondary inverted">
                    <i class="redo icon"></i>
                </button>
            </div>
        </div>
    )
}

export default Extras;