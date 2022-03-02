import * as React from "react";
import Nav from '../components/nav';
import { useStaticQuery, graphql } from "gatsby";
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
    </main>
  )
}

export default IndexPage
