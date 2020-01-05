import React from 'react'
import SEO from '../../../components/seo'
import Layout from "gatsby-theme-blog/src/components/layout"
import { Link } from 'gatsby'

const root = '/blog/courses/react'

const ReactCourse = () => {
  return (
    <Layout title="floating.point" location={{ pathname: '/courses/react' }}>
      <SEO title="React Course" />
      React course outline

        <p>Go to dummy MD file of the course</p>
      <Link to={`${root}/introduction`}>0. Introduction</Link>
      <Link to={`${root}/test`}>1. Tets</Link>
    </Layout>
  )
}

export default ReactCourse