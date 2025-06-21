import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { app } from '../../firebase'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from "react-router-dom";


const JoinPage = () => {
  const auth = getAuth(app); // 파이어 베이스 인증 
  const [loading, setLoading] = useState(false);
  const navi = useNavigate();  // 회원 가입하면 로그인 페이지로 이동
  const basename = process.env.PUBLIC_URL;
  const [form, setForm] = useState({
    email: 'blue@inha.com',
    pass: '12341234'
  });

  const { email, pass } = form;

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || pass === "") {
      alert("input your email or password");
    } else {
      if (window.confirm('정말로 회원가입할래요?'))

        setLoading(true);
      createUserWithEmailAndPassword(auth, email, pass)
        .then(success => {
          alert('회원가입성공');
          setLoading(false);
          navi('/login');
        })
        .catch(error => {
          setLoading(false);
          alert('회원가입에러')

        })


    }
  };

  if (loading) return <h1>로딩중...</h1>
  return (
    <div>
      <Row className="justify-content-center my-5">
        <Col lg={4} md={6} xs={8}>
          <Card>
            <Card.Header>
              <h5>회원가입</h5>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={onSubmit}>
                <Form.Control
                  className="mb-2"
                  name="email"
                  value={email}
                  onChange={onChange}
                />
                <Form.Control
                  type="password"
                  className="mb-2"
                  name="pass"
                  value={pass}
                  onChange={onChange}
                />
                <Button type="submit" className="w-100">
                  회원가입
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default JoinPage;
