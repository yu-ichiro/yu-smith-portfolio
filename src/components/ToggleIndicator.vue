<template>
    <font-awesome-icon class="rotate" icon="chevron-right" size="sm" :style="rotate" />
</template>

<script>
    export default {
        name: "ToggleIndicator",
        props: {
            toggle: {required: true}
        },
        computed: {
            rotate() {
                return this.toggle ? {
                    transform: 'rotate(90deg)'
                }: {};
            }
        }
    }
</script>

<style scoped>
    .rotate {
        vertical-align: unset;
        transition: transform 0.5s ease-in-out;
    }
</style>
