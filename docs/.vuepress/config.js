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
    repo: 'https://github.com/connected-digital-energy-meter/cdem_docs',
    docsDir: 'docs',
    docsBranch: 'master',
    sidebar: [
		      '/01_introduction/',
          '/02_hardware/',
          '/03_assembly/',
          '/04_firmware/',
          '/05_mqtt/',         
          '/06_configuration/',
          '/07_connect/',         
          '/08_operation/',    
          '/09_building_a_dashboard/',
          '/10_docker_compose/',
          '/11_development/',    
          '/12_faq/',    
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
    ['vuepress-plugin-code-copy', true],
  ],  
}
