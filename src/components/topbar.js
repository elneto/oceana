import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { IconContext } from "react-icons"
import { FaHome } from "react-icons/fa"

const Topbar = () => (
  <div id="top-bar">
    <Container>
      <Row>
        <Col>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ top: "2px" }}>
              <a href="//www.un.org/">
                <IconContext.Provider
                  value={{ size: "16px", className: "home-icon" }}
                >
                  <div>
                    <FaHome /> Welcome to the United Nations
                  </div>
                </IconContext.Provider>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Topbar
