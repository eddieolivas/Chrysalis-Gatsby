import React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";

import SEO from "../components/seo";
import Layout from "../components/layout";

const SecondPage = ({ data }) => (
  <Layout>
    <SEO
      title={data.wpgraphql.page.title}
    />

    <h1 dangerouslySetInnerHTML={{ __html: data.wpgraphql.page.title }} />

    <div dangerouslySetInnerHTML={{ __html: data.wpgraphql.page.content }} />

    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;

export const query = graphql`
  query($databaseId: ID!) {
    wpgraphql {
      page(id: $databaseId, idType: DATABASE_ID) {
        title
        date
        content(format: RENDERED)
        featuredImage {
          node {
            uri
          }
        }
      }
    }
  }
`;
