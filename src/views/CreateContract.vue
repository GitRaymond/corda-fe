<template>
    <div class="justify-content-center w-50">


        <b-card title="New Contract" class="mt-5 c-card">
            <div class="">
                <b-form @submit.prevent="sendData">


                    <b-form-select id="counterParty" v-model="selected" :options="peers" @input="getSelectedItem()" class="mb-3">
                        <template slot="first">
                            <!-- this slot appears above the options from 'options' prop -->
                            <option :value="null" disabled>-- Please select a counterparty --</option>
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

                    <b-button type="submit" variant="primary">Send</b-button><br/><br/>
                    <b-alert :show="dismissCountDown"
                             dismissible
                             variant="success"
                             @dismissed="dismissCountDown=0"
                             @dismiss-count-down="countDownChanged">
                        <h4 class="alert-heading">Well done!</h4>
                        <p>
                            Ohh yeah, you successfully placed the contract
                        </p>
                        <hr>
                        <p class="mb-0">
                            See you back soon
                        </p>
                    </b-alert>


                </b-form>
            </div>
        </b-card>

    </div>
</template>


<script>
    import apiMixin from '../mixins/apiMixin';

    export default {
        name: 'CreateContract',
        mixins: [
            apiMixin,
        ],
        data() {
            return {
                dismissSecs: 5,
                dismissCountDown: 0,
                myprofile: "",
                selected: null,
                peers: [],
                input: {
                    amount: ""
                },
                response: "",
                domain: 'http://172.20.10.13:10009/api/example/',
                peers: [],
            }
        },
        methods: {
            countDownChanged (dismissCountDown) {
                this.dismissCountDown = dismissCountDown;
            },
            showAlert () {
                this.dismissCountDown = this.dismissSecs
            },

            sendData() {
                const postData = {
                    partyName: this.selected,
                    iouValue: this.input.amount
                };
                this.https.put("create-iou?partyName="+this.selected+"&iouValue="+this.input.amount, postData, {headers: {"content-type": "application/json"}})
                    .then((result) => {
                        this.showAlert();
                    })
                    .catch((error) => {
                    console.error(error);
                });
            },
            getAllParties() {
                this.https.get("peers").then(result => {
                    let list = [];
                    var _this = this;
                     result.data.peers.map(function (value) {
                        list.push({value: value, text: _this.$_apiMixin_convertName(value)});
                    });
                    this.peers = list;
                }, error => {
                    console.error(error);
                });
            },
            getSelectedItem: function() {
                console.log(this.selected);
            }

        },
        mounted() {
            this.$_apiMixin_getMyProfile();
            this.getAllParties();
        },

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
