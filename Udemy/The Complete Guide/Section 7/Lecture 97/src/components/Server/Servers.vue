<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <server v-for="i in 5" :index="i"></server>
        </ul>
    </div>
</template>

<script>
    import Server from './Server.vue'

    export default {
        components: {
            'server': Server
        }
    }
</script>