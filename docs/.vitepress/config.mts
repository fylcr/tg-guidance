import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "tg 群管理指南",
  description: "How to keep your tg group clean",
  cleanUrls: true,
  titleTemplate: ':title | tg 群管理指南',
  head: [
    [
      'link',
      { rel: 'icon', type: 'image/svg+xml', href: '/photo/Telegram_logo.svg' }
    ]
  ],
  themeConfig: {
    logo: '/photo/Telegram_logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
    ],

    sidebar: [
      {
        text: '目录',
        items: [
          { text: '前言', link: '/preface' },
          { text: '管理权限', link: '/manage-permissions' },
          {
            text: '常见的不和谐分子',
            collapsed: false,
            items: [
              { text: '综述', link: '/common-disharmonious-elements/summarize' },
              { text: '快速开始', link: '/common-disharmonious-elements/malicious-bombing-and-fraud' },
              { text: '广告', link: '/common-disharmonious-elements/advertising' }
      ]
    },
          {
            text: '群管理机器人',
            collapsed: false,
            items: [
              { text: '综述', link: '/robots/summarize' },
            {
              text: 'Missrose 详细讲解',
              collapsed: true,
              items: [
                { text: '综述', link: '/robots/missrose/summarize' },
                { text: '连接到私聊', link: '/robots/missrose/connect' },
                { text: '清理功能', link: '/robots/missrose/clean' },
                { text: '', link: '' },
        ]
      },
      ]
    },
        ]
      },
    ],

    socialLinks: [
      { icon: 'telegram', link: 'https://t.me/Web3CareerBuild' }
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索'
          },
          modal: {
            noResultsText: '未找到匹配结果',
            resetButtonTitle: '清空搜索',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      label: '页面导航'
    },
    notFound: {
      title: '页面未找到',
      quote:
        '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
      linkLabel: '前往首页',
      linkText: '带我回首页'
    },
    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',
    footer: {
      message: '基于 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans">CC BY-NC-SA 4.0</a> 许可发布',
      copyright: '版权所有 © 2026-至今 fylcr'
    }
  },
  markdown: {
    image: {
      lazyLoading: true
    },
    config(md) {
      md.use(tabsMarkdownPlugin)
    },
  },
})
