<template>
    <div class="w-50">
        <br/>
        <b-list-group>
            <b-list-group-item href="#" class="flex-column align-items-start" v-for="contract in contracts.slice().reverse()">

                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1"><strong>Lender:</strong> {{contract.lender}}</h5>
                    <small class="text-muted">{{contract.value}}</small>
                </div>

                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1"><strong>Borrower:</strong> {{contract.borrower}}</h5>
                </div>

            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
    import apiMixin from '../mixins/apiMixin';

    export default {
        name: 'Overview',
        mixins: [
            apiMixin,
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
                            lender: _this.$_apiMixin_convertName(contract.lender)
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
        }

    }
</script>

<style scoped>

</style>
