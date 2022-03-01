import * as React from "react";
import Nav from '../components/nav';
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import '../styles/main.scss';

// Homepage
const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  console.log(data);
  return (
    <main data-page-id="home">
      <title>Home Page</title>
      <Nav></Nav>
      <h1>This is a Gatsby site called: {data.site.siteMetadata.title}</h1>

      <img src="https://cms.nhl.bamgrid.com/images/assets/binary/301041748/binary-file/file.svg" alt="" width="400" />
      
      <StaticImage alt="kitten" src="https://placekitten.com/800/600"/>
    </main>
  )
}

export default IndexPage
