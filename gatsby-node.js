// const path = require("path")

// // create pages dynamically
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const result = await graphql(`
//     {
//       blogs: allStrapiBlogs {
//         nodes {
//           slug
//         }
//       }
//     }
//   `)

//   result.data.blogs.nodes.forEach(blog => {
//     createPage({
//       path: `/blogs/${blog.slug}`,
//       component: path.resolve(`src/templates/blog-template.js`),
//       context: {
//         slug: blog.slug,
//       },
//     })
//   })
// }

const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Define a template for blog posts
  const blogPost = path.resolve(`src/templates/blog-template.js`);

  const result = await graphql(
    `
      {
        allStrapiBlogs {
          nodes {
            slug
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading blog posts from the API`,
      result.errors
    );
    return;
  }

  const blogs = result.data.allStrapiBlogs.nodes;

  if (blogs.length > 0) {
    blogs.forEach((blog) => {
      createPage({
        path: `/blogs/${blog.slug}`,
        component: blogPost,
        context: {
          // @ts-ignore
          slug: blogPost.slug,
        },
      });
    });
  }
};
