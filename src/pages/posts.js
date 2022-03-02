import * as React from 'react';
import Nav from '../components/nav';
import { graphql } from 'gatsby';

const BlogPage = ({ data }) => {

  return (
    <main>
      <title>Blog Posts</title>
      <Nav></Nav>

      <h1>All Posts</h1>

      {
        data.allFile.nodes.map(node => (
          <p key={node.name}>{node.name}</p>
        ))
      }

    </main>
  )
}

export const query = graphql`
query {
  allFile(sort: {fields: name}, filter: {sourceInstanceName: {eq: "blog"}}) {
    nodes {
      name
    }
  }
}`

export default BlogPage;