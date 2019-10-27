import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Navbar, Nav, Container } from "react-bootstrap"
const CustomNavbar = ({ pageInfo }) => {
  //console.log(pageInfo)
  const data = useStaticQuery(graphql`
    query MyPagesQuery {
      allEntitySubqueuePages {
        edges {
          node {
            relationships {
              items {
                title
                path {
                  alias
                }
              }
            }
          }
        }
      }
    }
  `)
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
              {data.allEntitySubqueuePages.edges[0].node.relationships.items.map(
                ({ title, path }) => (
                  <Link to={path.alias} className="link-no-style">
                    <Nav.Link as="span" eventKey={title}>
                      {title}
                    </Nav.Link>
                  </Link>
                )
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
export default CustomNavbar
