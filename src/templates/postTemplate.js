import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import TableOfContents from '../components/tableOfContents';
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      tableOfContents(absolute: false)
      html
    }
  }
`;
const PostPage = (props) => {
  const textToRepace = props.data.markdownRemark.html;
  const toc = props.data.markdownRemark.tableOfContents;
  console.log(toc);
  const content = textToRepace.replace('TOC', toc);
  return (
    <Layout>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </Layout>
  );
};

export default PostPage;
