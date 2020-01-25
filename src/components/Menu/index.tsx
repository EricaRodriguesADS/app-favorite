import React, { useState } from 'react'
import MenuItem from './pure'
import { useLocation } from 'wouter'

const  ControlledMenu = () => {
  const [location, setLocation] = useLocation();
  const[currentKeys, setCurrentKeys] = useState(location);

  const onClickItem = (url:string) => {
    setCurrentKeys(url);
    setLocation(url);
  }

  return(<MenuItem stateKeys={currentKeys} onClickItem={onClickItem} />)
}

export default ControlledMenu;