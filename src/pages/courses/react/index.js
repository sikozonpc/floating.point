import React from 'react'
import SEO from '../../../components/seo'
import Layout from "gatsby-theme-blog/src/components/layout"
import { Link } from 'gatsby'
import { Styled } from "theme-ui"
import classes from './react.module.scss'
const root = '/blog/courses/react'

/**
 * React course page with the list of all the links
 */
const ReactCourse = () => {
  return (
    <Layout title="floating.point" location={{ pathname: '/courses/react' }}>
      <SEO title="React Course" />


      <Styled.h1 className={classes.title}>React from Zero to Overkill</Styled.h1>
      <div className={classes.container}>
        <div className={classes.card}>
          <img className={classes.sideLogo} src='https://res.cloudinary.com/ddfkf8qha/image/upload/v1580060385/floating%20point%20images/1200px-React-icon.svg_zrc4yw.png' />
        </div>

        <Styled.p>
          With this course my objective is provide a complete and free overview on how to build software 
          with React and JavaScript.
        </Styled.p>
        <Styled.p>
          Reading trough this archive you should expect modern React and good pratices.
          Another thing to note is this is an open-source project, meaning that you can contribute by 
          fixing typos, rewrite code, sugest topics, help me write the course outline, all contributions are welcomed.
        </Styled.p>

        <Styled.ol className={classes.courseList}>

          <Styled.li><Link to={`${root}/introduction`} className={classes.section}>0. Introduction</Link></Styled.li>
          <Styled.ul className={classes.ul}>
            <Styled.li className={classes.li}>0.0. <Link to={`${root}/introduction/what-is-react`}>Why and What is React?</Link></Styled.li>
            <Styled.li className={classes.li}>0.1. <Link to={`${root}/introduction/alternatives`}>Alternatives</Link></Styled.li>
            <Styled.li className={classes.li}>0.2. <Link to={`${root}/introduction/single-page-applications`}>Single Page Applications</Link></Styled.li>
          </Styled.ul>

          <Styled.li><Link to={`${root}/introduction`} className={classes.section}>1. Core concepts - Functional Components:</Link></Styled.li>
          <Styled.ul className={classes.ul}>
            <Styled.li className={classes.li}>1.0. <Link to={`${root}/introduction/what-is-react`}>Working with JSX</Link></Styled.li>
            <Styled.li className={classes.li}>1.1. <Link to={`${root}/introduction/why-react`}>Components and Reusability</Link></Styled.li>
            <Styled.li className={classes.li}>1.2. <Link to={`${root}/introduction/alternatives`}>Props and Dynamic data</Link></Styled.li>
            <Styled.li className={classes.li}>1.3. <Link to={`${root}/introduction/single-page-applications`}>Conditional Rendering</Link></Styled.li>
            <Styled.li className={classes.li}>1.4. <Link to={`${root}/introduction/single-page-applications`}>Children</Link></Styled.li>
          </Styled.ul>
          
          <Styled.li><Link to={`${root}/introduction`} className={classes.section}>2. Core concepts - Conditional Rendering:</Link></Styled.li>

        </Styled.ol>
      </div>
    </Layout>
  )
}

export default ReactCourse