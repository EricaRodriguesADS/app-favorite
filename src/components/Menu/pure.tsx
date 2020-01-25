import React, {FC} from 'react';
import 'antd/dist/antd.css';
import { Menu} from 'antd';
import { routes } from '../../store'

interface IMenuItem {
  stateKeys: string;
  onClickItem: (value:string) => void
}

const MenuItem: FC<IMenuItem> = ({stateKeys, onClickItem}) => {
  console.log(stateKeys)
  return(
    <Menu
      theme="dark"
      mode="horizontal"
      selectedKeys={[stateKeys]}
      style={{ lineHeight: '64px' }}
    >
      <Menu.Item key={routes.home} onClick={()=> onClickItem(routes.home)}>Home</Menu.Item>
      <Menu.Item key={routes.category} onClick={()=> onClickItem(routes.category)}>Categoria</Menu.Item>
      <Menu.Item key={routes.favorite} onClick={()=> onClickItem(routes.favorite)}>Favorito</Menu.Item>
    </Menu>
  )
};

export default MenuItem