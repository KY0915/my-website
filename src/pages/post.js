import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';

export default function Post({ data }) {
  const { posts } = data.blog;

  return (
    <Layout>
      <div>
        <h1>Blog posts</h1>

        {posts.map((post) => {
          return (
            <article key={post.id}>
              <Link
                className="nounderscore noselect"
                to={`/post/${post.fields.slug}`}
              >
                <h2 className="onHover">{post.frontmatter.title}</h2>
                <small>
                  {post.frontmatter.author}, {post.frontmatter.date}
                </small>
                <p>{post.excerpt}</p>
              </Link>
            </article>
          );
        })}
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark {
      posts: nodes {
        frontmatter {
          date(fromNow: true)
          title
          author
        }
        fields {
          slug
        }
      }
    }
  }
`;
