
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Summaeverythang - Community Center',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Summaeverythang is a community center based in South Central Los Angeles dedicated to the transcendence, advancement and empowerment of black and brown folks socio-politically and econotmically, intellectually and artistically.' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/styles/app.scss'
  ],  
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources'
  ],
  /*
   ** Load scss globally via styleResources
   */
  styleResources: {
    scss: [
      '~/styles/_variables.scss'
    ]
  },  
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
    },
    loaders: {
      vue: {
        transformAssetUrls: {
          audio: 'src'
        }
      }
    }
  }
}
