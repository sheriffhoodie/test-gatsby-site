import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Nav from '../../components/nav';

const Post = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  const stdImgSrc = data.mdx.frontmatter.hero_image.childImageSharp.gatsbyImageData.images.fallback.src;

  const gatsbyImgStyles = {
    border: '20px solid black'
  }
  
  return (
    <main>
      <title>{data.mdx.frontmatter.title}</title>
      <Nav></Nav>
      <div className="post">
        <p>{data.mdx.frontmatter.datePublished}</p>

        <div className="hero-container">
          <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} style={gatsbyImgStyles}/>
        </div>
        <p>Photo Credit: <a href={data.mdx.frontmatter.hero_image_credit_link} target="_blank">{data.mdx.frontmatter.hero_image_credit_text}</a></p>

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
        hero_image_alt
        hero_image_credit_text
        hero_image_credit_link
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`

export default Post;