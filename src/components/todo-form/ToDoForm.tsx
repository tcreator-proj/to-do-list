import { FormEvent, FormEventHandler, useCallback, useEffect, useMemo, useState } from 'react';
import { Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { FormTypes } from '../types/propTypes';
import Progressbar from './progressbar/Progressbar';
import style from './todo-form.module.css';

function ToDoForm({onSubmitHandler, inputRef}: FormTypes) {

  const [progress, setProgress] = useState(0);
  const onProgressHandler: FormEventHandler = useCallback(() => {
    const inputString: string | undefined = inputRef.current?.value;
    
    if(inputString) {
      setProgress(() => inputString.length)
    }
  }, [inputRef.current?.value]);

  return (
    <Row className={style.row}>
      <Form onSubmit={onSubmitHandler}>
        <Form.Group controlId="task-input">
          <Form.Control 
            name='inputValue'
            minLength={5}
            maxLength={100}
            className={style.input}
            onChange={onProgressHandler}
            ref={inputRef} type="text" 
            placeholder="What's need to be done?" />
        </Form.Group>
      </Form>
      <Progressbar count={progress} />
    </Row>
  );
}

export default ToDoForm;