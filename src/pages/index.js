import React from "react"
import { Link } from "gatsby"
import { Styled } from "theme-ui"

import Layout from "gatsby-theme-blog/src/components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout title="floating.point" location={{ pathname: '/root' }}>
    <SEO title="Home" />

    <Styled.p>Hey, I'm Tiago, a software developer working with JavaScript, mainly using React, Node and GraphQL.</Styled.p>
    <br />
    <div>
      <Styled.p>I use <Styled.b>floating.point</Styled.b> as a <Styled.b>dev blog</Styled.b>, a small place on the web where I write about
        interesting stuff I learn, research and where I'm also writing a complete free and open source course on React: {'  '}
        <Styled.a as={Link} to='/courses/react'>React from Zero to Overkill</Styled.a> for everyone.
      </Styled.p>
    </div>

    <div>
      <Styled.p>If you're wondering where to get started:</Styled.p>
      <Styled.ul>
        <Styled.li><Link to="/blog">Blog</Link></Styled.li>
        <Styled.li><Link to="/courses">Courses</Link></Styled.li>
      </Styled.ul>
    </div>
    
  </Layout>
)

export default IndexPage
