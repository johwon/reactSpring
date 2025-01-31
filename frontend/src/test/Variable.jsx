import React from 'react';
import { Container } from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

export default function Variable() {
  //멤버변수
  let name = 'zeus';
  let message = 'hello';
  return (
    <Container>
      <div className="d-grid gap-2 mt-3">
        <Button variant="primary" size="lg">
          {name}
        </Button>
        <Button variant="secondary" size="lg">
          {message}
        </Button>
      </div>
    </Container>
  );
}
