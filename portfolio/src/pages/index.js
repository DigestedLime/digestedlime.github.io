import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";

import Highlight from "../components/highlight";
import Layout from "../components/layout";
import Section from "../components/section";
import SEO from "../components/seo";
import Tags from "../components/tags";

const IndexPage = () => (
  <StaticQuery
  query={graphql`
    query {
      portfolio: file(relativePath: { eq: "portfolio.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      volunteeringpeel: file(relativePath: { eq: "volunteeringpeel.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      github: file(relativePath: { eq: "github.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    `}
    render={data => (
      <Layout>
        <SEO
          title="Programmer, Developer, Student"
          keywords={["akira takaki", "digestedlime", "phoenixgaruda"]}
        />
      </Layout>
    )}
  />

  
  
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
