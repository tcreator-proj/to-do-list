import { useContext, useCallback } from 'react'
import { Col, Form, Row } from 'react-bootstrap';
import { RadioType } from '../../constant';
import { ToDoContext } from '../../context/contexts';
import { useFilterPanel } from './FilterPanel.hooks';
import style from './FilterPanel.module.css';
import RadioButton from './RadioButton';

function FilterPanel() {
  const { state } = useContext(ToDoContext);
  const { onFilterRadioHandler, onClickByClearButton } = useFilterPanel();

  const filteredCount = useCallback((): number => {
    return state.orderedItem.filter(
      (itemID: string) => state.items.get(itemID)?.show
    ).length;
  }, [state.orderedItem.length])

  return (
    <Row as={'nav'} className={style.panel}>
      {
        !!state.orderedItem.length
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

export default FilterPanel;