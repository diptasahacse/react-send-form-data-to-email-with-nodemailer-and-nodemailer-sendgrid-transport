import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function App() {
  const formHandler = (event) => {
    event.preventDefault();
    console.log(event.target)

  }
  return (
    <div>
      <Container>
        <div className='mt-5'>
          <h2 className='text-center my-5 bg-primary text-white p-3 border border-4 rounded border-success'>Node Mailer form</h2>
          <Form onSubmit={formHandler} className='border border-3 border-success rounded p-5'>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Phone</Form.Label>
                <Form.Control name='phone'  type="tel" placeholder="Phone" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control  name='address'  placeholder="1234 Main St" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control placeholder='city' />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control  placeholder='zip' />
              </Form.Group>
            </Row>

            <Button variant="primary" type="submit">
              Send
            </Button>
          </Form>
        </div>
      </Container>

    </div>
  );
}

export default App;
