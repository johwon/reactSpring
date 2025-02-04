import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router';

function ProductItem({ product_code, product_name, price, filename }) {
  let loading = false;
  const url = `http://localhost:8080/static/images/${filename}`;
  if (loading) {
    return <div>loading</div>;
  } else {
    let img = '';
    if (filename !== '-') {
      img = `<img src=${url} width='100px' height='100px'/><br />`;
    } else {
      img = '[상품 이미지 미등록]<br />';
    }
    return (
      <Card style={{ width: '8rem' }}>
        <span dangerouslySetInnerHTML={{ __html: img }}></span>
        <Link to={`/product/detail/${product_code}`}  >
          <Card.Body>
            <Card.Title>{product_name}</Card.Title>
            <Card.Text>가격: {price}원</Card.Text>
          </Card.Body>
        </Link>
      </Card>
    );
  }
}

export default ProductItem;
