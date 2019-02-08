export default {
    methods: {
        $_colorMixin_getBodyBgColor() {
            if (this.myprofile === 'RABO BANK') {
                return 'rgba(253, 100, 1, 0.02)';
            } else if (this.myprofile === 'ABN AMRO BANK') {
                return 'rgb(0, 146, 134, 0.02)';
            } else if (this.myprofile === 'ING BANK') {
                return 'rgb(255, 98, 1, 0.02)';
            }
        },
        $_colorMixin_getHeaderBgColor() {
            if (this.myprofile === 'RABO BANK') {
                return 'rgba(253, 100, 1)';
            } else if (this.myprofile === 'ABN AMRO BANK') {
                return 'rgb(0, 146, 134)';
            } else if (this.myprofile === 'ING BANK') {
                return 'rgb(255, 98, 1)';
            }
        }
    },
}
