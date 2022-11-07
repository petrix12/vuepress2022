# VuePress
+ Video explicativo de YouTube: https://www.youtube.com/watch?v=o334x1W_RDY
+ Página oficial de VuePress: https://vuepress.vuejs.org

1. En la raíz del proyecto ejecutar (solo en caso de no existir **package.json**):
    + $ npm init
2. Instalar VuePress:
    + $ npm install -D vuepress
3. Crear archivo de documentación **docs\README.md**:
    ```md
    # Esta es otra guía

    ## VuePress
    + https://vuepress.vuejs.org

    1. En la raíz del proyecto ejecutar (solo en caso de no existir **package.json**):
        + $ npm init
    2. Instalar VuePress:
        + $ npm install -D vuepress
    3. Crear archivo de documentación **docs\README.md**:
        ```md
        ---
        home: true
        heroImage: /img/logo-completo-sm.png
        heroText: Comienza aquí
        tagline: Hero subtitle
        actionText: Get Started →
        actionLink: /guia/
        features:
        - title: Simplicity First
        details: Minimal setup with markdown-centered project structure helps you focus on writing.
        - title: Vue-Powered
        details: Enjoy the dev experience of Vue + webpack, use Vue components in markdown, and develop custom themes with Vue.
        - title: Performant
        details: VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.
        footer: MIT Licensed | Copyright © 2018-present Evan You
        ---
        ```
        + https://vuepress.vuejs.org/guide/markdown.html#custom-containers
        + https://vuepress.vuejs.org/theme/default-theme-config.html
    4. Añadir script en **package.json**:
        ```json
        //...
        "scripts": {
            //...
            "docs:dev": "vuepress dev docs",
            "docs:build": "vuepress build docs"
        },
        //...
        ```
    5. Levantar servidor de documentación:
        + $ npm run docs:dev
    6. Crear **docs\\.vuepress\config.js**:
        ```js
        ```
    7. Crear **docs\guias\README.md**:
        ```md
        ```
    8. Crear **docs\guia\otra-guia.md**:
        ```md
        ```
    9. Crear componente **docs\.vuepress\components\Arreglo.vue**:
        ```vue
        ```
    10. Compilar para hacer deploy:
        + $ npm run docs:build
        + **Nota**: la carpeta **docs\\.vuepress\dist** es la que se deberá subir a un hosting para ver el sitio.

    ## Incorporando un componente
    <Arreglo />

    ## Curso de vuepress
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

    ## Otro curso de Vue
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    ## Otras cosas que se pueden hacer con VuePress
    + https://vuepress.vuejs.org/guide/markdown.html#links
    
    ### Frontmatter
    ---
    title: Blogging Like a Hacker
    lang: en-US
    ---

    ### GitHub-Style Tables
    | Tables        | Are           | Cool  |
    | ------------- |:-------------:| -----:|
    | col 3 is      | right-aligned | $1600 |
    | col 2 is      | centered      |   $12 |
    | zebra stripes | are neat      |    $1 |

    ### Emoji 
    :tada: :100:

    ### Default Title
    ::: tip
    This is a tip
    :::

    ::: warning
    This is a warning
    :::

    ::: danger
    This is a dangerous warning
    :::

    ::: details
    This is a details block, which does not work in IE / Edge
    :::

    ### Custom Title
    ::: danger STOP
    Danger zone, do not proceed
    :::

    ::: details Click me to view the code
    ```js
    console.log('Hello, VuePress!')
    ```
    :::

    ### Line Highlighting in Code Blocks
    ``` js{4}
    export default {
    data () {
        return {
        msg: 'Highlighted!'
        }
    }
    }
    ```

    ``` js{1,4,6-7}
    export default { // Highlighted
    data () {
        return {
        msg: `Highlighted!
        This line isn't highlighted,
        but this and the next 2 are.`,
        motd: 'VuePress is awesome',
        lorem: 'ipsum',
        }
    }
    }
    ```
    ```
4. Añadir script en **package.json**:
    ```json
    //...
    "scripts": {
        //...
        "docs:dev": "vuepress dev docs",
        "docs:build": "vuepress build docs"
    },
    //...
    ```
5. Levantar servidor de documentación:
    + $ npm run docs:dev
6. Crear **docs\\.vuepress\config.js**:
    ```js
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
    ```
7. Crear **docs\guia\README.md**:
    ```md
    ```
    + https://programminghistorian.org/es/lecciones/introduccion-a-markdown
    + https://vuepress.vuejs.org/guide/markdown.html#custom-containers
    + https://vuepress.vuejs.org/theme/default-theme-config.html
8. Crear **docs\guia\otra-guia.md**:
    ```md
    # Esta es otra guía más

    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    ```
9. Crear componente **docs\.vuepress\components\Arreglo.vue**:
    ```vue
    <template>
        <div>
            <h3>Este es un componente</h3>
            <ul>
                <li v-for="(item, index) in lista" :key="index">
                    {{ item.nombre }} - {{ item.descripcion }}
                </li>
            </ul>
        </div>
    </template>

    <script>
        export default {
            data() {
                return {
                    lista: [
                        { nombre: 'html', descripcion: 'Este es el curso de html' },
                        { nombre: 'css', descripcion: 'Este es el curso de css' },
                        { nombre: 'javascript', descripcion: 'Este es el curso de javascript' }
                    ]
                }
            }
        }
    </script>
    ```
10. Compilar para hacer deploy:
    + $ npm run docs:build
    + **Nota**: la carpeta **docs\\.vuepress\dist** es la que se deberá subir a un hosting para ver el sitio.
11. Otra forma de crear proyecto de doumentación de forma menos manual:
    + $ npx create-vuepress-site
    + $ cd docs
    + $ npm install


12. Subir a GitHub:
    1. Crear proyecto en la página de [GitHub](https://github.com) con el nombre: **vuepress2022**.
        + **Description**: Proyecto para seguir curso "VuePress - Generador de Sitios Estáticos con VUE JS[ ESPAÑOL ]".
        + **Public**.
    2. En la ubicación raíz del proyecto en la terminal de la máquina local:
        + $ git init
        + $ git add .
        + $ git commit -m "Commit inicial"
        + $ git branch -M main
        + $ git remote add origin https://github.com/petrix12/vuepress2022.git
        + $ git push -u origin main