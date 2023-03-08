import React, {ChangeEvent, useEffect, useState} from 'react';
import s from "./App.module.css"
import Counter from "./components/Counter";
import Settings from "./components/Settings";


function App() {
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [value, setValue] = useState<number>(startValue)
    const [disableSet, setDisableSet] = useState<boolean>(true)
    const [disableCounter, setDisableCounter] = useState<boolean>(false)
    const [error, setError] = useState(false)
    const [enter, setEnter] = useState<boolean>(false)
    const [disableInc, setDisableInc]= useState<boolean>(false)
    const [maxLimit, setMaxLimit] = useState<boolean>(false)



useEffect(()=> {
    let startValueAsString = localStorage.getItem("startValue")
    if(startValueAsString) {
        let newValue = JSON.parse(startValueAsString)
        setStartValue(newValue)
        setValue(newValue)
    }
},[])

useEffect(()=> {
    let maxValueAsString = localStorage.getItem("maxValue")
    if(maxValueAsString) {
        let newValue = JSON.parse(maxValueAsString)
        setMaxValue(newValue)
    }
},[])

    const inc = () => {
        value < maxValue &&
        setValue(value + 1)
        if(value>=maxValue){
            setDisableInc(true)
            setMaxLimit(true)
        }
    }
    const reset = () => {
        setValue(startValue)
        setDisableInc(false)
        setMaxLimit(false)
    }

    const setMax = (e: ChangeEvent<HTMLInputElement>) => {
        if(maxValue <= startValue){
            setError(true)
            setDisableSet(true)
            setMaxValue(startValue+1)
            setDisableSet(false)
        }else {
            setDisableSet(false)
            setEnter(true)
            setDisableCounter(true)
            setMaxValue(Number(e.currentTarget.value))
        }
    }

    const setStart = (e: ChangeEvent<HTMLInputElement>) => {
        if(Number(e.currentTarget.value)<0 || Number(e.currentTarget.value)>=maxValue){
            setError(true)
            setDisableSet(true)
        }else {
            setDisableSet(false)
            setEnter(true)
            setDisableCounter(true)
            setStartValue(Number(e.currentTarget.value))
        }
    }
    const set = () => {
        setDisableCounter(false)
        if (startValue >= maxValue) {
            setError(true)
        } else {
            localStorage.setItem("startValue",JSON.stringify(startValue))
            localStorage.setItem("maxValue",JSON.stringify(maxValue))
            setError(false)
            setEnter(false)
            setValue(startValue)
            setDisableInc(false)
            setDisableSet(true)
            setMaxLimit(false)
        }

    }
    return (
        <div className={s.container}>
            <div className={s.settings}><Settings  set={set} disable={disableSet} setStart={setStart}
                                                  startValue={startValue}
                                                  setMax={setMax} maxValue={maxValue}/></div>
            <div className={s.counter}><Counter maxLimit={maxLimit} disableInc={disableInc} error={error} disableCounter={disableCounter} reset={reset}
                                                value={enter ? <p className={s.enterValue}>enter values and press
                                                    'set'</p> : value} inc={inc}/></div>

        </div>
    )
}

export default App;
