<template>
    <div class="row">

        <div class="col-6  my-5" >
            <b-list-group class="l-group" flush >
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
        <div class="col-3 mt-5 bg-red">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="490" height="460" viewBox="0 0 490 460"><defs><linearGradient id="b" x1="97.752%" x2="0%" y1="50%" y2="50%"><stop offset="0%" stop-color="#3291F0" stop-opacity="0"/><stop offset="49.779%" stop-color="#3291F0"/><stop offset="100%" stop-color="#3291F0" stop-opacity="0"/></linearGradient><linearGradient id="c" x1="100%" x2="0%" y1="50%" y2="50%"><stop offset="0%" stop-color="#1E4664" stop-opacity="0"/><stop offset="100%" stop-color="#1E4664" stop-opacity=".25"/></linearGradient><rect id="d" width="230" height="155" rx="10"/><rect id="f" width="218" height="129" rx="4"/><path id="i" d="M0 0H90V109H0z"/><filter id="h" width="110%" height="108.3%" x="-5%" y="-4.1%" filterUnits="objectBoundingBox"><feOffset in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="1.5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0.137254902 0 0 0 0 0.196078431 0 0 0 0 0.254901961 0 0 0 0.15 0"/></filter><path id="a" d="M0 20H30V40H0z"/><mask id="j" width="30" height="20" x="0" y="0" fill="#fff"><use xlink:href="#a"/></mask><path id="k" d="M21.777 27.264c-1.646 0-15.833-1.552-16.574-19.984 0 0-5.45.42-5.194-.664.294-1.241 3.956-1.343 6.055-2.377C6.96 1.232 10.475 0 12.821 0c7.627 0 5.605 10.137 17.111 9.452 11.506-.685 14.182-.43 21.475-6.148.908 5.717.097 7.441.097 7.441s-3.424.907-10.66 0c-3.542 15.892-17.42 16.519-19.067 16.519z"/><path id="m" d="M.081 193.946L6.217 74.798s65.717.547 71.725.547c13.562.871 15.944-4.489 18.474-14.275C98.946 51.284 112.633.698 112.633.698l4.948.854s-17.676 70.41-17.676 75.27c0 4.86 19.106 117.124 19.106 117.124h-8.042L92.218 95.733s-4.35-9.827-38.43-9.827c-34.078 0-38.22 9.456-38.22 9.456l-9.35 98.584H.08z"/><path id="p" d="M45.216 170.509c-4.037 2.103-16.035 26.835-18.284 83.645-.49 16.064-3.409 36.872-6.79 44.84 0 0 9.57-3.702 19.593-10.71 10.023-7.008 3.46-19.216 3.46-19.216s-1.796-12.565 15.498-42.441c17.294-29.876 7.498-40.15 7.498-40.15s-16.939-18.072-20.975-15.968z"/><filter id="o" width="124.6%" height="109.3%" x="-6.1%" y="-2.3%" filterUnits="objectBoundingBox"><feOffset dx="3" dy="3" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="1.5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0.137254902 0 0 0 0 0.196078431 0 0 0 0 0.254901961 0 0 0 0.25 0"/></filter></defs><g fill="none" fill-rule="evenodd" transform="translate(0 14)"><path fill="url(#b)" d="M0 217H490V227H0z"/><g transform="translate(115 27)"><path fill="url(#c)" transform="translate(110 160)" d="M0 0H120V20H0z"/><path fill="#1E5FA0" d="M95 155h40s1.921 12.5 20 25H75c17.63-11.317 20-25 20-25z"/><mask id="e" fill="#fff"><use xlink:href="#d"/></mask><use fill="#2B6FAF" xlink:href="#d"/><g mask="url(#e)"><g transform="translate(6 6)"><mask id="g" fill="#fff"><use xlink:href="#f"/></mask><use fill="#EFF3F9" xlink:href="#f"/><path fill="#273446" mask="url(#g)" d="M0 0H218V15H0z"/><g mask="url(#g)"><g transform="translate(64 9)"><use fill="#000" filter="url(#h)" xlink:href="#i"/><use fill="#FFF" xlink:href="#i"/><g transform="translate(10 10)"><path fill="#379BFF" d="M0 50H45V54H0z"/><path fill="#379BFF" d="M55 50H70V54H55z"/><path fill="#379BFF" d="M0 60H45V64H0z"/><path fill="#379BFF" d="M55 60H70V64H55z"/><circle cx="60" cy="10" r="10" fill="#379BFF"/><path fill="#379BFF" d="M0 70H45V74H0z"/><path fill="#379BFF" d="M55 70H70V74H55z"/><path fill="#2B6FAF" d="M55 80H70V84H55z"/><path fill="#2B6FAF" d="M30 80H45V84H30z"/><use stroke="#20EFC8" stroke-dasharray="5" stroke-width="2" mask="url(#j)" xlink:href="#a"/></g></g></g></g></g></g><g transform="translate(245)"><mask id="l" fill="#fff"><use xlink:href="#k"/></mask><use fill="#1E82E6" xlink:href="#k"/><path fill="#216AB2" mask="url(#l)" d="M41 -1L56 -1 56 15 40 15z"/><circle cx="24" cy="1" r="19" fill="#379BFF" mask="url(#l)"/><path fill="#216AB2" d="M-4-8h40C33.867-5.34 24.519 8.154 19.905 10.59c-4.614 2.437-15.745 2.565-5.841 15.21L-4 28V-8z" mask="url(#l)"/><circle cx="2" cy="5" r="4" fill="#FFD488" mask="url(#l)"/><circle cx="13.5" cy="4.5" r="1.5" fill="#233241" mask="url(#l)"/><circle cx="12.5" cy="4.5" r="1" fill="#FFF" mask="url(#l)"/></g><g transform="translate(188 97)"><path fill="url(#c)" transform="translate(39 329)" d="M0 0H120V20H0z"/><g transform="translate(90 137)"><g transform="translate(0 18)"><mask id="n" fill="#fff"><use xlink:href="#m"/></mask><use fill="#2B6FAF" xlink:href="#m"/><path fill="#1E5FA0" mask="url(#n)" transform="rotate(3 5.324 131.53)" d="M3.309 68.882L7.339 69.375 7.339 193.923 3.309 194.178z"/></g><rect width="75" height="6" x="8" y="88" fill="#20EFC8" rx="3"/><rect width="79.142" height="6" x="65.497" y="35.999" fill="#20EFC8" rx="3" transform="rotate(105 105.068 38.999)"/></g><path fill="#20EFC8" d="M169 70h5c0 9.248-8.702 18.055-8.702 18.055S169 74.1 169 70z"/><g transform="translate(158 26)"><path fill="#FFF" d="M2.285.684c-.636 3.804 3.687 15.26 0 20.936-3.688 5.674-1.082 4.538 3.603 5.674 2.7 12.056 2.506 23.583 18.107 17.2 2.553 13.04-16.56 43.698-16.56 43.698S36.52 74.205 47.048 60.034c0 0-8.396-20.384-4.357-53.48-1.965.211-33.578 3.856-40.407-5.87z"/><ellipse cx="9.5" cy="20" fill="#216AB2" rx="1" ry="2" transform="rotate(-9 9.5 20)"/><path stroke="#216AB2" stroke-linecap="round" d="M7.124 13.212c-1.762 0 2.51-.572 8.139 2.674"/><path fill="#216AB2" d="M7.334 34.414C10.648 34.153 13.61 34 13.61 34s-.78 2.5-2.146 3.505c-1.367 1.004-3.282.616-3.282.616s-.682-2.695-.848-3.707z"/></g><path fill="#20EFC8" d="M161.434 42.806C150.837 19.6 167.938 5.79 182.074 5.79c14.135 0 32.763 11.864 31.005 29.26-1.758 17.395-11.319 20.918-7.394 32.437-2.891-.645-10.602-6.21-10.602-14.367 0-8.158 3.8-8.784.43-11.992-3.372-3.208-5.725 5.832-5.725 9.43-2.812-3.598-4.123-10.623-9.143-10.623-5.02 0-16.812-10.088-17.084-10.367 0 0 .526 4.114-2.127 13.237z"/><circle cx="208.5" cy="12.5" r="12.5" fill="#20EFC8"/><path fill="#FFF" d="M192.148 49.81c2.054.733 4.587-1.573 5.656-5.15 1.069-3.576.27-7.07-1.785-7.802-2.054-.733-4.586 1.573-5.655 5.15-1.07 3.576-.27 7.07 1.784 7.802z"/><path stroke="#AED7FF" stroke-width="2" d="M75.374 99.753s6.31-2.07 6.157 2.315c-.152 4.384-10.825 8.163-10.825 8.163"/><path fill="#AED7FF" d="M55 96h22s.828 8.5-5.978 17H60c-7.065-8.5-5-17-5-17z"/><path fill="#FFF" d="M161.333 114.562l-17.168 13.904s-18.267-12.32-22.377-14.638c-4.11-2.316-19.935-9.975-22.224-12.787-2.288-2.813-1.508-16.081-2.852-20.33-3.202 0-2.29 2.025-3.202 13.02-.715-5.028-1.133-14.361-1.909-14.727-2.289.366-3.663-1.098-1.283 15.012-2.049-5.789-2.47-8.901-3.749-10.235-.484.313-4.666.683 2.173 13.988-2.173-.354-4.498-1.619-5.874-1.327-1.376.292-4.409 5.044-7.036 6.496 1.729 2.283 5.752-.489 7.418-2.433 2.222.536 6.82.213 5.83 3.413-3.815 4.576-12.864-1.317-14.536 3.69 5.459 2.8 7.751 2.397 14.039 4.443 6.287 2.046 9.71-1.44 29.48 13.74 19.768 15.179 22.175 22.878 25.546 22.878 3.37 0 16.414-14.057 21.992-18.026 5.579-3.969-4.268-16.081-4.268-16.081z"/><path stroke="#AED7FF" stroke-width="2" d="M75.374 99.753s6.31-2.07 6.157 2.315"/><path fill="#FFF" d="M108.847 176.76l-51.173 8.933s-25.27 47.403-20.851 64.371c4.419 16.969 6.645 57.88-12.139 84.814-3.288 15.125 15.407 9.54 15.407 9.54s16.516-8.725 17.583-17.106c-4.323-30.682 6.95-59.642 7.876-76.73.927-17.087-2.233-25.927-2.233-25.927s30.984.898 39.143-1.729c8.16-2.627 18.667-29.886 18.667-29.886l-12.28-16.28z"/><use fill="#000" filter="url(#o)" opacity=".5" xlink:href="#p"/><path fill="#FFF" d="M101.54 167.207s-43.021-14.623-47.57-12.52c-4.55 2.104-25.845 42.657-28.38 99.467-.55 16.064-8.396 25.179-12.208 33.147l20.508-.06 9.549-17.023s-1.543-13.715 17.95-43.591c19.492-29.876 8.45-40.15 8.45-40.15s32.223-6.902 40.785-7.583c8.562-.682-9.083-11.687-9.083-11.687z"/><path fill="#AED7FF" d="M147.214 155.206s-7.15 13.867-9.564 21.419c-12.976-4.478-36.64-9.29-36.64-9.29s4.008 7.898 4.732 13.894c-11.84 9.323-24.044 36.563-26.227 43.564 11.792 7.492 10.523 19.662 12.747 20.218 2.224.556 19.34-20.497 54.002-19.405 34.662 1.093 40.376-10.926 42.785-45.834 2.409-34.908 1.34-25.671 0-31.61-24.824 3.803-41.835 7.044-41.835 7.044z"/><path fill="#2B6FAF" d="M202.41 72.76c-2.453 5.602-21.92 24.099-27.976 27.064 3.293-6.478 4.614-13.078 5.25-14.488-17.808 13.655-26.405 21.66-27.792 44.758-1.388 23.098-9.254 33.036-8.323 33.036.93 0 45.463 16.652 45.463 16.652s5.339-26.057 14.082-41.166c2.825 5.118 6.241 8.122 6.241 8.122s9.42-9.267 21.842-4.634c0-24.76-10.978-51.075-28.788-69.343z"/><path fill="#20EFC8" d="M15.675 283.115C13.608 287.13-6.74 300.481 2.81 309.083c17.803-6.763 24.642-10.6 33.061-16.532 8.419-5.933 17.222-5.756 7.596-24.756-1.81 2.743-8.158 10.91-11.65 12.254-3.49 1.344-8.65 3.845-16.142 3.066zm10.04 51.098c-12.089 4.706-20.684 7.73-20.684 15.176 20.684-.4 26.993-.4 34.014-.4 17.635-12.784 24.066-10.17 19.528-22.542-.577-2.701.584-1.916-1.501-9.058-3.332 6.838-10.282 17.093-19.739 23.913-5.083-3.498-7.599-4.306-11.618-7.089z"/><path fill="#FFF" d="M208.63 145.109s3.422 4.968 3.422 6.314-26.58 7.327-37.424 7.875c-10.844.548-34.523-.3-36.133 19.596-1.372 12.893-.614 11.44-.26 14.49 2.66 1.689 4.266-17.82 5.6-19.957-.657 2.138-4.397 20.366-1.015 22.039 5.22-1.406 1.015-16.872 4.153-19.538-.833 2.966-1.488 12.108.357 18.536 3.566-.56 2.444-16.672 4.061-18.305-.016 3.458-.772 12.197 0 15.846 4.08 0 2.085-17.89 8.79-20.114 6.704-2.224 45.448-2.12 59.205-.679 1.448.152 2.773.182 3.983.103 10.283-.673 12.228-9.205 10.43-17.388-2.008-9.147-2.44-9.427-3.697-13.414-10.863-4.52-21.473 4.596-21.473 4.596z"/></g></g></svg>
            </div>
        </div>
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
