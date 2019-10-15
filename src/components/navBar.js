import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav, Container } from "react-bootstrap"
const CustomNavbar = ({ pageInfo }) => {
  //console.log(pageInfo)
  return (
    <>
      <Navbar variant="light" expand="lg" id="site-navbar">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
              <Link to="/" className="link-no-style">
                <Nav.Link as="span" eventKey="index">
                  Home
                </Nav.Link>
              </Link>
              <Link to="/page-2" className="link-no-style">
                <Nav.Link as="span" eventKey="page-2">
                  About
                </Nav.Link>
              </Link>
              <Link to="/page-2" className="link-no-style">
                <Nav.Link as="span" eventKey="page-2">
                  Programme
                </Nav.Link>
              </Link>
              <Link to="/page-2" className="link-no-style">
                <Nav.Link as="span" eventKey="page-2">
                  Documentation
                </Nav.Link>
              </Link>
              <Link to="/page-2" className="link-no-style">
                <Nav.Link as="span" eventKey="page-2">
                  Participate
                </Nav.Link>
              </Link>
              <Link to="/page-2" className="link-no-style">
                <Nav.Link as="span" eventKey="page-2">
                  News & Media
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
export default CustomNavbar
