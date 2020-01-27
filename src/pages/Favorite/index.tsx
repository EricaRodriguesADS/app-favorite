import React from 'react'
import LayoutMain from '../../components/LayoutMain'
import { Row, Col } from 'antd';

interface IFavoriteProps {
  path: string
}

const Favorite: React.FC<IFavoriteProps> = () => {
  return (
    <LayoutMain requireAuth title='Favorito'>
      <Row type="flex" justify="center">
        <Col span={8}>
           <h1 style={{ textAlign:'center' }}>Encontrução a página de favorito :)</h1>     
        </Col>
      </Row>
    </LayoutMain>
  )
}

export default Favorite

