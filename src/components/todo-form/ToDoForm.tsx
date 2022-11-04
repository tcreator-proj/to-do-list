import { Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { FormTypes } from '../types/propTypes';
import style from './todo-form.module.css';

function ToDoForm({onSubmitHandler, inputRef}: FormTypes) {
  return (
    <Row className={style.row}>
      <Form onSubmit={onSubmitHandler}>
        <Form.Group controlId="task-input">
          <Form.Control 
            name='inputValue'
            minLength={5}
            maxLength={100}
            className={style.input} 
            ref={inputRef} type="text" 
            placeholder="What's need to be done?" />
        </Form.Group>
      </Form>
    </Row>
  );
}

export default ToDoForm;