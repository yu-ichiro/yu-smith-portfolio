<template>
    <b-col id="contact">
        <b-card>
            <b-card-title>
                連絡先
            </b-card-title>
            <b-card-text>
                <dl>
                    <dt>Twitter</dt>
                    <dd>
                        HIT-COLLECTION: <a href="https://twitter.com/hitcolle_19_ys" target="_blank">@hitcolle_19_ys</a>
                    </dd>
                    <dd>
                        すゆみす(テクノロジー関係のアカウントをフォローしています): <a href="https://twitter.com/yu___smith" target="_blank">@yu___smith</a>
                    </dd>
                    <dt>Instagram</dt>
                    <dd>
                        HIT-COLLECTION: <a href="https://instagram.com/hitcolle_19_ys" target="_blank">@hitcolle_19_ys</a>
                    </dd>
                    <dt>Github</dt>
                    <dd>
                        <a href="https://github.com/yu-ichiro" target="_blank">@yu-ichiro</a>
                    </dd>
                    <dt>Qiita</dt>
                    <dd>
                        <a href="https://qiita.com/yu-ichiro" target="_blank">@yu-ichiro</a>
                    </dd>
                </dl>
            </b-card-text>
        </b-card>
    </b-col>
</template>

<script>
    import globalState from "@/globals";

    export default {
        name: "Contact",
        data() {
            return {
                globalState: globalState,
            }
        },
        mounted() {
            this.globalState.eyeCatchImage = this.globalState.assets.img.greenImage;
        }
    }
</script>

<style lang="scss" scoped>
    .card {
        margin-bottom: 1rem;
    }
</style>
