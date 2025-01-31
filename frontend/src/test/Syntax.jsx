import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Syntax() {
  return (
    <Container className="">
      <h2 className="text-center p-2">기본문법</h2>
      <div className="d-flex justify-content-center">
        <ListGroup as="ol" numbered className="w-50">
          <ListGroup.Item action variant="secondary" href="/test/variable">
            변수
          </ListGroup.Item>
          <ListGroup.Item action variant="secondary" href="/test/state">
            STATE
          </ListGroup.Item>
          <ListGroup.Item action variant="secondary" href="/test/count">
            카운트
          </ListGroup.Item>
          <ListGroup.Item action variant="secondary" href="/test/loop">
            반복문
          </ListGroup.Item>
        </ListGroup>
      </div>
    </Container>
  );
}
