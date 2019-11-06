<template>
    <b-col id="contact">
        <b-card>
            <b-card-title>
                連絡先
            </b-card-title>
            <br>
            <b-card-sub-title>
                SNSなど
            </b-card-sub-title>
            <b-card-text>
                <dl>
                    <dt>Twitter</dt>
                    <dd>
                        HIT-COLLECTION: <a href="https://twitter.com/hitcolle_19_ys" target="_blank">@hitcolle_19_ys</a>
                    </dd>
                    <dd>
                        すゆみす: <a href="https://twitter.com/yu___smith" target="_blank">@yu___smith</a>
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
            <br>
            <b-card-sub-title @click="showInquiry = !showInquiry" class="inquiry-toggle">
                <toggle-indicator :toggle="showInquiry" /> 連絡フォーム
            </b-card-sub-title>
            <br>
            <transition name="slide-down-up">
                <b-card v-if="showInquiry" class="inquiry">
                    <b-card-text>
                        ご相談、お仕事のご依頼、その他個別のご連絡などはこちらのフォームからお願いします。<br><br>
                        <b-form @submit="sendInquiry">
                            <b-form-group label="メールアドレス:" label-for="email">
                                <b-form-input id="email" v-model="inquiryForm.email" placeholder="メールアドレス(返信用)"/>
                            </b-form-group>
                            <b-form-group label="お名前(*):" label-for="name">
                                <b-form-input id="name" v-model="inquiryForm.name" placeholder="お名前(必須)" required/>
                            </b-form-group>
                            <b-form-group label="件名(*):" label-for="title">
                                <b-form-input id="title" v-model="inquiryForm.title" placeholder="件名(必須)" required/>
                            </b-form-group>
                            <b-form-group label="本文(*):" label-for="message">
                                <b-form-textarea rows="5" id="message" v-model="inquiryForm.message" placeholder="本文(必須)"
                                                 required no-resize/>
                            </b-form-group>
                            <b-button type="submit" variant="primary">送信</b-button>
                        </b-form>
                    </b-card-text>
                </b-card>
            </transition>
        </b-card>
        <b-modal id="alert" hide-header>
            {{ alertMessage }}
        </b-modal>
    </b-col>
</template>

<script>
    import globalState, {DebugConsole} from "@/globals";
    import Axios from "axios"
    import {inquiryOption} from "@/cred";

    export default {
        name: "Contact",
        data() {
            return {
                globalState: globalState,
                inquiryForm: {
                    name: '',
                    email: '',
                    title: '',
                    message: '',
                },
                showInquiry: false,
                alertMessage: '',
            }
        },
        mounted() {
            this.globalState.setEyeCatchImage(this.globalState.assets.img.greenImage);
            this.globalState.imageTitleLightColor = true;
        },
        methods: {
            sendInquiry(event) {
                event.preventDefault();
                if (!this.inquiryForm.name) return false;
                if (!this.inquiryForm.title) return false;
                if (!this.inquiryForm.message) return false;
                Axios({
                    ...inquiryOption,
                    data: {
                        from: this.inquiryForm.name + (this.inquiryForm.email? ` <${this.inquiryForm.email}>`: ''),
                        subject: this.inquiryForm.title,
                        text: this.inquiryForm.message
                    }
                }).catch((error, ...args) => {
                    DebugConsole(error, ...args);
                    throw error;
                }).then(res => {
                    this.inquirySent(res.data.status === 'ok');
                }).catch(this.inquirySent.bind(this, false));
            },
            inquirySent(result) {
                if (result) this.alert('メッセージを送信しました。');
                else this.alert('メッセージの送信に失敗しました。');
            },
            alert(message) {
                this.alertMessage = message;
                this.$bvModal.show('alert');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .card {
        margin-bottom: 1rem;
    }

    .inquiry {
        overflow: hidden;
    }

    .inquiry-toggle {
        cursor: pointer;
    }
</style>
