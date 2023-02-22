import { defineConfig } from 'vitepress'
export default defineConfig({
  title: 'VitePress starter',
  description: 'Just playing around.',
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
    ],
    sidebar: [
      {
        text: 'Theme',
        items: [
          { text: 'Introduction', link: '/introduction/index.md'},
          { text: 'Nav', link: '/nav/index.md' },
        ]
      }
    ],
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    // TODO
    // algolia: {
    //   appId: '8J64VVRP8K',
    //   apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
    //   indexName: 'vitepress'
    // },
  }
})