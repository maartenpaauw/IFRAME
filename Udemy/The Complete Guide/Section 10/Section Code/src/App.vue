<template>
    <div class="container">
        <new-quote @quoteAdded="newQuote"></new-quote>
        <quote-grid :quotes="quotes"></quote-grid>
    </div>
</template>

<script>
    import QuoteGrid from './components/QuoteGrid.vue';
    import NewQuote from './components/NewQuote.vue';

    export default {
        data () {
            return {
                quotes: [
                    'Just a quote to see something'
                ],
                maxQuotes: 10
            }
        },
        components: {
            QuoteGrid,
            NewQuote
        },
        methods: {
            newQuote (quote) {
                this.quotes.push(quote);
            }
        }
    }
</script>

<style>
</style>
