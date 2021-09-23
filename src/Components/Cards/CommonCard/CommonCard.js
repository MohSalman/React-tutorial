import React from 'react'
import { useState } from 'react/cjs/react.development'
import ButtonCustom from '../../Forms/Buttons/Button'

export function CardOne({countState, IncrementFun}) {
    return (
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">States</h5>
                <p className="card-text">{countState}</p>
                <ButtonCustom btnclassName="btn-primary" btnText="Increment Counter" btnClickEvent={IncrementFun} />
            </div>
        </div>
    )
}

export function CardTwo({parentState,parentFun}) {
    const [localState, setLocalState] = useState(10);

    const callLocalState=()=>{
        parentFun()
        
        let counting = localState + 1;
        setLocalState(counting)
    }
    return (
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">localState :{localState}</h5>
                <p className="card-text">Parent State :{parentState}</p>
                <ButtonCustom btnclassName="btn-primary" btnText="Increment Counter" btnClickEvent={callLocalState} />
            </div>
        </div>
    )
}

