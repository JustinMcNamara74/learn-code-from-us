import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './About.scss'

export default () => {
  return (
    <div className="about">
      <h1>About</h1>
      <div>
        Favorite Food: <FontAwesomeIcon icon="birthday-cake" />
      </div>
      <p>
        Learn Code from Us is a site that lists people who are members of
        underrepresented groups in tech who create resources geared towards
        programmers of all levels. These resources include (but are not limited
        to) podcasts, blog posts, newsletters, or YouTube videos. For now, this
        site is geared towards free resources in order to be as accessible as
        possible.{" "}
        <a href="https://dev.to/aspittel/introducing-learn-code-from-us-oe1">
          Here
        </a>{" "}
        is a blog post with more about the project.
      </p>
      <p>
        If you would like to be included on this list and identify as part of an
        underrepresented group in tech, please fill out {" "}
        <a href="https://airtable.com/shrYbUMMlR1iVpA1l">this form</a>!
      </p>
    </div>
  )
}
