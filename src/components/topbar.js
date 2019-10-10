import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const Topbar = () => (
  <div id="top-bar">
    <Container>
      <Row>
        <Col className="top-links home-link">
          <ul>
            <li className="full-icon">
              <a href="/en">
                <i className="icon-home2"></i> Welcome to the United Nations
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Topbar
