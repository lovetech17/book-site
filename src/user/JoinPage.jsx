import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";



const JoinPage = () => {
     const basename = process.env.PUBLIC_URL;
  const [form, setForm] = useState({
    email: 'blue@inha.com',
    pass: "12341234",
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
      // join check
    }
  };

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
