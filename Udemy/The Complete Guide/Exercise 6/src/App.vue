<template>
    <div class="container">
        <v-header></v-header>
        <hr>
        <div class="row">
            <v-servers></v-servers>
            <v-message></v-message>
        </div>
        <hr>
        <v-footer></v-footer>
    </div>
</template>

<script>
    import Header from './Header.vue'
    import Servers from './Servers.vue'
    import Message from './Message.vue'
    import Footer from './Footer.vue'

    export default {
        components: {
            'v-header': Header,
            'v-servers': Servers,
            'v-message': Message,
            'v-footer': Footer
        }
    }
</script>

<style>

</style>
