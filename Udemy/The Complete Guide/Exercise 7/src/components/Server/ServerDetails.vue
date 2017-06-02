<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please select a server.</p>
        <span v-if="server">
            <p>Server #{{ server.id }} selected, server status: {{ server.status }}.</p>
            <hr>
            <button @click="toNormal">normal</button>
        </span>
    </div>

</template>

<script>
    import { serverBus } from '../../main';

    export default {
        data () {
            return {
                server: null
            }
        },
        created () {
            serverBus.$on('serverSelected', (server) => {
                this.server = server;
            })
        },
        methods: {
            toNormal () {
                this.server.status = 'Normal';
            }
        }
    }
</script>

<style>

</style>
