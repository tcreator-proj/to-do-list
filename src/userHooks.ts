import { FormEvent, FormEventHandler, useContext } from "react";
import { RadioType } from "./constant";
import { createFilterTag, createNewTaskItem, reactByClearClick, setInputTyping } from "./context/actionCreators";
import { ProgressbarContext, ToDoContext } from "./context/contexts";

function useFormHandlers() {
  const { dispatch } = useContext(ToDoContext);
  const progressbarDispatcher = useContext(ProgressbarContext).dispatch;

  const onChangeHandler: FormEventHandler = (evt: FormEvent) => {
    const target: HTMLInputElement = evt.target as HTMLInputElement;
    progressbarDispatcher(setInputTyping(target.value.length))
  }

  const onSubmitHandler: FormEventHandler = (evt: FormEvent) => {
    evt.preventDefault();
    const target: HTMLFormElement = evt.target as HTMLFormElement;
    const input: HTMLInputElement = target.elements[0] as HTMLInputElement;
    const formData: FormData = new FormData(target);
    const inputValue: string | undefined = formData.get("inputValue")?.toString();

    if (input) input.value = "";

    if (inputValue) {
      dispatch(createNewTaskItem(inputValue));
      progressbarDispatcher(setInputTyping(0))
    }
  }

  return { onSubmitHandler, onChangeHandler };
}

function useFilterPanel() {
  const { dispatch } = useContext(ToDoContext);

  const onFilterRadioHandler = (evt: FormEvent) => {
    const radio: HTMLInputElement = evt.target as HTMLInputElement;
    if (radio) {
      const id: RadioType | null = radio.dataset.id as RadioType;
      if (id) {
        dispatch(createFilterTag(id));
      }
    }
  }

  const onClickByClearButton = () => {
    dispatch(reactByClearClick())
  }

  return { onFilterRadioHandler, onClickByClearButton };
}


export { useFormHandlers, useFilterPanel }
