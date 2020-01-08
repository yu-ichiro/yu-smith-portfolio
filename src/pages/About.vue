<template>
    <b-col id="about">
        <b-card>
            <b-card-title>
                基本情報
            </b-card-title>
            <b-card-text>
                <dl>
                    <dt>生年月日</dt><dd>1997年8月4日</dd>
                    <dt>出身地</dt><dd>埼玉県</dd>
                    <dt>大学</dt><dd>一橋大学</dd>
                    <dt>所属</dt>
                    <dd>
                        株式会社ユニエイム チケット開発チーム(インターン生)<br />
                        株式会社imp.ARTs CTO
                    </dd>
                </dl>
            </b-card-text>
        </b-card>
        <b-card>
            <b-card-title>
                スキル
            </b-card-title>
            <b-card-text v-for="skill in skills" :key="skill.name">
                {{ skill.name }}
                <b-progress :value="skill.value" :max="skills.map(s=>s.value).reduce((a, b) => Math.max(a, b))"/>
            </b-card-text>
        </b-card>
        <b-card>
            <b-card-title>
                経歴
            </b-card-title>
            <b-card-text>
                <b-card-sub-title>▼小学校時代</b-card-sub-title>
                <b-card-text>
                    幼少期から習っていたピアノを続けつつ、スイミングや野球など様々な習い事を始める。
                    小学三年生の時の電子工作の授業をきっかけに科学に興味を持つ。
                    この頃両親との話し合いを経て、アメリカの大学を視野に入れ、英語の通信教材を取り入れた自宅学習を始める。
                    その中で、課外学習の一貫で通っていた図書館でHTMLと出会い、没頭する。
                    その過程で知り合いにITパスポート試験受験を勧められ、受験、合格(2010年夏,12歳)。
                    この合格をきっかけにMac-miniを買い、よりプログラミングに傾倒していく。
                </b-card-text>
                <b-card-sub-title>▼中学時代</b-card-sub-title>
                <b-card-text>
                    自宅学習と並行してフリースクールに通い始める。
                    中学校には籍のみを残し、自分のペースでの学習を続ける。
                    部活などに通わない分浮く時間でiOSアプリの開発、WordPressを使ったPHPの学習などを行う。
                    また同時に距離を置いていた音楽を再開し、ギター、ベース、キーボードを弾くようになり、プログラミングと並行して打ち込んだ。
                </b-card-text>
                <b-card-sub-title>▼高校時代</b-card-sub-title>
                <b-card-text>
                    フリースクールで取得することが目標になっていた高等学校卒業程度認定試験(旧大検)を受け合格(2014年夏,15歳)。
                    大学進学よりも直接社会に出てITを使う仕事に興味が向き、知り合いから勧められたホームページリニューアルのアルバイトを始める。
                    アルバイトを通してITのスキルだけで食べていくことの難しさを感じ、ビジネスの知識への興味が湧き、大学進学を決意。
                </b-card-text>
                <b-card-sub-title>▼大学時代</b-card-sub-title>
                <b-card-text>
                    一橋大学商学部に入学し、ビジネスを学ぶ傍、好きだった音楽のサークル、Unpluggedに所属。
                    ２年次にサークルの部長とIT担当を兼任。長年時間を取っていたタイムテーブルの作成の簡略化やデータ保存システムの移行、
                    ホームページの刷新などに取り組む。またプログラミングスキルを活用したインターン活動を株式会社インフル(現ユニエイム)にて開始。
                    自社Webサービスの開発を通じて、AWS、Python、RDB、Redis、MVCモデル、セキュリティなどについて幅広く学ぶ。
                    ３年次にはプログラミングサークルを立ち上げた友人たちと学内のデータを集約するサービス「hit-u.net」をインターンを通じて得た知識を活用し作成、リリース。
                    ４年次には第一回HIT-COLLECTIONに参加し、IT技術の魅力を伝える活動に取り組む。
                </b-card-text>
                <b-card-sub-title>▼フリーランス</b-card-sub-title>
                <b-card-text>
                    大学在学時に個人事業主として開業し、フリーランスエンジニアとしての活動を開始。株式会社imp.ARTsのCTOに就任し、サービスの開発に取り組む。
                </b-card-text>
            </b-card-text>
        </b-card>
    </b-col>
</template>

<script>
    import globalState from "@/globals";

    export default {
        name: "About",
        data() {
            return {
                globalState: globalState,
                skills: [
                    {name: 'Python', value: 90},
                    {name: 'HTML/Javascript', value: 100},
                    {name: 'Node.js', value: 60},
                    {name: 'Vue.js', value: 70},
                    {name: 'Ionic', value: 50},
                    {name: 'TypeScript', value: 50},
                    {name: 'PHP', value: 40},
                    {name: 'Swift', value: 35},
                    {name: 'Objective-C', value: 35},
                ]
            }
        },
        mounted() {
            this.globalState.setEyeCatchImage(this.globalState.assets.img.darkImage);
            this.globalState.imageTitleLightColor = true;
        }
    }
</script>

<style lang="scss" scoped>
    .card {
        margin-bottom: 1rem;
    }
</style>
