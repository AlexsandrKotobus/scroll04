import React from "react";
import { useFormContext } from "react-hook-form";
import './CheckboxValid.css'

export const CheckboxValid = ({name, children}) => {
       
// получаем регистр из useFormContext()
const { 
    register,
    formState: {errors}
} = useFormContext();
// получаем текст ошибки из errors[name]
const error = errors[name]?.message;
    return (
    <label className="checkbox-wrapper">
        <input 
        type="checkbox" 
        className={(error ? 'error' : '') + ' checkbox-element'} 
        {...register(name)}
        />
        <p>{children}</p>
        <span>{error}</span>
        
    </label>
    );
}