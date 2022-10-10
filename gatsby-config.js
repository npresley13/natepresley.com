module.exports = {
  siteMetadata: {
    title: `natepresley`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [ `https://fonts.googleapis.com`, `https://fonts.gstatic.com` ],
        web: [
          {
            name: `Kanit`,
            file: `https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,400;0,700;1,400&display=swap`
          },
          {
            name: `Courier Prime`,
            file: `https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400&display=swap`
          },
        ],
      },
    },

  ],
}
