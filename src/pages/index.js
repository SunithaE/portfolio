import * as React from "react"
import {graphql, Link} from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Intro from "../components/intro"


const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <Intro content={data.intro.edges[0].node}/>
    <br/>
      <br/>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />

  </Layout>
)

export const pageQuery = graphql`
        {
        intro: allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        title
                        greetings
                        emoji
                        subtitlePrefix
                        subtitleHighlight
                        }
                       rawMarkdownBody
                    }
            }
        }
    }
`


export default IndexPage
