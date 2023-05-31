// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Solitekids | Aplikasi Pendidikan Anak Berbahasa Indonesia',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'format-detection', content: 'telephone=no' },
                { name: 'author', content: 'solitekids' },
                { hid: 'description', name: 'description', content: 'Pengembang Aplikasi Pendidikan Anak Berbahasa Indonesia. Memiliki lebih dari 80 permainan yang dirancang untuk mengajar anak-anak dengan warna, bentuk, angka, alfabet, musik, dll' },
                { hid: 'keywords', name: 'keywords', content: 'Solite,Solite Studio,Solitekids,Game anak,Game anak usia dini,Game edukasi,Aplikasi pendidikan,Belajar dari rumah,game pendidikan,Aplikasi Pendidikan Anak Berbahasa Indonesia' },
            ],
            link: [
                {
                    rel: 'canonical',
                    href: 'https://solitekids.com',
                },
                {
                    rel: 'icon',
                    type: 'icon/x-icon',
                    href: './favicon.ico',
                },
                {
                    rel: 'stylesheet',
                    href: '/assets/css/bootstrap.min.css'
                },
            ],
            script: [
                {
                    src: 'https://code.jquery.com/jquery-3.7.0.min.js',
                    type: 'text/javascript'
                },
                {
                    src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js',
                    type: 'text/javascript'
                },
                {
                    src: '/assets/js/custom.js',
                    type: 'text/javascript'
                },
            ],
        },
    },
    routeRules: {
        '/account/**': { ssr: false },
        // '/admin/login/**': { ssr: false }
    },
    modules: [
        'nuxt-sanctum-auth'
    ],
    nuxtSanctumAuth: {
        token: true, // set true to use jwt-token auth instead of cookie. default is false
        baseUrl: 'https://content.solitekids.com/api/v1',
        endpoints: {
          csrf: '/sanctum/csrf-cookie',
          login: '/login',
          logout: '/logout',
          user: '/user'
        },
        csrf: {
          headerKey: 'X-XSRF-TOKEN',
          cookieKey: 'XSRF-TOKEN',
          tokenCookieKey: 'nuxt-sanctum-auth-token'
        },
        redirects: {
          home: '/account',
          login: '/admin/login',
          logout: '/'
        }
      }
})
