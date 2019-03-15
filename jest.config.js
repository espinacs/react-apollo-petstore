module.exports = {
    moduleNameMapper: {
      '\\.module\\.css$': 'identity-obj-proxy',
    //   '\\.css$': require.resolve('./test/style-mock'),
    },
    // setupTestFrameworkScriptFile: require.resolve('./test/setup-test-framework.js'),
    collectCoverageFrom: [
      '**/src/**/*.js',
      '!**/node_modules/**',
      '!**/src/**/*.stories.{js,jsx}'
    ],
  }