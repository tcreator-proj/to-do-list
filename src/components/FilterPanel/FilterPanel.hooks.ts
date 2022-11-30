import { useContext, FormEvent } from "react";
import { RadioType } from "../../constant";
import { createFilterTag, reactByClearClick } from "../../context/actionCreators";
import { ToDoContext } from "../../context/contexts";

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

export {useFilterPanel}