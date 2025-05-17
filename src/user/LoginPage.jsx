import React, { useState } from 'react'

const LoginPage = () => {
        const basename = process
        const [form,setForm] = useState({
                email:'blue@inha.com',
                pass:'12341234'
        })

        const{email,pass} = form;
        const onChange = (e) =>{
                setForm({
                ...form,
                [e.target.name]:e.target.value
        })};

        const onSubmit = (e) => {
                e.preventDefault();
                //로그인 체크
                if(email===''|| pass==''){
                        alert =''

                }
        }

  return (
    <div>
      <Row className='my-5 justify-content-center'>
        <Col lg={4} md={6}>
        <Card>
                <Card.Header>
                        <h5>로그인</h5>
                </Card.Header>
                <Card.Body>
                        <Form>
                                <Form.Control placeholder='email' onChange={onChange}/>
                                <Form.Control placeholder='password'type='password' name='pass'/>
                                <Button type="submit" className='w-100'>로그인</Button>

                        </Form>
                        <div><a href={'${basename}/join'}>회원가입</a></div>
                </Card.Body>
        </Card>
        </Col>
      </Row>
    </div>
  )
}

export default LoginPage
