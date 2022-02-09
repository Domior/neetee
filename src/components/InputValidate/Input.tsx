import React, { ChangeEvent, useState } from 'react';
import cl from './input.module.css';
import { validate } from './Validator';

type inputType = {
  addInputValue: (value: string, name: string) => void
  type: string
  typeV?: string
  name: string
  placeholder: string
  // validate: (value?: string, min?: number, max?: number, name?: string,type?:string) => string
  min: number
  max: number
}
export const InputValidate = ({ min, max, ...props }: inputType) => {
  let [value, setValue] = useState<any>('');
  let [error, setError] = useState<string>('');
  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setError('');
    setValue(e.currentTarget.value);
  };
  const alertFc = (value: string) => {
    props.addInputValue(value, props.name);
    // alert(`${Number(value)} ok, let's go further`)
  };
  const onValidate = () => {
    const error = validate(value, min, max, props.name, props.typeV);
    error ? setError(error) : alertFc(value);
  };
  const handleBlur = () => {
    onValidate();
  };
  const onKeyPressCallback = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onValidate();
    }
  };
  return (
    <div className={cl.wrapp}>
      <input type={props.type} value={value} onChange={onChangeValue}
             name={props.name} placeholder={props.placeholder}
             onBlur={handleBlur} className={!error ? cl.input : cl.errorInput}
             onKeyPress={onKeyPressCallback}
      />
      {error && <span className={cl.textError}>{error}</span>}
    </div>
  );
};
