import React from 'react'
import { Form } from 'react-bootstrap';
import { RadioType } from '../../constant';
import style from './FilterPanel.module.css';

interface RadioButtonType {
  name: string
}

function RadioButton({name}: RadioButtonType) {

  return (
    <Form.Check className={style.radio}
      defaultChecked={name === RadioType.ALL || false}
      name="filter"
      type="radio"
      data-id={name}
    />
  )
}

export default React.memo(RadioButton);