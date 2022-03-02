import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Nav from '../../components/nav';

const Post = ({ data }) => {
  return (
    <main>
      <title>{data.mdx.frontmatter.title}</title>
      <Nav></Nav>
      <div className="post">
        <p>{data.mdx.frontmatter.datePublished}</p>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </div>
    </main>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        datePublished(formatString: "MM/DD/YYYY")
        author
      }
      body
    }
  }
`

export default Post;