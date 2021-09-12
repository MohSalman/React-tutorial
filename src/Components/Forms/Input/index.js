import React from 'react'

function Input({ inputClass, inputType, inputValue, inputPlaceholder, inputChangeEvent }) {
    return (
        <input onChange={inputChangeEvent} className={`form-control ${inputClass}`} type={inputType} value={inputValue} placeholder={inputPlaceholder} />
    )
}

export default Input
