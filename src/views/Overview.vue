<template>
    <div class="hello">
        <h1>Your IP is {{ ip }}</h1>
        <input type="text" v-model="input.firstname" placeholder="First Name" />
        <input type="text" v-model="input.lastname" placeholder="Last Name" />
        <button v-on:click="sendData()">Send</button>
        <br />
        <br />
        <textarea>{{ response }}</textarea>
    </div>




</template>

<script>
    import axios from "axios";
    export default {
        name: 'Overview',
        data () {
            return {
                ip: "",
                input: {
                    firstname: "",
                    lastname: ""
                },
                response: ""
            }
        },
        mounted() {
            this.$http.get("https://httpbin.org/ip").then(result => {
                this.ip = result.body.origin;
            }, error => {
                console.error(error);
            });
        },
        methods: {
            sendData() {
                this.$http.post("https://httpbin.org/post", this.input, { headers: { "content-type": "application/json" } }).then(result => {
                    this.response = result.data.json.firstname + result.data.json.lastname;
                }, error => {
                    console.error(error);
                });
            }
        }
    }
</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    textarea {
        width: 600px;
        height: 200px;
    }
</style>