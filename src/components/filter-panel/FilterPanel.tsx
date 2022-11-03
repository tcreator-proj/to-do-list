import React from 'react'
import { Col, Form, Row } from 'react-bootstrap';
import style from './filter-panel.module.css';
import RadioButton from './RadioButton';

function FilterPanel() {
  return (
    <Row className={style.panel}>
      <Col>0</Col>
      <Col className={style['panel-buttons']}>
        <Form className={style.form}>
          {["all", "checked", "unchecked"].map((el: string) => <RadioButton name={el} /> )}
        </Form>
      </Col>
      <Col>R</Col>
    </Row>
  )
}

export default FilterPanel;