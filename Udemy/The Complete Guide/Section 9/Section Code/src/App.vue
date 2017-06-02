<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selected = 'quote'">Quote</button>
                <button @click="selected = 'author'">Author</button>
                <button @click="selected = 'new'">New</button>
                <hr>
                <p>{{ selected }}</p>
                <component :is="selected">
                    <p>Default content</p>
                </component>
                <!--<quote>-->
                    <!--<h2 slot="title">{{ title }}</h2>-->
                    <!--<p>A wonderful day!</p>-->
                    <!--<p>Also a wonderful day!</p>-->
                <!--</quote>-->
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue'
    import Author from './components/Author.vue'
    import New from './components/New.vue'

    export default {
        data () {
            return {
                title: 'The Quote',
                selected: 'quote'
            }
        },
        components: {
            Quote,
            Author,
            New
        }
    }
</script>

<style>
</style>
