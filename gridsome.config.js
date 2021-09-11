// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  icon: 'static/Logo-Jagfx-2018BG.png',
  siteUrl: 'https://discover.emmanuel-smith.me',
  pathPrefix: '/',
  siteName: 'Emmanuel SMITH',
  siteDescription: 'Discover the world !',
  templates: {
    Post: '/blog/:title',
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/**/*.md',
        typeName: 'Post',
      }
    },
    {
      use: "gridsome-plugin-rss",
      options: {
        contentTypeName: "Post",
        feedOptions: {
          title: "Emmanuel SMITH",
          feed_url: "https://discover.emmanuel-smith.me/rss.xml",
          site_url: "https://discover.emmanuel-smith.me",
        },
        feedItemOptions: (node) => ({
          title: node.title,
          description: node.excerpt,
          url: 'https://discover.emmanuel-smith.me/blog/' + node.slug,
          author: node.author,
          date: node.date,
          custom_elements: [
            {
              published: node.date.toString(),
            },
          ],
        }),
        output: {
          dir: "./static/",
          name: "rss",
        },
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        config: {
          "/blog/*": {
            changefreq: "daily",
            priority: 0.5,
          }
        },
      },
    }
  ],
  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  },
}
