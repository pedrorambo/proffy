import React, {InputHTMLAttributes} from "react";

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    label?: string;
    grouped?: boolean;
}

const Input: React.FC<InputProps> = ({label, name, grouped = false, ...rest}) => {
    return (
        <div className={grouped ? "input-block input-block-margin-none" : "input-block"}>
            {label && <label htmlFor={name}>{label}</label>}
            <input id={name} {...rest}/>
        </div>
    );
}

export default Input;
