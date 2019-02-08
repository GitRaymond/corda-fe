<template>
    <b-navbar toggleable="md" type="dark" variant="primary">
        <router-link to="/create">Go to Foo</router-link>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand href="#">ABN AMRO</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav>
                <router-link tag="a" class="nav-link" to="/">Contract Overview</router-link>
                <router-link tag="a" class="nav-link" to="/create">New Contract</router-link>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">

                <b-nav-item-dropdown right>
                    <!-- Using button-content slot -->
                    <template slot="button-content">
                        <em>Deepak Sigilipalli</em>
                    </template>
                    <b-dropdown-item href="#">Profile</b-dropdown-item>
                    <b-dropdown-item href="#">Signout</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>

        </b-collapse>
    </b-navbar>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>
