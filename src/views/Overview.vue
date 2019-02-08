<template>

    <div class="stepCards mt-4">
        <div :class="{ 'align-items-center': toggleCollapse }" class="row ">
            <div class="col-md-1 ml-3">
                <slot name="logo"></slot>

            </div>
            <div class="col-md-3">
                <ign-custom-h5 class="stepsText ">
                    <strong>
                        <slot name="title"></slot>
                    </strong>
                </ign-custom-h5>
                <transition name="fade">
                    <slot v-if="!toggleCollapse" name="pictureWhenCollapsed"></slot>

                </transition>
            </div>
            <div class="col-md-7">
                <ign-custom-h5 class="stepsText">
                    <slot name="collapsedText"></slot>
                    {{ !toggleCollapse | oneOrThreeDots }}

                    <ign-custom-h5 v-b-toggle.step2 @click.native="toggleCollapse = !toggleCollapse"
                                   v-show="toggleCollapse" class="readMore">Lees meer
                    </ign-custom-h5>

                    <b-collapse class="mt-3" id="step2">
                        <div>
                            <slot name="uncollapsedText"></slot>
                        </div>
                        <slot name="button"></slot>

                        <ign-custom-h5 @click.native="toggleCollapse = !toggleCollapse" class="readMore"
                                       v-b-toggle.step2>Lees minder
                        </ign-custom-h5>
                    </b-collapse>
                </ign-custom-h5>
            </div>
        </div>
    </div>


</template>

<script>
    export default {
        name: 'AccordeonTest',
        data() {
            return {
                toggleCollapse: true,

            };
        },
        props: ['logoSrc'],
        filters: {
            oneOrThreeDots(value) {
                return value === true ? '...' : '.';
            },
        },
    };
</script>

<style scoped>

</style>
