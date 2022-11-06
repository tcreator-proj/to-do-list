import React, { useContext } from 'react';
import { ProgressbarContext } from '../../../context/contexts';
import style from './progressbar.module.css';

const barIndicatorList: number[] = Array.from({ length: 100 }).map((_, i) => i)

function Progressbar() {
  const { state } = useContext(ProgressbarContext);

  return (
    <div className={style.bar}>
      {barIndicatorList.map((_, index: number) => {
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
      })
      }
    </div>
  )
}

export default React.memo(Progressbar);