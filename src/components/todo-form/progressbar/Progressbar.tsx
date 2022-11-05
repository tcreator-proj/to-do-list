import React from 'react';
import { ProgressbarType } from '../../types/propTypes'
import style from './progressbar.module.css';

function Progressbar({ count }: ProgressbarType) {
  const arr: number[] = [];
  for (let i = 1; i <= 100; i++) {
    arr.push(0);
  }

  return (
    <div className={style.bar}>
      {arr.map((el: unknown, i: number, a: number[]) => {
        let styles = style.empty;

        if(i < count) {
          if(count < 5) {
            styles = style.overload;
          } else {
            styles = style.full;
          }
        }

        if(a.length <= count) {
          styles = style.overload
        }
        return (
          <div className={styles} key={i}></div>
        )
      })
      }
    </div>
  )
}

export default React.memo(Progressbar);