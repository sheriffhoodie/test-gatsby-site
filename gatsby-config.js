module.exports = {
    siteMetadata: {
      title: `Test Gatsby Site`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
      'gatsby-plugin-sass',
      'gatsby-plugin-image',
      'gatsby-plugin-sharp',
      'gatsby-plugin-mdx',
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: `blog`,
          path: `${__dirname}/blog`,
        }
      },
    ]
}