<template>
    <div id="app" >
        <c-header style="height: 10vh"></c-header>
        <div class="container " style="height: 90vh;" >
            <transition name="slide" mode="out-in">
                <router-view/>
            </transition>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header';

    export default {
        name: 'app',
        components: {
            cHeader: Header,
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
        background-image: url('assets/smart-contracts.jpg');
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
