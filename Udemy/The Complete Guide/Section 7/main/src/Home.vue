<template>
    <span>
        <p>Server Status: {{ status }}</p>
        <hr />
        <button @click="changeStatus">Change status</button>
    </span>
</template>

<script>
    export default {
        data () {
            return {
                status: 'Critical'
            }
        },
        methods: {
            changeStatus () {
                this.status = 'Normal'
            }
        }
    }
</script>