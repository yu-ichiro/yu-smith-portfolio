<template>
    <b-col id="portfolio">
        <b-card>
            <b-card-title>
                ポートフォリオ
            </b-card-title>
            <b-card-group columns class="item-list">
                <b-card>
                    <b-card-title>
                        <font-awesome-icon icon="ticket-alt" size="sm"/>
                        株式会社ユニエイム > EventManager+
                    </b-card-title>
                    <b-card-text>
                        アルバイト先の株式会社ユニエイムで開発しているソリューション<br>
                        <br>
                        <b-button to="/portfolio/uniaim/emplus" class="card-link" variant="primary">
                            詳細 »
                        </b-button>
                    </b-card-text>
                </b-card>
                <b-card>
                    <b-card-title>
                        <font-awesome-icon icon="mobile-alt" size="sm"/>
                        株式会社ユニエイム > アプリ開発案件
                    </b-card-title>
                    <b-card-text>
                        アルバイト先の株式会社ユニエイムで開発したアプリ<br>
                        <br>
                        <b-button to="/portfolio/uniaim/emapp" class="card-link" variant="primary">
                            詳細 »
                        </b-button>
                    </b-card-text>
                </b-card>
                <b-card>
                    <b-card-title>
                        <font-awesome-icon icon="graduation-cap" size="sm"/>
                        hit-u.net
                    </b-card-title>
                    <b-card-text>
                        一橋の有志で作る一橋生のための情報ポータル<br>
                        <br>
                        <b-button to="/portfolio/hitunet" class="card-link" variant="primary">
                            詳細 »
                        </b-button>
                    </b-card-text>
                </b-card>
                <b-card>
                    <b-card-title>
                        <font-awesome-icon icon="tools" size="sm"/>
                        ex-tools
                    </b-card-title>
                    <b-card-text>
                        ネーミングセンス、、<br>
                        Pythonのライブラリ？です。<br>
                        itertoolsとfunctoolsをまとめてインポートできるようにして、さらにオリジナルの機能をいくつか幾つか追加した感じのもの。<br>
                        pipetoolsなどにも影響を受けて似たようなものも作ってます。<br>
                        <br>
                        PyPIにあげる練習も兼ねてやりました。<br>
                        <code>pip install ex_tools</code>でインストールできます。<br>
                        <br>
                        <outer-link href="https://github.com/yu-ichiro/ex-tools">Githubリポジトリ</outer-link>
                    </b-card-text>
                </b-card>
                <b-card>
                    <b-card-title>
                        <font-awesome-icon icon="address-card" size="sm"/>
                        yu-smith.com
                    </b-card-title>
                    <b-card-text>
                        このサイトです。<br>
                        Vue.jsを基本に、Vue-router、SCSSなどを使って組み立て、Netlifyでホスティングしています。<br>
                        海外の人の仕事も請けたいから多言語対応もしたさがある..<br>
                        <br>
                        ソースコードは<outer-link href="https://github.com/yu-ichiro/yu-smith-portfolio">こちら</outer-link>にあります。
                    </b-card-text>
                </b-card>
            </b-card-group>
        </b-card>
    </b-col>
</template>

<script>
    import globalState from "@/globals";

    export default {
        name: "Portfolio",
        data() {
            return {
                globalState: globalState,
            }
        },
        mounted() {
            this.globalState.setEyeCatchImage(this.globalState.assets.img.portfolioImage);
            this.globalState.imageTitleLightColor = false;
        }
    }
</script>

<style lang="scss" scoped>
    .item-list {
        @include media-breakpoint-up(lg) {
            column-count: 2;
        }
        @include media-breakpoint-down(md) {
            column-count: 1;
        }
    }
</style>
