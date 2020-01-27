import React, { useState, useEffect } from 'react'
import { fbAuth } from '../../services/firebase'
import MenuItem, { ICustomMenu } from './pure'
import { useLocation } from 'wouter'
import { routes } from '../../store'

const  ControlledMenu = () => {
  const [user, setUser ] = useState();
  const [location, setLocation] = useLocation();

  const[currentKeys, setCurrentKeys] = useState(location);
  const [customMenu, setCustomMenu] = useState<ICustomMenu>({titulo: 'Faça seu login', route: routes.auth});

  useEffect(() => {
      setUser(fbAuth.currentUser);
  },[user,fbAuth.currentUser])

  useEffect(()=>{
    if(user) setCustomMenu({titulo: 'Seu perfil', route: routes.auth })
    else { 
      setCustomMenu({titulo: 'Faça seu login', route: routes.auth});
    }
  },[customMenu.route, user])

  const onClickItem = (url:string) => {
    setCurrentKeys(url);
    setLocation(url);
  }

  return(<MenuItem stateKeys={currentKeys} onClickItem={onClickItem} customMenu={customMenu} />)
}

export default ControlledMenu;