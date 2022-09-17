import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../styles/ServiceDash.css'
import { FaCar, FaBusinessTime, FaRoad } from 'react-icons/fa'
import { CgPerformance } from 'react-icons/cg'
const ServiceCards = () => {
  return (
    <Container className="p-5 text-center">
      <Row>
        <Col className="font-monospace pt-5 pb-1">
          <h1>Our Services</h1>
        </Col>
      </Row>
      <Row>
        <Col className="px-5">
          <Row>
            <Col className="icons">
              <FaCar />
            </Col>
          </Row>
          <Row>
            <h4>Test Drive Our Cars!</h4>
          </Row>
          <Row>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
          </Row>
        </Col>
        <Col className="px-5">
          <Row>
            <Col className="icons">
              <CgPerformance />
            </Col>
          </Row>
          <Row>
            <h4>Performance Enhancements</h4>
          </Row>
          <Row>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
          </Row>
        </Col>
        <Col className="px-5">
          <Row>
            <Col className="icons">
              <FaBusinessTime />
            </Col>
          </Row>
          <Row>
            <h4>Open 24/7 For Gold Members</h4>
          </Row>
          <Row>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
          </Row>
        </Col>
        <Col className="px-5">
          <Row>
            <Col className="icons">
              <FaRoad />
            </Col>
          </Row>
          <Row>
            <h4>onRoad Service Easily</h4>
          </Row>
          <Row>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
export default ServiceCards
