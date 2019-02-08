<template>
    <div class="justify-content-center">


        <b-card title="New Contract" class="mt-5">
            <div class="">
                <b-form @submit.prevent="sendData">
                    <b-form-group id="counterParty"
                                  label="Counterparty:"
                                  label-for="firstName"
                                  >
                        <b-form-select id="counterParty" v-model="selected" :options="peers" text="Choose your counterparty" class="m-md-2">
                        </b-form-select>
                        
                    </b-form-group>
                    <b-form-group id="amount"
                                  label="Amount"
                                  label-for="amount">
                        <b-form-input id="amount"
                                      type="number"
                                      v-model="input.amount"
                                      required
                                      placeholder="Enter amount">
                        </b-form-input>
                    </b-form-group>

                    <b-button type="submit" variant="primary">Send</b-button>
                    <!--<b-button type="reset" variant="danger">Reset</b-button>-->
                </b-form>



            </div>
        </b-card>
        <div class="mt-5">
      <textarea>{{ response }}</textarea>

        <h6>My profile: {{ myprofile }}</h6>
        </div>
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
