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