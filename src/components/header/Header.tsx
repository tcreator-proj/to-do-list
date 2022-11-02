import React from 'react'
import { Col, Row } from 'react-bootstrap';
import style from './header.module.css';

function Header() {
  return (
    <Row className={style.header}>
        <h4 className={style.head}>
          to-do list
        </h4>
    </Row>
  )
}



export default Header