import React from 'react'
import { Form } from 'react-bootstrap';
import { RadioButtonType } from '../types/propTypes';
import style from './filter-panel.module.css';

function RadioButton({name}: RadioButtonType) {

  return (
    <Form.Check className={style.radio}
      defaultChecked={name === "all" || false}
      name="filter"
      type="radio"
      id={name}
    />
  )
}

export default RadioButton