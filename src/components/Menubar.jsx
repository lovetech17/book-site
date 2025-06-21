import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MainRouter from './MainRouter';
import { useLocation, useNavigate } from 'react-router-dom';

const Menubar = () => {
    const navi = useNavigate();
    const email = sessionStorage.getItem('email');
    const uid = sessionStorage.getItem('uid');
    const location = useLocation;
    const {pathname} = location;
    const baseName = process.env.PUBLIC_URL;

    const onLogout = (e) => {                       // 클릭하면 어디론가 가려고 하니 못가게, 프리벤트
        e.preventDefault();
        if(window.confirm('로그아웃 하실래요?'))
        {
            sessionStorage.clear();
            navi('/');
        }
    }
    return (
        <>
            <Navbar expand="lg" bg ='primary' data-bs-theme='dark'>
                <Container fluid>
                    <Navbar.Brand href={`${baseName}/`}>REACT</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href={`${baseName}/`}>Home</Nav.Link>
                            {email &&                               // 이메일이 있을때만, 장바구니를 보여줘줘
                            <Nav.Link href={`${baseName}/cart`} active={pathname==='/cart'&& true} >장바구니</Nav.Link>
                            }
                        </Nav>

                        <Nav>
                            {email ?        // 이메일 있으면 -> 로그아웃, 없으면 -> 로그인
                                <>
                                <Nav.Link href={'#'} active={true}>{email}</Nav.Link>   
                                 <Nav.Link href={'#'} onClick={onLogout}>로그아웃</Nav.Link>
                                </>
                                :
                                 <Nav.Link href={`${baseName}/login`} active={pathname === '/login' && true}>로그인</Nav.Link>
                            }
                           
                        </Nav>
                     
                    </Navbar.Collapse>
                </Container>
            </Navbar>
           <MainRouter/>
        </>
    )
}

export default Menubar
