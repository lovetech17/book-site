import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Row, Col, Form, InputGroup, Button, Card } from 'react-bootstrap'
import BookPage from './BookPage';

const HomePage = () => {

    const [document, setDocument] = useState([]);             // 문서함수
    const [query, setQuery] = useState('리액트');             // 검색함수
    const [page, setPage] = useState(1);                      // 페이지함수
    const [last, setLast] = useState(1);

    const callingAPI = async () => {                        // 상품정보 db 연동!       
        const url = "https://dapi.kakao.com/v3/search/book?target=title"
        const config = {
            headers: { Authorization: "KakaoAK 56c7b0773cbedf7469d3bf02f7199522" },
            params: {
                query: query,
                size: 12,
                page: page
            }
        };
        const res = await axios.get(url, config);           // axios 데이터를 가져옴
        console.log(res);                                  // db 연동 성공여부 체크!
        setDocument(res.data.documents);                   // 상품정보db 문서함수에 입력 값 할당!
        setLast(Math.ceil(res.data.meta.pageable_count / 12));
    }

    useEffect(() => { callingAPI(); }, [page]);

    const onSubmit = (e) => {
        e.preventDefault();                                 // 폼을 전송 할때, 데이터를 새로 받지 않게
        if (query === '') {
            alert("검색어를 입력하세요!");
        } else {
            setPage(1);                                     // 검색을 누르면 1페이지 부터 보이게!
            callingAPI();
        }
    }
    return (
        <div>
            <h1 className='my-5 text-center'>HOME</h1>
            <Row className='mb-3'>
                <Col>
                    <Form onSubmit={onSubmit}>
                        <InputGroup>
                            <Form.Control onChange={(e) => setQuery(e.target.value)} value={query} />
                            <Button type="submit">검색</Button>
                        </InputGroup>
                    </Form>
                </Col>
                <Col></Col>
                <Col></Col>
            </Row>
            <Row>
                {document.map(doc =>                       // 받아온 db 문서를 반복해서 출력!
                    <Col g={2} md={3} xs={6} className='mb-3' key={doc.isbn}>
                        <Card>
                            <Card.Body>
                                <BookPage book ={doc}/>
                            </Card.Body>
                            <Card.Footer>
                                <div className='text-truncate' alt='책사진'>{doc.title}</div>
                                <div>{doc.sale_price}원</div>
                            </Card.Footer>
                        </Card>
                    </Col>
                )}
            </Row>
            <div className='text-center mt-4'>
                <Button disabled={page === 1} onClick={() => setPage(page - 1)}>이전</Button>
                <span>{page}/{last}</span>
                <Button disabled={page === last} onClick={() => setPage(page + 1)}>다음</Button>
            </div>
        </div>
    )
}
export default HomePage
