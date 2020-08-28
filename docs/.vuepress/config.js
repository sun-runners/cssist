module.exports = {
    base: `/cssist/`,
    title: 'CSSIST',
    description: 'Auto CSS, Cssist is a JavaScript library that automatically generates classes so that you can develop the web without css',
    themeConfig: {
        logo: '',
        locales: {
            '/': {
                selectText: 'Languages',
                label: 'English',
                ariaLabel: 'Languages',
                nav: [
                    { text: 'Guide', link: '/guide/' },
                    { text: 'Class Reference', link: '/class/' },
                    { text: 'Playground', link: '/demo/' },
                 
                    { text: 'Github', link: 'https://github.com/KimSunWook/cssist' },
        
                ],
                sidebar: {
                    '/guide/': [{
                        title:'Guide', 
                        collapsable: false, 
                        children: [
                            '',
                            'getting-started'
                        ]
                    }],
                    '/class/': [{
                        title:'Class Reference', 
                        collapsable: false, 
                        children: [
                            '',
                            'values'
                        ]
                    }],
                }
            }
        },
    },
    locales: {
        // The key is the path for the locale to be nested under.
        // As a special case, the default locale can use '/' as its path.
        '/': {
            lang: 'en-US', // this will be set as the lang attribute on <html>
            title: 'CSSIST',
        },
    },
    plugins: [
        'vuepress-plugin-smooth-scroll',
        ['vuepress-plugin-code-copy', true]
    ],
    host: 'localhost'
}