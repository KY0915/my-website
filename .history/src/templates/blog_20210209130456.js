import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

const query = graphql`
  query($slug: String!) {
    blog: allMarkdownRemark(posts: { slug: { eq: $slug } }) {
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
