import React, { FC } from 'react'
import { Progress, Button } from 'antd';

const ButtonGroup = Button.Group;

interface IPreloaderProps {
  /** Texto opcional */
  text?: string;
  percent: number;
  decline: () => void
  increase:() => void
}

export const Preloader: FC<IPreloaderProps> = ({ percent, decline, increase}) => {

  return (
    <div>
    <Progress type="circle" percent={percent} />
    <ButtonGroup>
      <Button onClick={decline} icon="minus" />
      <Button onClick={increase} icon="plus" />
    </ButtonGroup>
  </div>
  )
}

export default Preloader
