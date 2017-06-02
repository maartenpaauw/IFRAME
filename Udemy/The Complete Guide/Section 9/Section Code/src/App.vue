<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <quote>
                    <h2>{{ title }}</h2>
                    <p>A wonderful day!</p>
                </quote>
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue'

    export default {
        data () {
            return {
                title: 'The Quote'
            }
        },
        components: {
            Quote
        }
    }
</script>

<style>
</style>
