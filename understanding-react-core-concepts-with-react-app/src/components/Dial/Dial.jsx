import React from 'react';
import Knob from '../knob/Knob';

const Dial = (props) => {
    return (
        <div style={{border:'2px solid purple', margin: '20px'}}>
            <h3>This is the dial component</h3>
            <p>Your steps count: {props.steps}</p>
            <Knob steps={props.steps}></Knob>
        </div>
    );
};

export default Dial;