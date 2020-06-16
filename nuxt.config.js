const routerBase =
    process.env.DEPLOY_ENV === "GH_PAGES" ?
    {
        router: {
            base: "/project-spa/"
        }
    } :
    {};
export default {
    mode: "universal",
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || "",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            {
                hid: "description",
                name: "description",
                content: process.env.npm_package_description || ""
            }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    },

    /*
     ** Customize the progress-bar color
     */
    loading: { color: "#fff" },
    /*
     ** Global CSS
     */
    css: [
        "@/assets/css/main.css",
        "@/assets/css/main.scss",
        "bootstrap/dist/css/bootstrap.css",
        "bootstrap-vue/dist/bootstrap-vue.css",
        "@fortawesome/fontawesome-svg-core/styles.css",
        "aos/dist/aos.css"
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [{
            src: "@/plugins/bootstrap-vue.js",
            ssr: true
        },
        {
            src: "@/plugins/fontawesome.js",
            ssr: true
        },
        {
            src: "@/plugins/aos.js",
            ssr: false
        },
        {
            src: "@/plugins/EasyGoTop.js",
            ssr: false
        }
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: ["bootstrap-vue/nuxt", "nuxt-fontawesome"],
    /*
     ** Build configuration
     */
    ...routerBase,
    build: {
        extend(config, { isClient }) {
            // Extend only webpack config for client-bundle
            if (isClient) {
                config.devtool = "source-map";
            }
        }
    }
};