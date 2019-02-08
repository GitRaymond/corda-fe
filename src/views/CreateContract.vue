<template>
    <div class="hello">
        <br/>

        <b-form-select id="ddown1" v-model="selected" :options="peers" text="Choose your counterparty" class="m-md-2">
        </b-form-select>


        <input type="text" v-model="input.amount" placeholder="Amount"/>
        <button v-on:click="sendData()">Send</button>
        <br/>
        <br/>
        <textarea>{{ response }}</textarea>
        <h6>My profile: {{ myprofile }}</h6>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: 'CreateContract',
        data() {
            return {
                myprofile: "",
                selected: null,
                peers: [],
                input: {
                    counterparty: "",
                    amount: ""
                },
                response: ""
            }
        },
        mounted() {
            this.domain = 'http://172.20.10.13:10009/api/example/';
            this.peers = [];
            //Get profile name
            this.$http.get(this.domain + "me").then(result => {
                this.myprofile = result.data.me;
            }, error => {
                console.error(error);
            });

            //Get counterparties
            this.$http.get(this.domain + "peers").then(result => {
                this.peers = result.data.peers;

            }, error => {
                console.error(error);
            });
        },
        methods: {
            sendData() {
                this.$http.post("https://httpbin.org/post", this.input, {headers: {"content-type": "application/json"}}).then(result => {
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