<template>
    <b-col id="hitunet">
        <b-card>
            <b-card-title>
                hit-u.net
            </b-card-title>
            <b-card-text class="paragraph">
                <outer-link href="https://hit-u.net">hit-u.net</outer-link> は一橋生による、一橋生のための情報共有サイトを目指して、
                <outer-link href="https://twitter.com/1284cowork">一橋 IT CO-WORK</outer-link>内の複数人のグループで作りました。<br>
                学校のウェブサイト、情報ポータル、各種掲示板、さらにはTwitter上などいろいろなところに散らばってしまっている情報群を集約することを目標に、現在は高速な授業検索エンジンとして2019年度のデータを検索できる（はず）です。<br>
                <br>
                (現在は開発を停止しています。一緒にやっていただける方募集中？)
            </b-card-text>
            <b-card-text class="paragraph">
                <b-card-sub-title>主な機能</b-card-sub-title>
                <ul>
                    <li>一橋生を対象としたメンバー登録</li>
                    <li>授業・サークルのデータベースと、高速な検索</li>
                    <li>情報をみんなで編集できるWiki</li>
                    <li>授業データの半自動登録機能</li>
                </ul>
            </b-card-text>
            <b-card-text class="paragraph">
                <b-card-sub-title>使用技術</b-card-sub-title>
                hit-u.netでは複数人開発を前提に使用できる技術を選定し、<br>
                <outer-link href="https://a2c.bitbucket.io/flask/">Flask</outer-link> (Pythonの軽量Webフレームワーク) +
                <outer-link href="https://jinja.palletsprojects.com/en/2.10.x/">Jinja2</outer-link> (Flaskでの使用を考えて作られたHTMLテンプレートエンジン) +
                <outer-link href="https://www.mysql.com/jp/">MySQL</outer-link> (データベース) +
                <outer-link href="https://redis.io/">Redis</outer-link> (キャッシュサーバー)
                の構成でフロントエンド、バックエンドを実装しています。<br>
                開発管理には<outer-link href="https://github.com">Github</outer-link>や<outer-link href="https://trello.com">Trello</outer-link>を使い、連携して開発しています。
            </b-card-text>
            <b-card-text class="paragraph">
                <b-card-sub-title>担当箇所</b-card-sub-title>
                企画、インフラ設計、コード設計、バックエンド実装
            </b-card-text>
        </b-card>
    </b-col>
</template>

<script>
    import globalState from "@/globals";

    export default {
        name: "HitUNet",
        data() {
            return {
                globalState: globalState,
            }
        },
        mounted() {
            this.globalState.eyeCatchImage = this.globalState.assets.img.hitUNetImage;
        }
    }
</script>

<style type="text/scss">
    .paragraph {
        margin-bottom: 30px;
    }
</style>
