import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export default function State() {
  //멤버변수(기본타입,객체타입), 멤버함수(계산함수, 이벤트함수)
  const [name, setName] = useState(['kdj', 'zeus', 'hgd']);
  return (
    <Container className="mt-3">
      <div className="d-grid gap-2">
        <Button variant="primary" size="lg">
          {name[0]}
        </Button>
        <Button variant="secondary" size="lg">
          {name[1]}
        </Button>
        <Button variant="dark" size="lg">
          {name[2]}
        </Button>
      </div>
    </Container>
  );
}
