import React from 'react';

const Validation = (props) => {
    return (
        <dvi>
            {
                props.size < 6 
                    ? <p>Text too short </p>
                    : <p>Text long enough </p>
            }
        </dvi>
    )
}

export default Validation