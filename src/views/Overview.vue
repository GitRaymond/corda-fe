<template>
    <div class="w-50 l-group m-5" :style="'background-color: '+ $_colorMixin_getHeaderBgColor() + ';'">

        <b-list-group class="l-group" flush :style="'background-color: '+ $_colorMixin_getHeaderBgColor() + ';'">
            <b-list-group-item class="flex-column align-items-start bg-light">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">Smart contracts</h5>
                    <span>Total: <b-badge variant="primary" pill>{{contracts.length}}</b-badge></span>

                </div>
            </b-list-group-item>


            <b-list-group-item class="flex-column align-items-start" v-for="contract in contracts.slice().reverse()">

                <div class="d-flex w-100 justify-content-between">
                    <h5>{{contract.contractname}}</h5>
                </div>

                <div class="d-flex w-100 justify-content-between">
                    <h6 class="mb-1"><strong>Lender:</strong> {{contract.lender}}</h6>
                    <small class="text-muted">{{contract.value}}</small>
                </div>

                <div class="d-flex w-100 justify-content-between">
                    <h6 class="mb-1"><strong>Borrower:</strong> {{contract.borrower}}</h6>
                </div>

                <div class="d-flex w-100 justify-content-between">
                    <h6 class="mb-1">Smart contract of {{contract.type}} for {{contract.percentage}}% with
                        {{contract.duration}} months</h6>
                </div>

            </b-list-group-item>
        </b-list-group>

    </div>
</template>

<script>
    import apiMixin from '../mixins/apiMixin';
    import colorMixin from '../mixins/colorMixin';

    export default {
        name: 'Overview',
        mixins: [
            apiMixin,
            colorMixin,
        ],
        data() {
            return {
                contracts: []
            }
        },
        methods: {
            getListOfContracts() {
                this.https.get("ious").then(result => {
                    let list = [];
                    let list2 = [];
                    let _this = this;

                    result.data.map(function (value) {
                        list.push(value.state.data);
                    });

                    list.map(function (contract) {
                        list2.push({
                            value: contract.value,
                            borrower: _this.$_apiMixin_convertName(contract.borrower),
                            lender: _this.$_apiMixin_convertName(contract.lender),
                            percentage: contract.percentage,
                            duration: contract.duration,
                            contractname: contract.name,
                            type: contract.type
                        });
                    });
                    this.contracts = list2;
                }, error => {
                    console.error(error);
                });
            }
        },
        mounted() {
            this.getListOfContracts();
            this.$_apiMixin_getMyProfile();
        }

    }
</script>

<style scoped>
    .l-group {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
</style>
