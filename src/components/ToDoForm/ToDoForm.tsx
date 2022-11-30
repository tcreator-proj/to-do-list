import React from 'react';
import { Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Progressbar from './Progressbar/Progressbar';
import style from './todo-form.module.css';
import { useFormHandlers } from './ToDoForm.hooks';

function ToDoForm() {
  const { onSubmitHandler, onChangeHandler } = useFormHandlers();

  return (
    <Row className={style.row} onSubmit={onSubmitHandler}>
      <Form>
        <Form.Group controlId="task-input">
          <Form.Control
            name='inputValue'
            minLength={5}
            maxLength={100}
            className={style.input}
            onChange={onChangeHandler}
            type="text"
            placeholder="What's need to be done?" />
        </Form.Group>
      </Form>
      <Progressbar />
    </Row>
  );
}

export default React.memo(ToDoForm);