const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  })
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions
  if (page.path === `/`) {
    page.matchPath = `/*`
    createPage(page)
  }
}
