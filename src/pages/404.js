import React from 'react'
import SEO from '../components/seo'
import Aliens from '../assets/aliens.svg'
import { Link } from 'gatsby'
import classes from './404.module.scss'

const NotFound = () => (
  <div className={classes.container}>
    <SEO title="404 Page not found" />
    <h1>
      404, it seems the content of this page
      <br /> was taken by aliens 👽🛸
    </h1>
    <img src={Aliens} className={classes.img} alt="Aliens" />

    <p>
      You can head back to the <Link to="/">home page</Link>
    </p>
    <p>
      or check out some of my <Link to="/blog">posts</Link>
    </p>
  </div>
)

export default NotFound
