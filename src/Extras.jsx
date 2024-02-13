import React from "react";

const Extras = () => {
    return (
        <div style={{width: '100%', height: '37px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between'}}>
            <div>
                <div className="ui buttons tiny">
                    <button class="ui icon button tiny secondary inverted">
                        <i class="chevron down icon"></i>
                    </button>
                    <p className="ui basic label">
                        14
                    </p>
                    <button class="ui icon button secondary inverted">
                        <i class="chevron up icon"></i>
                    </button>
                </div>

                <div className="ui buttons tiny" style={{marginLeft: '10px'}}>
                    <button class="ui icon button secondary inverted">
                        <i class="chevron left icon"></i>
                    </button>
                    <p className="ui basic label">
                        12
                    </p>
                    <button class="ui icon button secondary inverted">
                        <i class="chevron right icon"></i>
                    </button>
                </div>

                <div className="ui buttons tiny" style={{marginLeft: '10px'}}>
                    <button class="ui icon button secondary inverted">
                        <i class="minus icon"></i>
                    </button>
                    <p className="ui basic label">
                        28
                    </p>
                    <button class="ui icon button secondary inverted">
                        <i class="plus icon"></i>
                    </button>
                </div>
            </div>

            <div>
                <button class="ui icon button tiny secondary inverted">
                    <i class="redo icon"></i>
                </button>
            </div>
        </div>
    )
}

export default Extras;