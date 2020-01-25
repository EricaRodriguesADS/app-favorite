import React, {FC} from 'react';
import { Col } from 'antd';
import { Card } from 'antd';
import 'antd/dist/antd.css';

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
  return(<Col xs={{ span: 12, offset: 1 }} md={colSize}> 
    <Card
      size="small"
      hoverable
      cover={<img alt={alt} src={src} />}
    >
      <Meta title={title} description={description} />
    </Card>
  </Col>)
}

export default CardImagem
