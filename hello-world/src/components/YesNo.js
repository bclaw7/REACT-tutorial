import React, { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonAndCount from './ButtonAndCount';

const YesNo = (props) => {
  return (
    <Container>
      <Row style={{ height: '100%', width: '100%' }}>
        <Col xl={12}>
          <h1>{props.name}, Do You Love Me?</h1>
        </Col>
        <Col xl={6}>
          <ButtonAndCount classN='YesButton' bValue='Yes' />
        </Col>
        <Col xl={6}>
          <ButtonAndCount classN='NoButton' bValue='No' />
        </Col>
      </Row>
    </Container>
  );
};

export default YesNo;
