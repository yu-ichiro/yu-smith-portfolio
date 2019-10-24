<template>
    <b-col id="top">
        <b-card>
            <b-card-text>
                スミス 祐一郎のポートフォリオサイト<br><br>
                <b-card-group columns class="links">
                    <b-card>
                        <b-card-title>
                            <font-awesome-icon icon="address-card" size="sm"/>
                            About
                        </b-card-title>
                        <b-card-text>経歴など</b-card-text>
                        <b-button to="/about" class="card-link" variant="primary">
                            Go »
                        </b-button>
                    </b-card>
                    <b-card>
                        <b-card-title>
                            <font-awesome-icon icon="file-image" size="sm"/>
                            Portfolio
                        </b-card-title>
                        <b-card-text>作ったもの一覧</b-card-text>
                        <b-button to="/portfolio" class="card-link" variant="primary">
                            Go »
                        </b-button>
                    </b-card>
                    <b-card v-if="false">
                        <b-card-title>
                            <font-awesome-icon icon="pen" size="sm"/>
                            Blog
                        </b-card-title>
                        <b-card-text>ブログ</b-card-text>
                        <b-button to="/blog" class="card-link" variant="primary" disabled>
                            Go »
                        </b-button>
                    </b-card>
                    <b-card v-if="false">
                        <b-card-title>
                            <font-awesome-icon icon="history" size="sm"/>
                            Updates
                        </b-card-title>
                        <b-card-text>今何しているかなど</b-card-text>
                        <b-button to="/updates" class="card-link" variant="primary" disabled>
                            Go »
                        </b-button>
                    </b-card>
                    <b-card>
                        <b-card-title>
                            <font-awesome-icon icon="headset" size="sm"/>
                            Contact
                        </b-card-title>
                        <b-card-text>ご連絡はこちらまで</b-card-text>
                        <b-button to="/contact" class="card-link" variant="primary">
                            Go »
                        </b-button>
                    </b-card>
                </b-card-group>
            </b-card-text>
        </b-card>
    </b-col>
</template>

<script>
    import globalState from "@/globals";

    export default {
        name: "Top",
        data() {
            return {
                globalState: globalState
            }
        },
        mounted() {
            this.globalState.eyeCatchImage = this.globalState.assets.img.lightImage;
        }
    }
</script>

<style lang="scss" scoped>
    .links {
        @include media-breakpoint-up(lg) {
            column-count: 2;
        }
        @include media-breakpoint-down(md) {
            column-count: 1;
        }
    }
</style>
