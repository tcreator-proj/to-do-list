import { Row } from 'react-bootstrap';
import style from './Header.module.css';

function Header() {
  return (
    <Row as={"header"} className={style.header}>
      <h1 className={style.head}>
        to-do list
      </h1>
    </Row>
  )
}

export default Header;