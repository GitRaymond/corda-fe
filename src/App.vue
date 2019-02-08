<template>
    <div id="app" :style="'background-color: '+ $_colorMixin_getBodyBgColor() + ';'">
        <c-header :style="'height: 15vh; background-color: ' + $_colorMixin_getHeaderBgColor() +';'" :profile="myprofile"></c-header>
        <div class="container " style="height: 85vh;">
            <transition name="slide" mode="out-in">
                <router-view/>
            </transition>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header';
    import apiMixin from './mixins/apiMixin'
    import colorMixin from './mixins/colorMixin'

    export default {
        name: 'app',
        components: {
            cHeader: Header,
        },
        mixins: [
            apiMixin,
            colorMixin,
        ],

        created() {
            this.$_apiMixin_getMyProfile();
        }
    }
</script>

<style>

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .slide-enter-active {
        animation: slide-in 200ms ease-out forwards;
    }

    .slide-leave-active {
        animation: slide-out 200ms ease-out forwards;
    }

    @keyframes slide-in {
        from {
            transform: translateY(-30px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(-30px);
            opacity: 0;
        }
    }
</style>
