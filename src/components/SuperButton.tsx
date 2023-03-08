import React from 'react';
import b from "./SuperButtin.module.css"


type SuperButtonPropsType = {
    name : string
    CallBack : () => void
    disable : boolean
    disableInc? : boolean


}
const SuperButton = (props : SuperButtonPropsType) => {

    return (
        <div className={b.container}>
            <button disabled={props.disable || props.disableInc} onClick={props.CallBack} className={b.normal}>{props.name}</button>
        </div>
    );
};

export default SuperButton;