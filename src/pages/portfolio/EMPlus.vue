<template>
    <b-col id="emplus">
        <b-card>
            <b-card-title>
                EventManager+
            </b-card-title>
            <b-card-text class="paragraph">
                <outer-link href="https://uniaim.co.jp/eventmanager/">EventManager+</outer-link> <br>
                大学２年次から在籍している<outer-link href="https://uniaim.co.jp/">株式会社ユニエイム</outer-link>で開発しているデジタルチケットソリューションです<br>
                <br>
                フロントエンドからバックエンド、単体テストや負荷テスト用のコードまで幅広く担当しています。<br>
                2019年度夏の案件では仕様の策定などにも携わらせていただき、様々な視点でシステムを考えることができるようになりました。<br>
            </b-card-text>
            <b-card-text class="paragraph">
                <b-card-sub-title>担当箇所</b-card-sub-title>
                フロントエンド、サーバーサイド、データベース設計、単体テスト作成、決済システム連携
            </b-card-text>
        </b-card>
    </b-col>
</template>

<script>
    import globalState from "@/globals";

    export default {
        name: "EMPlus",
        data() {
            return {
                globalState: globalState,
            }
        },
        mounted() {
            this.globalState.setEyeCatchImage(this.globalState.assets.img.emPlusImage);
            this.globalState.imageTitleLightColor = true;
        }
    }
</script>

<style type="text/scss">
    .paragraph {
        margin-bottom: 30px;
    }
</style>
