import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import { graphql } from "gatsby"
//import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const styleBG = {
  width: "100%",
  height: "89vh",
  backgroundPosition: "bottom center",
  backgroundSize: "cover",
}

const IndexPage = ({ data }) => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <BackgroundImage
      fluid={
        data.allEntitySubqueueHomepage.edges[0].node.relationships.items[0]
          .relationships.field_image.localFile.childImageSharp.fluid
      }
      Tag="section"
      style={styleBG}
    >
      <Container style={{ position: "relative", top: "30%" }}>
        <Row>
          <Col>
            <h1 class="mx-auto" id="cover-title">
              2020 UN Ocean Conference
            </h1>
          </Col>
        </Row>
      </Container>
    </BackgroundImage>
  </Layout>
)

export const query = graphql`
  {
    allEntitySubqueueHomepage {
      edges {
        node {
          relationships {
            items {
              title
              body {
                value
              }
              relationships {
                field_image {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 2000) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
