import React, { useContext } from 'react'
import { Col, Form, Row } from 'react-bootstrap';
import { RadioType } from '../../constant';
import { ToDoContext } from '../../context/contexts';
import { useFilterPanel } from '../../userHooks';
import style from './filter-panel.module.css';
import RadioButton from './RadioButton';

function FilterPanel() {
  const { state } = useContext(ToDoContext);
  const { onFilterRadioHandler, onClickByClearButton } = useFilterPanel();

  const filteredCount = (): number => state.orderedItem
    .filter((itemID: string) => state.items.get(itemID)?.show).length;

  return (
    <Row className={style.panel}>
      {
        !!state.orderedItem?.length
          ? <>
            <Col className="task-count">{filteredCount()}</Col>
            <Col>
              <Form className={style.form} onChange={onFilterRadioHandler}>
                {[RadioType.ALL, RadioType.COMPLETED, RadioType.UNCOMPLETED]
                  .map((battonType: string, i: number) =>
                    <RadioButton name={battonType} key={i} />)}
              </Form>
            </Col>
            <Col onClick={onClickByClearButton} className={style.clear}>R</Col>
          </>
          : <></>
      }

    </Row>
  )
}

export default React.memo(FilterPanel);