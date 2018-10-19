import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ({data}) => (
  <div>
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
  
  <div>
  {data.allMarkdownRemark.edges.map(({node}) =>(
    <div>
 <h1>{node.frontmatter.title} </h1>
 <p>{node.excerpt} </p>
 </div>
 
))}
    </div> 
    </div>
)

export default IndexPage
export const query =graphql`

query HomePageQuery{
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
  totalCount
  edges {
  node {
  id
 
  frontmatter {
  title
  date
  author
  }
  excerpt(pruneLength: 80)
  timeToRead
  }
  }
  }
  }
  `
