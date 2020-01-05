import React from 'react'
import { css, Styled } from "theme-ui"
import Course from './Course'
import classes from './courses-list.module.scss'

const coursesConfig = [{
  slug: 'React from Zero to Overkill',
  image: '',
  topic: 'react',
  icon: 'react',
  link: '/courses/react'
},
{
  slug: 'Javascript from zero to Overkill',
  image: '',
  topic: 'javascript',
  icon: 'javascript',
  disabled: true,
  link: '/courses/javascript'
}]


const CoursesList = () => {
  return (
    <div>
      <Styled.h2
        css={css({
          mb: 1,
          fontSize: 34,
        })}>
        Courses
      </Styled.h2>
      <div className={classes.coursesContainer}>
        {coursesConfig.map(course => <Course key={course.link} {...course} />)}
      </div>
    </div>
  )
}

export default CoursesList