import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

export const query = graphql`
  query($slug: String!) {
    allMarkdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`;
const Blog = () => {
  return <Layout>Template</Layout>;
};

export default Blog;
