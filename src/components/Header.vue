<template>
    <div>
        <div style="height: 10vh; background-color: white;" class="row px-0 justify-content-between ">

            <img :src="img()" class="d-inline-block align-top nav-img ml-5 mt-3" alt="BV">

            <img src="../assets/logo-app.jpeg" height="40" class="mr-5 mt-3"/>
        </div>
        <div class="container">

            <b-navbar toggleable="md" type="dark" style="height: 5vh;">
                <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>


                <b-collapse is-nav id="nav_collapse">

                    <b-navbar-nav>
                        <router-link tag="a" class="nav-link active" to="/"><i class="fas fa-scroll mr-1"></i>Contract
                            Overview
                        </router-link>
                        <router-link tag="a" class="nav-link active" to="/create">
                            <i class="fas fa-plus-circle mr-1"></i>New Contract
                        </router-link>
                    </b-navbar-nav>

                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">

                        <b-nav-item-dropdown right>
                            <!-- Using button-content slot -->
                            <template slot="button-content">
                                <i class="fas fa-user mr-1"></i><em>Raymond Wensveen</em>
                            </template>
                            <b-dropdown-item href="#">Profile</b-dropdown-item>
                            <b-dropdown-item href="#">Signout</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>

                </b-collapse>
            </b-navbar>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Header",
        props: ['profile'],
        computed: {},
        methods: {
            img() {
                if (this.profile === 'RABO BANK') {
                    return require('../assets/rabobank.png')
                } else if (this.profile === 'ABN AMRO BANK') {
                    return require('../assets/abn-amro.png')
                } else if (this.profile === 'ING BANK') {
                    return require('../assets/ing.png')
                }
            }
        }


    }
</script>

<style scoped>
    .nav-img {
        height: 50px;
        object-fit: cover;
    }
</style>
