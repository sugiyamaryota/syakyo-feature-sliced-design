import { ChangeEvent, FC, InputHTMLAttributes, useState } from "react";
import clsx from "clsx";

import './input.scss'

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    readonly className?: string;
}

export const Input: FC<IInput> = (props) => {
    const {
        value,
        onChange,
        onBlur,
        onFocus,
        onKeyDown,
        placeholder,
        className
    } = props

    const [inputData, setInputData] = useState<string>('')

    const onChangeInputData = (e: ChangeEvent<HTMLInputElement>) => {
        setInputData(e.target.value)
    }

    return (
        <input 
            className={clsx('input', className)}
            type='text'
            value={value ?? inputData}
            placeholder={placeholder}
            onBlur={onBlur}
            onFocus={onFocus}
            onChange={onChange ?? onChangeInputData}
            onKeyDown={onKeyDown}
        />
    )
}