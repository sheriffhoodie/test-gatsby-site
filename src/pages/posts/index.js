import * as React from 'react';
import Nav from '../../components/nav';
import { Link, graphql } from 'gatsby';

const BlogPage = ({ data }) => {

  return (
    <main>
      <title>Blog Posts</title>
      <Nav></Nav>

      <h1>All Posts</h1>

      {
        data.allMdx.nodes.map(node => (
          <div key={node.id} className="post-container">
            <p>{node.frontmatter.datePublished}</p>
            <h3><Link to={`/posts/${node.slug}`}>{node.frontmatter.title}</Link></h3>
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
        slug
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