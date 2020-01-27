import React from 'react';
import LayoutMain from '../../components/LayoutMain';
import { Layout, Menu, Icon,Row } from 'antd';

interface ICategoryProps {
  path: string;
}

const Category: React.FC<ICategoryProps> = () => {
  const { SubMenu } = Menu;
  const { Content, Sider } = Layout;

  return (
    <LayoutMain requireUnauth title='Categoria'>
      <Row type="flex" justify="center">
        <Layout>
          <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="car" />
                      Veículos
                    </span>
                  }
                >
                  <Menu.Item key="1">Pneus</Menu.Item>
                  <Menu.Item key="2">Ferramentas</Menu.Item>
                  <Menu.Item key="3">Som Automotivo</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon type="laptop" />
                      Informática
                    </span>
                  }
                >
                  <Menu.Item key="5">Notebook</Menu.Item>
                  <Menu.Item key="6">Pc de Mesa</Menu.Item>
                  <Menu.Item key="7">Monitores</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  title={
                    <span>
                      <Icon type="home" />
                      Imóveis
                    </span>
                  }
                >
                  <Menu.Item key="9">Apartamentos</Menu.Item>
                  <Menu.Item key="10">Casas</Menu.Item>
                  <Menu.Item key="11">Fazendas</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout>
              <Content
                style={{
                  background: '#fff',
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                Content
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </Row>
    </LayoutMain>
  )
}

export default Category





