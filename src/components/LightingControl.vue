<template>
    <b-form-group
            v-if="visible"
            label="テーマ">
        <b-form-radio-group
                :checked="lighting"
                @input="switchLighting"
                buttons
                :options="[
                    { text: '明るい', value: 'light' },
                    { text: '自動', value: 'auto' },
                    { text: '暗い', value: 'dark' }
                ]"/>
    </b-form-group>
</template>

<script>
    export default {
        name: 'LightingControl',
        model: {
            prop: 'lighting',
            event: 'change'
        },
        props: {
            visible: {
                default: false,
                type: Boolean
            },
            lighting: {
                required: true,
                type: String
            }
        },
        methods: {
            switchLighting(lighting) {
                this.$emit('change', lighting)
            }
        }
    }
</script>

<style scoped>

</style>