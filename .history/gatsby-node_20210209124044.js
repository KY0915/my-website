const path = require('path');

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md');

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogTemplate = path.resolve('./src/template/blog.js');

  const res = await graphql(`
    query MyQuery {
      blog: allMarkdownRemark {
        posts: node {
          fields {
            slug
          }
        }
      }
    }
  `);

  console.log(res);
  //   res.data.allMarkdownRemark.edges.forEach((edge) => {
  //     createPage({
  //       component: blogTemplate,
  //       path: `/blog/${edge.node.fields.slug}`,
  //       context: {
  //         slug: edge.node.fields.slug,
  //       },
  //     });
  //   });
};
