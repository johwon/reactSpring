import React, { useRef, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import Button from 'react-bootstrap/Button';

export default function Question() {
  //변수
  const url = 'http://localhost:8080/survey/view/1';
  const [item, setItem] = useState([]);
  const [rdo, setRdo] = useState();
  const navigate = useNavigate();

  //이벤트멤버함수(화살표): 공동
  //서버에게 요청하는 방식(fetch)
  function getItem(url) {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItem(data);
      });
  }
  //라디오버튼을 눌렀을때 상태값 저장
  const handelOptionChange = (e) => {
    setRdo(e.target.value);
  };

  //서버로부터 데이터 요청(화면이 랜더링이 될 때=마운트요청)
  useEffect(() => {
    //get 방식으로 서버에게 요청
    getItem(url);
  }, []);

  //화면랜더링 {item}, map,filter
  return (
    <Container>
      <h2 className="text-center">{item.QUESTION}</h2>
      <label>
        <input
          className="ms-3"
          name="answer"
          type="radio"
          value="1"
          checked={rdo === '1'}
          onChange={handelOptionChange}
        />
        {item.ANS1}
      </label>
      <label>
        <input
          className="ms-3"
          name="answer"
          type="radio"
          value="2"
          checked={rdo === '1'}
          onChange={handelOptionChange}
        />
        {item.ANS2}
      </label>
      <label>
        <input
          className="ms-3"
          name="answer"
          type="radio"
          value="3"
          checked={rdo === '1'}
          onChange={handelOptionChange}
        />
        {item.ANS3}
      </label>
      <label>
        <input
          className="ms-3"
          name="answer"
          type="radio"
          value="4"
          checked={rdo === '1'}
          onChange={handelOptionChange}
        />
        {item.ANS4}
      </label>
      {/* 이벤트로 현정보를 서버에 보낸다 (post) */}
      <Button
        variant="outline-primary"
        className="m-3"
        onClick={() => {
          const form = new FormData();
          form.append('survey_idx', item.SURVEY_IDX);
          form.append('num', rdo);
          fetch('http://localhost:8080/survey/insert', {
            method: 'post',
            body: form,
          }).then(() => {
            navigate('/survey/summary');
          });
        }}
      >
        확인
      </Button>
    </Container>
  );
}
