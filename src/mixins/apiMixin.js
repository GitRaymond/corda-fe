import axios from 'axios'

export default {
    data() {
        return {
            https: axios.create({
                baseURL: 'http://192.168.43.118:10012/api/example/',
            }),
            myprofile: null,
        }
    },
    methods: {
        $_apiMixin_convertName(value) {
            let newVal = '';
            if (value.includes('Notary')) {
                newVal = 'Notary';
            } else if (value.includes('PartyC')) {
                newVal = 'ABN AMRO BANK';
            } else if (value.includes('PartyB')) {
                newVal = 'ING BANK';
            }  else if (value.includes('PartyA')) {
                newVal = 'RABO BANK';
            } else {
                newVal = value;
            }
            return newVal;
        },
        $_apiMixin_getMyProfile() {
            console.log('getMyProfile');
            this.https.get("me").then(result => {
                this.myprofile = this.$_apiMixin_convertName(result.data.me);
                console.log(this.$_apiMixin_convertName(result.data.me))
            }, error => {
                console.error(error);
            });
        },
    },

}
