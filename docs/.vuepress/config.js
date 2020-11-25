module.exports = {
  title: 'Fluvius Smart Meter',
  description: 'Make the Fluvius P1 port data available.',
  themeConfig: {
    logo: '/files/afbeelding1.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Company', link: 'https://www.vives.be' },      
      { text: 'Contact', link: 'mailto:ronny.mees@vives.be' },
    ],
    sidebarDepth: 1,
    repo: 'https://github.com/ronnymees/fluviussmartmeter',
    docsDir: 'docs',
    docsBranch: 'master',
    sidebar: [
		      '/01_communication/',
          '/02_hoofdstuk2/',
          '/03_hoofdstuk3/',
          '/04_hoofdstuk4/',
          '/05_hoofdstuk5/',
          '/06_hoofdstuk6/',          
    ]    
  },
  markdown: {
    lineNumbers: true,
  },
  serviceWorker: true,
  plugins: [
    ['vuepress-plugin-zooming', {
      // selector for images that you want to be zoomable
      // default: '.content img'
      selector: 'img',

      // make images zoomable with delay after entering a page
      // default: 500
      // delay: 1000,

      // options of zooming
      // default: {}
      options: {
        bgColor: 'black',
        zIndex: 10000,
      },
    }],
	  ['container', {
        type: 'output',
        defaultTitle: 'Output',
      }],
    ['@dovyp/vuepress-plugin-clipboard-copy', true],    
  ],  
}
