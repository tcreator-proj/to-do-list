import React from 'react'
import { Row } from 'react-bootstrap';
import style from './header.module.css';

function Header() {
  return (
    <Row className='header-block {style["header-block"]}'>
      <h4 className={style.head}>
        to-do list
      </h4>
    </Row>
  )
}



export default Header