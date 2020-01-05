import React from 'react'
import SEO from '../../components/seo'
import Layout from "gatsby-theme-blog/src/components/layout"
import CoursesList from '../../components/courses-list'
import { Styled } from 'theme-ui'

const Courses = () => {
  return (
    <Layout title="floating.point" location={{ pathname: '/courses/react' }}>
      <SEO title="Courses" />

      <Styled.p>These are all of my courses:</Styled.p>

     <CoursesList />
    </Layout>
  )
}

export default Courses