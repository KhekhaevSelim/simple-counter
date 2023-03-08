import React, {ChangeEvent, useState} from 'react';
import s from "./Settings.module.css";
import SuperButton from "./SuperButton";

type SettingsPropsType = {
    startValue : number
    maxValue : number
    setStart : (e:ChangeEvent<HTMLInputElement>) => void
    setMax : (e:ChangeEvent<HTMLInputElement>) => void
    disable : boolean
    set : ()=> void
}
const Settings = (props:SettingsPropsType) => {


    const setMax = (e:ChangeEvent<HTMLInputElement>) => {

        props.setMax(e)
    }

    const setStart = (e:ChangeEvent<HTMLInputElement>) => {
        props.setStart(e)

    }
    return (
        <div className={s.container}>
            <div className={s.display}>
                <div className={s.setRow}><span>max value</span> <input type={"number"} className={s.input} value={props.maxValue}
                                                                        onChange={setMax}/></div>
                <div className={s.setRow}><span>start value</span> <input type={"number"} className={s.input} value={props.startValue}
                                                                         onChange={setStart}/></div>
            </div>
            <div className={s.panel}> <SuperButton disable={props.disable} CallBack={props.set} name={"set"}/></div>
        </div>
    );
};

export default Settings;