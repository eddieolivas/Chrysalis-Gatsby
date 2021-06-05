import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Avatar from "../components/image";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Fullerton Web Design & Online Marketing | Chrysalis Web Development"
      description="Most websites go unnoticed. We know why and help you rise above the noise. We're your destination for Fullerton web design and online marketing."
      image=""
    />
    <h1>
      Just getting started!&nbsp;
      <span role="img" aria-label="waving hello">
        👋
      </span>
    </h1>
    <div className="introduction box-wrapper-first">
      <div className="box">
        <p>
          I'm building out my monolithic <a href="https://www.chrysaliswebdevelopment.com" target="_blank" rel="noreferrer">WordPress portfolio site</a> using <a href="https://www.gatsbyjs.com/" rel="noreferrer" target="_blank">GatsbyJS</a>.
        </p>
        <p>
        Having learned a lot about React recently and having built a <a href="https://eddies-burger-builder.netlify.app/" target="_blank" rel="noreferrer">Burger Builder app</a> with it 
        I thought I'd implement what I've learned in a real-world project by building out my 
        existing WordPress site in GatsbyJS. Should be fun!
        </p>
      </div>
      <div className="box">
        <Avatar />
      </div>
    </div>
    <br />
    <hr />
    <br />
    <div className="box-wrapper-first">
      <div className="box box-posts">
        <h2>
          Latest Posts{" "}
          <span role="img" aria-label="writing hand">
            ✍️
          </span>
        </h2>
        {data.wpgraphql.blogs.edges.map(({ node }) => (
          <div key={node.slug}>
            <Link className="blog-link" to={`/${node.slug}`}>
              {undefined !== node.featuredImage && (
                <Img
                  className="blog-image"
                  fixed={node.featuredImage.imageFile.childImageSharp.fixed}
                  alt={node.title}
                />
              )}
              <div dangerouslySetInnerHTML={{ __html: node.title }} />
            </Link>
          </div>
        ))}
        <br />
        <Link to={`/blog`}>See all Blog Posts...</Link>
      </div>
      <div className="box box-talks">
        <h2>
          Un-Cat
          <span role="img" aria-label="uncategorized">
            🙀
          </span>
        </h2>
        <ul>
          {data.wpgraphql.uncategorized.edges.map(({ node }) => (
            <li key={node.slug}>
              <Link
                to={`/${node.slug}`}
                dangerouslySetInnerHTML={{ __html: node.title }}
              ></Link>
            </li>
          ))}
        </ul>
        <br />
        <Link to={`/category/uncategorized`}>See all uncategorized...</Link>
      </div>
    </div>

    <br />
    <br />
    <hr />
    <br />
    <br />

    <h2>Categories</h2>
    {data.wpgraphql.categories.edges.map(({ node }) => (
      <div key={node.slug}>
        <Link to={`/category/${node.slug}`}>
          <div dangerouslySetInnerHTML={{ __html: node.name }} />
        </Link>
      </div>
    ))}
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query GET_POSTS {
    wpgraphql {
      blogs: posts(first: 6, after: null) {
        edges {
          node {
            databaseId
            slug
            title
            date
            excerpt
            content(format: RENDERED)
          }
        }
      }
      uncategorized: posts(
        first: 6
        after: null
        where: { categoryName: "uncategorized" }
      ) {
        edges {
          node {
            databaseId
            slug
            title
            date
            content(format: RENDERED)
          }
        }
      }
      categories(first: 1000) {
        edges {
          node {
            databaseId
            name
            slug
          }
        }
      }
    }
  }
`;
