import React from 'react';

const AlertUser = (props) => {
    return (
        <div className="row row-spacer">
            <button onSubmit ={props.handleSubmit()}>Click Me</button>
        </div>
        )
    };



export default AlertUser;