import React from "react"
import { Row, Col, Container, ListGroup } from "react-bootstrap"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    {/* {console.log(
      data.allEntitySubqueueHomepage.edges[0].node.relationships.items[0]
    ) */}
    <Img
      fluid={
        data.allEntitySubqueueHomepage.edges[0].node.relationships.items[0]
          .relationships.field_image.localFile.childImageSharp.fluid
      }
      alt="todo"
      style={{ height: "100vh" }}
    />
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
