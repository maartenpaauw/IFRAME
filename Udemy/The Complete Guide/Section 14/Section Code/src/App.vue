<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <select v-model="alertAnimation">
                    <option value="slide">Slide</option>
                    <option value="fade">Fade</option>
                </select>
                <hr>
                <button class="btn btn-primary" @click="show = !show">Show alert</button>
                <hr>
                <transition :name="alertAnimation" mode="out-in">
                    <div class="alert alert-info" v-if="show" key="info">This is an alert.</div>
                    <div class="alert alert-warning" v-if="!show" key="warning">This is an alert.</div>
                </transition>

                <transition :name="alertAnimation">
                    <div class="alert alert-info" v-show="show">This is an alert.</div>
                </transition>

                <transition name="slide" type="animation">
                    <div class="alert alert-info" v-if="show">This is an alert.</div>
                </transition>

                <transition appear="appear" enter-active-class="animated bounce" leave-active-class="animated shake">
                    <div class="alert alert-info" v-show="show">This is an alert.</div>
                </transition>

                <hr>

                <button class="btn btn-primary" @click="load = !load">
                    Load / Remove element
                </button>

                <hr>

                <transition @before-enter="beforeEnter"
                            @enter="enter"
                            @after-enter="afterEnter"
                            @enter-cancelled="enterCancelled"

                            @before-leave="beforeLeave"
                            @leave="leave"
                            @after-leave="afterLeave"
                            @leave-cancelled="leaveCancelled"
                            :css="false">
                    <div style="width: 300px; height: 100px; background-color: lightgreen;" v-if="load"></div>
                </transition>

                <hr>
                <button class="btn btn-primary"
                        @click="(selectedComponent == 'app-success-alert') ? selectedComponent = 'app-danger-alert' : selectedComponent = 'app-success-alert'">
                    Toggle components
                </button>
                <br>
                <br>
                <transition name="fade" mode="out-in">
                    <component :is="selectedComponent"></component>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import DangerAlert from './DangerAlert.vue';
    import SuccessAlert from './SuccessAlert.vue';

    export default {
        data() {
            return {
                show: false,
                load: true,
                alertAnimation: 'fade',
                elementWidth: 100,
                selectedComponent: 'app-success-alert'
            }
        },
        methods: {
            beforeEnter (el) {
                console.log('Before enter');
                this.elementWidth = 100;
                el.style.width = this.elementWidth + 'px';
            },
            enter (el, done) {
                console.log('Enter');

                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth + round * 10) + 'px';
                    round++;
                    if (round > 20) {
                        clearInterval(interval);
                        done();
                    }
                }, 20);
            },
            afterEnter (el) {
                console.log('After enter');
            },
            enterCancelled (el) {
                console.log('Enter cancelled');
            },
            beforeLeave (el) {
                console.log('Before leave');
                this.elementWidth = 300;
                el.style.width = this.elementWidth + 'px';
            },
            leave (el, done) {
                console.log('Enter');

                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth - round * 10) + 'px';
                    round++;
                    if (round > 20) {
                        clearInterval(interval);
                        done();
                    }
                }, 20);
            },
            afterLeave (el) {
                console.log('After leave');
            },
            leaveCancelled (el) {
                console.log('Leave cancelled');
            }
        },
        components: {
            appDangerAlert: DangerAlert,
            appSuccessAlert: SuccessAlert
        }
    }
</script>

<style>
    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity 1s;
    }

    .fade-leave {

    }

    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }

    .slide-enter {
        opacity: 0;
    }

    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity .5s;
    }

    .slide-leave {
    }

    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        transition: opacity 1s;
        opacity: 0;
    }

    @keyframes slide-in {
       from {
           transform: translateY(20px);
       }

        to {
            transform: translateY(0);
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
        }

        to {
            transform: translateY(20px);
        }
    }
</style>
