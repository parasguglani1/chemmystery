const CracoLessPlugin = require('craco-less')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@tomato-color': '#AC2E2E',
              '@success-color': '#d4e267',
              '@font-size-base': '15px',
              '@font-size-lg': '18px',
              '@hero-img': 'url(./src/assets/pizza.png)',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
