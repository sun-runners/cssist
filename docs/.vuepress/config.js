module.exports = {
    // base: `cssist`,
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
                    // '/demo/': [{
                    //     title:'Playground', 
                    //     collapsable: false, 
                    //     children: [
                    //         '', 
                    //     ]
                    // }],
                }
            },
            '/kr/': {
                selectText: '언어',
                label: '한국어',
                ariaLabel: '언어',
                nav: [
                    { text: '안내서', link: '/kr/guide/' },
                    { text: '클래스 레퍼런스', link: '/kr/class/' },
                 
                    { text: '데모', link: 'https://kimsunwook.github.io/cssist/' },
                    { text: 'Github', link: 'https://github.com/KimSunWook/cssist' },
                ],
                sidebar: [
                    {
                        title: '안내서',   
                        path: '/kr/guide/',      
                        collapsable: false, 
                        sidebarDepth: 1,    
                        children: [
                          '/kr/guide/',
                          '/kr/guide/getting-started',
                        ]
                    },
                    {
                        title: '클래스 레퍼런스',   
                        path: '/kr/class/',      
                        collapsable: false, 
                        sidebarDepth: 1,    
                        children: [
                          '/kr/class/',
                          '/kr/class/advanced',
                          '/kr/class/basic',
                        ]
                    },
                ]
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
        '/kr/': {
            lang: 'ko-KR',
            title: 'CSSIST',
        }
    },
    plugins: [
        'vuepress-plugin-smooth-scroll'
    ],
    host: 'localhost'
}