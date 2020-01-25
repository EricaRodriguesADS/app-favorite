import React from 'react'
import LayoutMain from '../../components/LayoutMain'
import { Row, Col } from 'antd';

interface ICategoryProps {
  path: string
}

const Category: React.FC<ICategoryProps> = () => {
  return (
    <LayoutMain title='Categoria'>
      <Row type="flex" justify="center">
        <Col span={8}>
           <h1 style={{ textAlign:'center' }}>Encontrução a página de categoria :)</h1>     
        </Col>
      </Row>
    </LayoutMain>
  )
}

export default Category





