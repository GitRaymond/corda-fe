<template>
    <div class="row">
        <div class="col-6">
            <b-card title="New Contract" class="mt-5 c-card">
                <div class="">
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
                    <b-form @submit.prevent="sendData">
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Counterparty</label>
                            <div class="col-sm-9">
                                <b-form-select id="counterParty" v-model="selected" :options="peers" @input="getSelectedItem()">
                                    <template slot="first">
                                        <option :value="null" disabled>Select a counterparty</option>
                                    </template>
                                </b-form-select>
                            </div>

                        </div>

                        <div class="form-group row">
                            <label for="amount" class="col-sm-3 col-form-label text-left">Amount</label>
                            <div class="col-sm-9">
                                <input type="number"
                                       v-model="input.amount"
                                       max="100"
                                       required
                                       class="form-control"
                                       id="amount"
                                       placeholder="Enter amount">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="percentage" class="col-sm-3 col-form-label text-left">Percentage</label>
                            <div class="col-sm-9">
                                <input type="number"
                                       v-model="input.percentage"
                                       max="100"
                                       required
                                       class="form-control"
                                       id="percentage"
                                       placeholder="Reinsurance (in percentage)">
                            </div>
                        </div>


                        <div class="form-group row">
                            <label for="duration" class="col-sm-3 col-form-label text-left">Duration</label>
                            <div class="col-sm-9">
                                <input type="number"
                                       v-model="input.duration"
                                       class="form-control"
                                       required
                                       id="duration"
                                       placeholder="Duration (in months)">
                            </div>
                        </div>


                        <div class="form-group row">
                            <label for="typeofcontract" class="col-sm-3 col-form-label text-left">Type</label>
                            <div class="col-sm-9">
                                <input type="text"
                                       v-model="input.type"
                                       class="form-control"
                                       required
                                       id="typeofcontract"
                                       placeholder="Type">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="nameofcontract" class="col-sm-3 col-form-label text-left">Product</label>
                            <div class="col-sm-9">
                                <input type="text"
                                       v-model="input.name"
                                       class="form-control"
                                       required
                                       id="nameofcontract"
                                       placeholder="Name">
                            </div>
                        </div>
                        <div class="form-group row justify-content-end mr-1">
                        <button class="btn btn-success" type="submit" :disabled="!isValid">Create Contract</button>
                        </div>


                    </b-form>

                </div>
            </b-card>
        </div>
        <div class="col-6">
            <img src="../assets/agreement.png" height="400" width="400" class="mt-5 ml-5"/>
        </div>

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
                input: {
                    amount: "",
                    name: "",
                    type: "",
                    percentage: "",
                    duration: ""
                },
                response: "",
                peers: [],
            }
        },
        computed: {
            isValid() {
                return this.input.amount &&
                    this.input.name &&
                    this.input.type &&
                    this.input.percentage &&
                    this.input.duration &&
                    this.selected;
            }
        },
        methods: {
            countDownChanged(dismissCountDown) {
                this.dismissCountDown = dismissCountDown;
            },
            showAlert() {
                this.dismissCountDown = this.dismissSecs
            },

            sendData() {
                const postData = {
                    partyName: this.selected,
                    iouValue: this.input.amount,
                    name: this.input.name,
                    percentage: this.input.percentage,
                    duration: this.input.duration,
                    type: this.input.type
                };

                const url = "create-iou?partyName=" + this.selected + "&iouValue=" +
                    this.input.amount + '&name=' +
                    this.input.name + '&type=' +
                    this.input.type + '&percentage=' +
                    this.input.percentage + '&duration=' + this.input.duration

                this.https.put(url, postData, {headers: {"content-type": "application/json"}})
                    .then(() => {
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
            getSelectedItem: function () {
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
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .c-input {
        opacity: 1;
    }
</style>
