module.exports.onCreateNode = ({ node, actions }) => {
  const { createField } = actions;

  console.log(JSON.stringify(node, undefined));
};
