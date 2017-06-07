<template>
    <div>
        <div class="row">
            <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
        </div>
    </div>
</template>

<script>
    import appStock from './Stock.vue'
    import { mapGetters } from 'vuex'
    export default {
        components: {
            appStock
        },
        computed: {
            ...mapGetters(['stocks'])
        }
    }
</script>