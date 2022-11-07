module.exports = {
    title: 'Prueba Docs',
    description: 'Documentación de prueba',
    themeConfig: {
        nav: [
            { text: 'Inicio', link: '/' },
            { text: 'Guía', link: '/guia/' },
            { text: 'External', link: 'https://google.com' }
        ],
        sidebar: {
            '/guia/': [
                '',
                'otra-guia'
            ]
        }
    }
}