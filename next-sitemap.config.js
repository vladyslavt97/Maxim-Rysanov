// next-sitemap.config.js
module.exports = {
    siteUrl: 'https://www.maximrysanov.com', // Your site URL
    generateRobotsTxt: true, // Generate a robots.txt file
    exclude: [
      '/shop' // Add paths you want to exclude if needed
    ],
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://www.maximrysanov.com/sitemap.xml', // Your primary sitemap
        // Add additional sitemaps if you have any
      ],
    },
  };
  
  