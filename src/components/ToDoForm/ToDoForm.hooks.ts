import { useContext, FormEventHandler, FormEvent } from "react";
import { setInputTyping, createNewTaskItem } from "../../context/actionCreators";
import { ToDoContext, ProgressbarContext } from "../../context/contexts";

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

export {useFormHandlers}