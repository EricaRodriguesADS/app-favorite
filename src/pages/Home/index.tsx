import React from 'react'
import styled from 'styled-components'

import { Row, Col } from 'antd';
import { Card } from 'antd';
import 'antd/dist/antd.css';

import LayoutMain from '../../components/LayoutMain'
import ControlledSearch from '../../components/Search' 
import CardImagem from '../../components/CardImagem';


const SectionHeader = styled.div`
  padding: 30px 0;
` 
const Subtitle = styled.h2`
  line-height: 32px;
  font-weight: 200;
  color: #333;
`

interface IHomeProps {
  path: string
}


const Home: React.FC<IHomeProps> = () => {
  return (
    <LayoutMain title='Home'>   
      <Row type="flex" justify="center">
        <Col span={8}>
        <ControlledSearch/>    
        </Col>
      </Row>
      <SectionHeader>
        <Subtitle>Categorias em destaques</Subtitle>
      </SectionHeader>
      <Row type="flex" justify="space-around" align="middle"  gutter={[24, 16]}>
        <CardImagem 
           alt="Blusa" 
           src="https://images-americanas.b2w.io/produtos/01/00/img/133861/8/133861891_1GG.jpg" 
           title="Blusa"
           description="Blusa Feminina"
           colSize={3}
        />
       <CardImagem 
           alt="Camisa" 
           src="https://images-americanas.b2w.io/produtos/01/00/img/38256/5/38256579_1GG.jpg" 
           title="Blusa"
           description="Camiseta Lisa"
           colSize={3}
        />
        <CardImagem 
           alt="Notebook" 
           src="https://images-americanas.b2w.io/produtos/01/00/img/134410/9/134410961_1GG.jpg" 
           title="Notebook"
           description="Notebook Samsung"
           colSize={3}
        />
        <CardImagem 
           alt="Notebook" 
           src="https://images-americanas.b2w.io/produtos/01/00/img/471642/0/471642093_1GG.jpg" 
           title="Notebook"
           description="Notebook Lenovo"
           colSize={3}
        />
      </Row>
    </LayoutMain>
  )
}

export default Home;

