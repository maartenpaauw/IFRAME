<template>
    <div>
        <h3>New quote</h3>
        <button @click="counter++">Increate</button>
        <p>{{ counter }}</p>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                counter: 0
            }
        },
        destroyed () {
            console.log('destroyed');
        },
        deactivated () {
            console.log('Deactivated');
        },
        activated () {
            console.log('Activated');
        }
    }
</script>

<style>
</style>