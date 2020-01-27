import React, {FC, useState, useEffect} from 'react';
import styled from 'styled-components'
import { Col, Card, Icon } from 'antd';
import 'antd/dist/antd.css';


const Link = styled(Card)`
  margin: 0;
  height: 185px; 
  width:150px;
  white-space: pre;
  :hover {
    background-color: #e2e2e2e3;
    height: 220px;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);

    .ant-card-meta-description{
      display: block;
    }
  }
  
  .ant-card-meta-title{
    color:#000;
  }

  .ant-card-meta-description{
    display:none;
  }
`
const IconCustom = styled(Icon)`
  position: absolute;
  top: 16px;
  right: 16px;
  border: none;
  cursor: pointer;
`


interface ICardImagemProps {
  src: string;
  title:string;
  description: string;
  alt: string;
  colSize: number
}

const CardImagem:FC<ICardImagemProps> = ({
  src, 
  title,
  description,
  alt,
  colSize,
}) => {
  const { Meta } = Card;
  const [statusMouse, setStatusMouse] = useState(false);

  const statusMouseOver = ()=>{
    setStatusMouse(true)
  }
  
  const statusMouseOut = ()=>{
    setStatusMouse(false)
  }

  return(<Col xs={{ span: 12, offset: 1 }} md={colSize} style={{ height: 392,
    marginBottom: '-78px',
    whiteSpace: 'nowrap', color: 'white'}}>
      <Link
        size="small"
        hoverable
        cover={<img alt={alt} src={src} />}
        onMouseOver={statusMouseOver}
        onMouseOut={statusMouseOut}
      >
       <Meta title={title} description={description} />
       {statusMouse ? <IconCustom type="heart" theme="twoTone" twoToneColor="#eb2f96" /> : <></>}
      </Link>
  </Col>)
}

export default CardImagem
