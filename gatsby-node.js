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

  const postTemplate = path.resolve('./src/templates/postTemplate.js');

  const res = await graphql(`
    query MyQuery {
      blog: allMarkdownRemark {
        posts: nodes {
          fields {
            slug
          }
        }
      }
    }
  `);

  console.log(res);
  res.data.blog.posts.forEach((post) => {
    createPage({
      component: postTemplate,
      path: `/post/${post.fields.slug}`,
      context: {
        slug: post.fields.slug,
      },
    });
  });
};
