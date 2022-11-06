import React from 'react'
import { Form } from 'react-bootstrap';
import { RadioType } from '../../constant';
import { RadioButtonType } from '../../types';
import style from './filter-panel.module.css';

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