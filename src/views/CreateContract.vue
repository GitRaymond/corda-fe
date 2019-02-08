<template>
    <div class="hello">
        <br />
        <input type="text" v-model="input.counterparty" placeholder="Counter party" />
        <input type="text" v-model="input.amount" placeholder="Amount" />
        <button v-on:click="sendData()">Send</button>
        <br />
        <br />
        <textarea>{{ response }}</textarea>
        <h6>My profile: {{ myprofile }}</h6>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: 'CreateContract',
        data () {
            return {
                myprofile: "",
                input: {
                    counterparty: "",
                    amount: ""
                },
                response: ""
            }
        },
        mounted() {
            this.$http.get("http://172.20.10.13:10009/api/example/me").then(result => {
                this.myprofile = result.data.me;

            }, error => {
                console.error(error);
            });
        },
        methods: {
            sendData() {
                this.$http.post("https://httpbin.org/post", this.input, { headers: { "content-type": "application/json" } }).then(result => {
                    this.response = result.data.json.counterparty + result.data.json.amount;
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