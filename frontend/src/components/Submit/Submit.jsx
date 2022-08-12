import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Submit.css';

function Submit({onSubmit}) {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="ticker">
        <Form.Control type="text" placeholder="Enter a Ticker" />
      </Form.Group>
      <Button variant="success" type="submit" > 
        Submit
      </Button>
    </Form>
  );
}

export default Submit;