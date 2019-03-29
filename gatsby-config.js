module.exports = {
  siteMetadata: {
    title: 'Brandon Lind',
    author: 'Brandon Lind',
    description: 'The personal site for Brandon Lind',
    lang: 'en',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Brandon Lind',
        short_name: 'brandonlind',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/profile_150x150.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};
