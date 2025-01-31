import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export default function Count() {
  let [count, setCount] = useState(0);
  let increase = () => {
    setCount(count + 1);
    console.log('count = ' + count);
  };
  return (
    <Container className="mt-3 text-center">
      <Button variant="outline-danger" onClick={increase}>
        Danger
      </Button>
      {count}
    </Container>
  );
}
