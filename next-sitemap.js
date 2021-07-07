module.exports = {
    siteUrl: process.env.SITE_URL,
    generateRobotsTxt: true, // (optional)
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 5000,
    generateRobotsTxt: true,
    exclude: ['/api/*', '/rok-sitemap.xml'],

    // Default transformation function
    // transform: async (config, path) => {
    //     return {
    //         loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
    //         changefreq: config.changefreq,
    //         priority: config.priority,
    //         lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    //         alternateRefs: config.alternateRefs ?? [],
    //     }
    // },
    robotsTxtOptions: {
        additionalSitemaps: [
            `${process.env.SITE_URL}/rok-sitemap.xml`, // <==== Add here
        ],
        policies: [
            {
                userAgent: '*',
                allow: '/*',
                disallow: '/api/*'
            }
        ]
    }
}