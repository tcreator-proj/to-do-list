import React from 'react'
import { Form } from 'react-bootstrap';
import { RadioType } from '../types/constants';
import { RadioButtonType } from '../types/propTypes';
import style from './filter-panel.module.css';

function RadioButton({name}: RadioButtonType) {

  return (
    <Form.Check className={style.radio}
      defaultChecked={name === RadioType.ALL || false}
      name="filter"
      type="radio"
      id={name}
    />
  )
}

export default React.memo(RadioButton);