import React, {FC} from 'react';
import 'antd/dist/antd.css';
import { Menu} from 'antd';
import { routes } from '../../store'

export interface ICustomMenu {
  titulo: string; 
  route: string;
}

interface IMenuItem {
  stateKeys: string;
  onClickItem: (value:string) => void;
  customMenu?: ICustomMenu
}

const MenuItem: FC<IMenuItem> = ({stateKeys, onClickItem, customMenu}) => {
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
      {customMenu?.titulo ?
        <Menu.Item key={customMenu.route} 
         onClick={()=> onClickItem(customMenu.route) }>
         {customMenu.titulo} 
        </Menu.Item>
        : <>oi </>
      }
    </Menu>
  )
};

export default MenuItem