import React from "react"
import { Link, graphql } from "gatsby"
import { Container } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Page = () => (
  <Layout pageInfo={{ pageName: "page-2" }}>
    <SEO title="Page two" />
    <Container class="mt-5">
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
)

export default Page
