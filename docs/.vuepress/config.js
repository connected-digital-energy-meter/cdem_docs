module.exports = {
  title: 'Connected Digital Energy Meter',
  description: 'The first steps towards making your digital utility meters smart',
  themeConfig: {
    logo: '/files/afbeelding1.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'VIVES', link: 'https://www.vives.be/nl/onderzoek' },      
      { text: 'Contact', link: 'mailto:nico.dewitte@vives.be' },
    ],
    sidebarDepth: 1,
    repo: 'https://github.com/pwo-iot-opportunities/smartmeter_docs',
    docsDir: 'docs',
    docsBranch: 'master',
    sidebar: [
		      '/01_introduction/',
          '/02_hardware/',
          '/03_assembly/',
          '/04_firmware/',
          '/05_configuration/',
          '/06_connect/',         
          '/07_working/',    
          '/08_development/',    
          '/09_output/',
          '/10_faq/',    
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
