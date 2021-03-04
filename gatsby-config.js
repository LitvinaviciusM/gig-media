module.exports = {
  siteMetadata: {
    title: 'GigMedia',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        additionalData: `
          @import "${__dirname}/src/assets/main";
        `,
      }
    },
  ],
};
