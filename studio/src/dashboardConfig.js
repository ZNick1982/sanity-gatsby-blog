export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e7659b110f0a9372d3b65ea',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-xe2nw944',
                  apiId: 'dbe6fb52-93e6-4c55-9c57-0436e6cb2eba'
                },
                {
                  buildHookId: '5e7659b1ab731ba16e80b2ff',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-6sxcmquo',
                  apiId: 'fae2d3a1-0fa6-4567-86dc-d82fd27b5c21'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ZNick1982/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-6sxcmquo.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
