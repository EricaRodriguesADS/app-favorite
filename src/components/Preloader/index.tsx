import React, {FC, useState} from 'react'
import Preloader from './Pure'

interface IControlledPreloaderProps {
  /** Texto opcional */
  text?: string;
}

export const ControlledPreloader: FC<IControlledPreloaderProps> = ({ text}) => {
  const [percent, setPercent] = useState(0)

  const increase = () => {
    let newValue = percent + 10;
    if (newValue > 100) {
      newValue = 100;
    }
    setPercent(newValue);
  };

  const decline = () => {
    let newValue = percent - 10;
    if (newValue < 0) {
      newValue = 0;
    }
    setPercent(newValue );
  };

  return (
     <Preloader text={text} percent={percent} decline={decline} increase={increase}/>
  )
}

export default ControlledPreloader
