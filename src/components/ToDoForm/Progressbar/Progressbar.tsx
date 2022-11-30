import { useCallback, useContext } from 'react';
import { ProgressbarContext } from '../../../context/contexts';
import style from './Progressbar.module.css';

const barIndicatorList: number[] = Array.from({ length: 100 }).map((_, i) => i)

function Progressbar() {
  const { state } = useContext(ProgressbarContext);

  const makeProgressbarDots = useCallback((_: any, index: number) => {
    const count = state.inputCount;
    let styles = style.empty;

    if (index < count) {
      if (count < 5) {
        styles = style.overload;
      } else {
        styles = style.full;
      }
    }

    if (barIndicatorList.length <= count) {
      styles = style.overload
    }
    
    return (
      <div className={styles} key={index}></div>
    )
  }, [state.inputCount])

  return (
    <div className={style.bar}>
      {barIndicatorList.map(makeProgressbarDots)}
    </div>
  )
}

export default Progressbar;