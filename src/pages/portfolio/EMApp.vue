<template>
    <b-col id="emplus">
        <b-card>
            <b-card-title>
                アプリ開発案件
            </b-card-title>
            <b-card-text class="paragraph">
                大学２年次から在籍している<outer-link href="https://uniaim.co.jp/">株式会社ユニエイム</outer-link>が請けたアプリ開発案件の開発を担当しました。<br>
                <br>
                主にデザイナーの人に起こしてもらったページに機能をつなげる作業と、管理画面の整理、リファクタリングを行っていました。
            </b-card-text>
            <b-card-text class="paragraph">
                <b-card-sub-title>担当箇所</b-card-sub-title>
                iPhoneアプリ、Androidアプリ、管理画面、データベース連携
            </b-card-text>
        </b-card>
    </b-col>
</template>

<script>
    import globalState from "@/globals";

    export default {
        name: "EMApp",
        data() {
            return {
                globalState: globalState,
            }
        },
        mounted() {
            this.globalState.setEyeCatchImage(this.globalState.assets.img.iphoneImage);
            this.globalState.imageTitleLightColor = true;
        }
    }
</script>

<style type="text/scss">
    .paragraph {
        margin-bottom: 30px;
    }
</style>
