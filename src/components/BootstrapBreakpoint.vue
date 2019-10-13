<template>
    <div style="height: 0">
        <div ref="xs" class="d-block d-sm-none"></div>
        <div ref="sm" class="d-none d-sm-block d-md-none"></div>
        <div ref="md" class="d-none d-md-block d-lg-none"></div>
        <div ref="lg" class="d-none d-lg-block d-xl-none"></div>
        <div ref="xl" class="d-none d-xl-block"></div>
    </div>
</template>

<script>
    export default {
        name: "BootstrapBreakpoint",
        data() {
            return {
                breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'],
                currentBreakpoint: null
            }
        },
        methods: {
            setCurrentBreakpoint() {
                for (let breakpoint of this.breakpoints) {
                    if (window.getComputedStyle(this.$refs[breakpoint]).display === 'block') {
                        this.currentBreakpoint = breakpoint;
                        break;
                    }
                }
            }
        },
        mounted() {
            this.setCurrentBreakpoint();
            window.onresize = this.setCurrentBreakpoint.bind(this);
        },
        watch: {
            currentBreakpoint() {
                this.$emit('breakpointChanged', this.currentBreakpoint);
            }
        }
    }
</script>
