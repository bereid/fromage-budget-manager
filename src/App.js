import React from 'react';
import DoughnutChartDemo from './components/Donut';
import ScrollWidget from './components/ScrollWidget';
import { Row, Col } from 'reactstrap';

const App = ({ props }) => (
  <Row>
    <Col sm="2"><ScrollWidget/></Col>
    <Col sm="7"><DoughnutChartDemo budget={props} /></Col>
    <Col sm="3"><ScrollWidget/></Col>
  </Row>
)

export default App;
