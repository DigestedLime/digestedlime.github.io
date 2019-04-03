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
  /*query={graphql`
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
    `}*/
    render={data => (
      <Layout>
        <SEO
          title="Programmer, Developer, Student"
          keywords={["akira takaki", "digestedlime", "phoenixgaruda"]}
        />
        <Section
          title="Hello!"
          shadow="light blue"
          container
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        ></Section>

      </Layout>
    )}
  />
);

export default IndexPage
