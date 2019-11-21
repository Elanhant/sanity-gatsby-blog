export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5dd6e9cdfb1b395059f6b19f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-7a44a7zw',
                  apiId: '7dc324c0-cbd6-4ec4-95ae-69eb4d29aaea'
                },
                {
                  buildHookId: '5dd6e9cda6ed3b466b9ed081',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-b61ibitk',
                  apiId: 'ef21c146-e1ab-4080-bd5a-27bd9f74054e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Elanhant/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-b61ibitk.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
