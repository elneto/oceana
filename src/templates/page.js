import React from "react"
import { Link, graphql } from "gatsby"
import { Container } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Page = ({ data }) => {
  const page = data.allNodePage.edges[0].node
  //console.log(page.title)
  return (
    <Layout pageInfo={{ pageName: page.title }}>
      <SEO title={page.title} />
      <Container className="mt-5">
        <h1>{page.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: page.body.value }} />
        <Link to="/">Go back to the homepage</Link>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery($id: String!) {
    allNodePage(filter: { id: { eq: $id } }) {
      edges {
        node {
          id
          title
          body {
            value
          }
        }
      }
    }
  }
`

export default Page
