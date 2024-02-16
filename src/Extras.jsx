import React from "react";

const Extras = ({ increaseWidth, decreaseWidth, increaseHeight, decreaseHeight, addBomb, removeBomb, width, height, bombCount }) => {
    return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div className="ui buttons tiny">
                    <button onClick={decreaseHeight} className="ui icon button tiny secondary inverted">
                        <i className="chevron down icon"></i>
                    </button>
                    <p className="ui basic label">
                        {height}
                    </p>
                    <button onClick={increaseHeight} className="ui icon button secondary inverted">
                        <i className="chevron up icon"></i>
                    </button>
                </div>

                <div className="ui buttons tiny" style={{marginLeft: '10px'}}>
                    <button onClick={decreaseWidth} className="ui icon button secondary inverted">
                        <i className="chevron left icon"></i>
                    </button>
                    <p className="ui basic label">
                        {width}
                    </p>
                    <button onClick={increaseWidth} className="ui icon button secondary inverted">
                        <i className="chevron right icon"></i>
                    </button>
                </div>

                <div className="ui buttons tiny" style={{marginLeft: '10px'}}>
                    <button onClick={removeBomb} className="ui icon button secondary inverted">
                        <i className="minus icon"></i>
                    </button>
                    <p className="ui basic label">
                        {bombCount}
                    </p>
                    <button onClick={addBomb} className="ui icon button secondary inverted">
                        <i className="plus icon"></i>
                    </button>
                </div>
            </div>
    )
}

export default Extras;