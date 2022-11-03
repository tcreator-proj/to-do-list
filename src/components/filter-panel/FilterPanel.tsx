import React from 'react'
import { Col, Form, Row } from 'react-bootstrap';
import { RadioType } from '../types/constants';
import { FilterPanelType } from '../types/propTypes';
import style from './filter-panel.module.css';
import RadioButton from './RadioButton';

function FilterPanel({ count, onCheckedClear, onRadioClick }: FilterPanelType) {
  
  return (
    <Row className={style.panel}>
      {
        count
          ? <>
            <Col>{count}</Col>
            <Col className={style['panel-buttons']}>
              <Form className={style.form} onChange={onRadioClick}>
                {[RadioType.ALL, RadioType.COMPLETED, RadioType.UNCOMPLETED].map((el: string, i: number) => <RadioButton name={el} key={i}/>)}
              </Form>
            </Col>
            <Col onClick={onCheckedClear}>R</Col>
          </>
          : <></>
      }

    </Row>
  )
}

export default React.memo(FilterPanel);