import * as React from 'react';
import Nav from '../components/nav';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const BlogPage = ({ data }) => {

  return (
    <main>
      <title>Blog Posts</title>
      <Nav></Nav>

      <h1>All Posts</h1>

      {
        data.allMdx.nodes.map(node => (
          <div key={node.id} className="post-container">
            <h3>{node.frontmatter.title}</h3>
            <p>{node.frontmatter.datePublished}</p>
            <MDXRenderer>{node.body}</MDXRenderer>
          </div>
        ))
      }

    </main>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___datePublished, order: DESC}) {
      nodes {
        frontmatter {
          datePublished(formatString: "MM/DD/YYYY")
          author
          title
        }
        id
        body
      }
    }
  }`

// export const query = graphql`
// query {
//   allFile(sort: {fields: name}, filter: {sourceInstanceName: {eq: "blog"}}) {
//     nodes {
//       name
//     }
//   }
// }`

export default BlogPage;