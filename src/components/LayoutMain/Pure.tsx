import React, { FC } from 'react'
import styled from 'styled-components'

import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { Divider } from 'antd';

const ContentPage = styled.div`
  background-color: #fff;
  padding: 24px; 
  min-height: 280px;
`

interface ILayoutProps {
  title?: string;
  menu: JSX.Element
}

export const LayoutMain: FC<ILayoutProps> = ({
  children,
  title,
  menu,
}) => {
  const { Header, Content, Footer } = Layout;
  return (
    <Layout className="layout">
    <Header>{menu}</Header>
    <Content style={{ padding: '0 50px' }}>
      <Divider><h1>{title}</h1></Divider>
      <ContentPage>
        {children}
      </ContentPage>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Store ©2020 </Footer>
  </Layout>
  )
}

export default LayoutMain 
