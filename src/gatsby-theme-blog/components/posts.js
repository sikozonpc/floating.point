import React, { Fragment } from "react"
import { Link } from "gatsby"
import { Styled, css } from "theme-ui"

import Footer from "../components/home-footer"
import Layout from "gatsby-theme-blog/src/components/layout"
import SEO from "gatsby-theme-blog/src/components/seo"
import CoursesList from "../../components/courses-list"

const Posts = ({ location, posts, siteTitle, socialLinks }) => (
  <Layout location={location} title={siteTitle}>
    <main>
      <CoursesList />
      
      <Styled.h2
        css={css({
          mb: 2,
          mt: 4,
          fontSize: 34,
        })}
      >Posts</Styled.h2>
      {posts.map(({ node }) => {
        const title = node.title || node.slug
        const keywords = node.keywords || []

        // Only render the posts that are not from courses
        if (!node.tags.includes('hidden')) {
          return (
            <Fragment key={node.slug}>
              <SEO title="Blog" keywords={keywords} />
              <div>
                <Styled.h2
                  css={css({
                    mb: 1,
                  })}
                >
                  <Styled.a
                    as={Link}
                    css={css({
                      textDecoration: `none`,
                    })}
                    to={node.slug}
                  >
                    {title}
                  </Styled.a>
                </Styled.h2>
                <small>{node.date}</small>
                <Styled.p>{node.excerpt}</Styled.p>
              </div>
            </Fragment>
          )
        }
      })}
    </main>
    <Footer socialLinks={socialLinks} />
  </Layout>
)

export default Posts