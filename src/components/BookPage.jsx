import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const BookPage = () => {
     const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <img src = {book.thumbnail||'https://placehold.co/100x150'}
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal
        size='lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>도서정보</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
         <Col img src = {book.thumbnail||'https://placehold.co/100x150'}></Col>
         <Col>
         <h5>{book.title}</h5>
         <div>판매가:{useBootstrapBreakpoints.sale_price}원</div>
         <div>저자:{book.authors}</div>
         </Col>
         </Row>
         <hr/>
         <div>{book.contents||'내용없음'}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );

}

export default BookPage
