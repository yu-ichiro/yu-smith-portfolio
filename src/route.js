import Vue from "vue";
import Router from "vue-router";
import Top from "@/pages/Top";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Portfolio from "@/pages/Portfolio";
import HitUNet from "@/pages/portfolio/HitUNet";
import EMPlus from "@/pages/portfolio/EMPlus";
import EMApp from "@/pages/portfolio/EMApp";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Top',
            component: Top
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/portfolio',
            name: 'Portfolio',
            component: Portfolio
        },
        {
            path: '/portfolio/hitunet',
            name: 'Portfolio > hit-u.net',
            component: HitUNet
        },
        {
            path: '/portfolio/uniaim/emplus',
            name: 'Portfolio > 株式会社uniaim > EventManager+',
            component: EMPlus
        },
        {
            path: '/portfolio/uniaim/emapp',
            name: 'Portfolio > 株式会社uniaim > アプリ開発案件',
            component: EMApp
        },
        {
            path: '/blog',
            name: 'Blog',
        },
        {
            path: '/updates',
            name: 'Updates',
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact,
        },
        { path: '*', name: '404' }
    ]
})
