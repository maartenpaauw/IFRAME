<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button @click="selected = 'app-blue'" class="btn btn-primary">Load Blue Template</button>
                <button @click="selected = 'app-green'" class="btn btn-success">Load Green Template</button>
                <button @click="selected = 'app-red'" class="btn btn-danger">Load Red Template</button>
                <hr>
                <keep-alive>
                    <component :is="selected">
                        <p>This is the content.</p>
                    </component>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data () {
            return {
                selected: 'app-blue'
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
