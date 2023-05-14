import React from "react";

const Button = (props) => {
    console.log('props-------------', props);
    return (
        <div className='common'>
            <h1 >{props.msg || 'Button'}</h1>
        </div>
    )
}

export default Button;

