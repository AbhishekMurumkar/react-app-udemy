import React from "react";
import styles from "./Input.module.css";

let input = (props) => {
//   console.log(props)
  let inputElement = null;
  var inputClasses = [];
  let invalidMsg = null;
  inputClasses.push(styles.InputElement)
  if(props.touched){
      if(props.invalid && props.shouldValidate) {
          inputClasses.push(styles.Invalid);
          invalidMsg=props.invalidMsg;
        }else if(!props.invalid && props.shouldValidate){
            inputClasses.push(styles.Valid);
            invalidMsg=null;
      }
  }
//   console.log(inputClasses);
  let inputClassesString = inputClasses.join(" ");

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClassesString}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={inputClassesString}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={inputClassesString}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map((e) => {
            return (
              <option
                key={e.displayValue}
                value={e.value}
                disabled={e.disabled}
                selected={e.selected}
              >
                {e.displayValue}
              </option>
            );
          })}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClassesString}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
  }
  return (
    <div className={styles.Input}>
      <label className={styles.Label}>{props.label}</label>
      {inputElement}
      {invalidMsg!=null? <p className={styles.ValidationError}>{invalidMsg}</p>:null}
    </div>
  );
};
export default input;
