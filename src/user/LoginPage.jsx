import React, { useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'

const LoginPage = () => {
        const basename = process.env.PUBLIC_URL;

        const [form, setForm] = useState({
                email: 'blue@inha.com',
                pass: '12341234'
        })

        const { email, pass } = form;

        const onChange = (e) => {                       // 어떤값을 입력 했는지 받는 함수
                setForm({
                        ...form,
                        [e.target.name]: e.target.value
                })
        };

        const onSubmit = (e) => {
                e.preventDefault();
                //로그인 체크
                if (email === '' || pass === '') {
                        alert('이메일 or 패스워드를 입력하세요!')
                } else {
                        // 로그인 체크
                }
        }

        return (
                <div>
                        <Row className='my-5 justify-content-center'>
                                <Col lg={4} md={6} xs={8}>
                                        <Card>
                                                <Card.Header>
                                                        <h5>로그인</h5>
                                                </Card.Header>
                                                <Card.Body>
                                                           <Form onSubmit={onSubmit}>
                                                                <Form.Control 
                                                                placeholder='email' 
                                                                value={email}
                                                                name='email' 
                                                                onChange={onChange} />
                                                                <Form.Control 
                                                                placeholder='password' 
                                                                value={pass}
                                                                type='password' 
                                                                name='pass' 
                                                                onChange={onChange} />
                                                                <Button type="submit" className='w-100'>로그인</Button>

                                                        </Form>
                                                        <div><a href={`${basename}/join`}>회원가입</a></div>
                                                </Card.Body>
                                        </Card>
                                </Col>
                        </Row>
                </div>
        )
}

export default LoginPage
