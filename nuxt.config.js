export default {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: "wakyWaky.cz | Online portál o wakeboardingu a vodních sportech",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "robots", content: "index, follow" },
      { name: "googlebot", content: "index, follow" },
      {
        name: "msapplication-TileColor",
        content: "#ffffff"
      },
      {
        name: "msapplication-TileImage",
        content: "/ms-icon-144x144.png"
      },
      {
        name: "theme-color",
        content: "#ffffff"
      },
      {
        hid: "description",
        name: "description",
        content:
          "Všimli jsme si, že vám osychá wakeboard. Tak se připojte k české wakeboarding komunitě online! Začátečníkům pomůžeme s prvními krůčky, srdcařům doručíme magazínové tipy a společně posuneme krásu wakeboardingu na nový level. 🤟🤟 "
      }
    ],
    link: [
      {
        rel: "canonical",
        href: "https://wakywaky.cz"
      },
      {
        rel: "apple-touch-icon",
        sizes: "57x57",
        href: "/apple-icon-57x57.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "60x60",
        href: "/apple-icon-60x60.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "72x72",
        href: "/apple-icon-72x72.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "76x76",
        href: "/apple-icon-76x76.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "114x114",
        href: "/apple-icon-114x114.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "/apple-icon-120x120.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "/apple-icon-144x144.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "/apple-icon-152x152.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-icon-180x180.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/android-icon-192x192.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/favicon-96x96.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      },
      {
        rel: "manifest",
        href: "/manifest.json"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#2cff4f" },
  /*
   ** Global CSS
   */
  css: ["~/assets/main.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/comp.js", "~/plugins/vue-simple-markdown.js"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    "@nuxtjs/gtm",
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-163689501-1"
      }
    ]
  ],
  gtm: {
    id: "GTM-MR8C4MQ"
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",

    "@nuxtjs/sitemap",
    [
      "storyblok-nuxt",
      {
        accessToken: "T2C48SSblvlsIVOj4ciqIwtt",
        cacheProvider: "memory"
      }
    ]
  ],
  sitemap: {
    hostname: "https://wakywaky.cz",
    gzip: true,
    exclude: ["/404", "/kontakt"]
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
