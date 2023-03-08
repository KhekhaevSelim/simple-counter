import React, {useState} from 'react';
import c from "./Counter.module.css"
import SuperButton from "./SuperButton";

type CounterPropsType = {
    value : number | JSX.Element,
   inc : ()=> void
    reset : ()=>void
    disableCounter : boolean
    error : boolean
    disableInc : boolean
    maxLimit : boolean
}
const Counter = (props : CounterPropsType) => {

const finalValueClassName = c.count + " " + (props.maxLimit ? c.countLimit : "")
    return (
        <div className={c.container}>
            {props.error ?
            <div className={c.display}><p className={c.error}>   Error!! incorrect values!!</p></div>
            :
            <div className={c.display}><p className={finalValueClassName}>{props.value}</p></div>}
            <div className={c.panel}><SuperButton disableInc={props.disableInc} disable={props.disableCounter} CallBack={props.inc} name={"inc"}/>
                <SuperButton disable={props.disableCounter}  CallBack={props.reset} name={"reset"}/></div>
        </div>
    );
};

export default Counter;