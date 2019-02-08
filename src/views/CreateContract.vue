<template>
    <div class="justify-content-center">


        <b-card title="New Contract" class="mt-5 c-card" >
            <div class="">
                <b-form @submit.prevent="sendData">
                


                        <b-form-select id="counterParty"  v-model="selected" :options="peers" class="mb-3">
                            <template slot="first">
                                <!-- this slot appears above the options from 'options' prop -->
                                <option :value="null" disabled>-- Please select an option --</option>
                            </template>

                        </b-form-select>

                    </b-form-group>
                    <b-form-group id="amount"
                                  label="Amount"
                                  label-for="amount"
                    class="c-input">
                        <b-form-input id="amount"
                                      type="number"
                                      v-model="input.amount"
                                      max="100"
                                      required
                                      class="c-input"
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
        methods: {
            convertName(value) {
                let newVal = '';

                if(value === 'O=Notary Service, L=Zurich, C=CH') {
                    newVal = 'Notary, Amsterdam';
                } else if(value === 'O=PartyC, L=Paris, C=FR') {
                    newVal = 'ABN AMRO BANK';
                } else if(value === 'O=PartyB, L=New York, C=US') {
                    newVal = 'ING BANK';
                } else {
                    newVal = value;
                }
                return newVal;
            },

            sendData() {
                this.$http.post("https://httpbin.org/post", this.input, {headers: {"content-type": "application/json"}}).then(result => {
                    this.response = result.data.json.counterparty + result.data.json.amount;
                }, error => {
                    console.error(error);
                });
            }
        },
        mounted() {
            this.domain = 'http://172.20.10.13:10009/api/example/';
            this.peers = [];
            //Get profile name
            this.$http.get(this.domain + "me").then(result => {
                this.myprofile = this.convertName(result.data.me);
            }, error => {
                console.error(error);
            });

            //Get counterparties
            this.$http.get(this.domain + "peers").then(result => {

                let list=[];
                result.data.peers.map(function(value) {
                    list.push({option: value, text: this.convertName(value)});
                });

                this.peers = list;

            }, error => {
                console.error(error);
            });
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

    .c-card {
        opacity: 0.95;
    }

    .c-input {
        opacity: 1;
    }
</style>
