<template>
    <div class="container">
        <new-quote @quoteAdded="newQuote"></new-quote>
        <quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></quote-grid>

        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">
                    Info: click on a quote to delete it.
                </div>
            </div>
        </div>
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
            },
            deleteQuote (index) {
                this.quotes.splice(index, 1);
            }
        }
    }
</script>

<style>
</style>
