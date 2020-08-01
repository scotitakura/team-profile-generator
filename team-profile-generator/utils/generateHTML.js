module.exports = templateData => {
  console.log(templateData);
  const { projects, about } = templateData;
  return `# ${templateData.name}

`;
};
