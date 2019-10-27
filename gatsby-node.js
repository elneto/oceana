//programmatically creates the pages
const patho = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query MyQuery {
      allEntitySubqueuePages {
        edges {
          node {
            relationships {
              items {
                id
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

  result.data.allEntitySubqueuePages.edges[0].node.relationships.items.map(
    ({ id, path }) => {
      //console.log(id, path.alias)
      createPage({
        path: path.alias,
        component: patho.resolve(`./src/templates/page.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          id: id,
        },
      })
    }
  )
}
