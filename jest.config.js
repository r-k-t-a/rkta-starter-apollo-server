module.exports = {
  coveragePathIgnorePatterns: ['.build/', 'coverage/', 'node_modules/'],
  transform: {
    '\\.graphql$': 'jest-transform-graphql',
    '.*': 'babel-jest',
  },
};
