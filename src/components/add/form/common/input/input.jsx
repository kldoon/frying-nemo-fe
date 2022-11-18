import React from "react";
import './input.css';

/**
 * renders an input element
 * @param { React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &{
 * label?:string;
 * }} props
 */
const Input = props => {
  const { label, ...inputprops } = props;
  return (
    <div className="input-group">
      {label ? 
      (<label>
       <span>{label}</span> 
       &nbsp;
       {inputprops.required && <span style={{color :"red"}}> *</span>}
        </label> 
        ): null}
      <input {...inputprops} />
    </div>
  );
};
export default Input;