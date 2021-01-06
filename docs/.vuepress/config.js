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
    repo: 'https://github.com/pwo-iot-opportunities/smartmeter_docs',
    docsDir: 'docs',
    docsBranch: 'master',
    sidebar: [
		      '/01_introduction/',
          '/02_content/',
          '/03_assembly/',
          '/04_firmware/',
          '/05_configuration/',
          '/06_connect/',         
          '/07_working/',    
          '/08_development/',    
          '/09_output/',    
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
