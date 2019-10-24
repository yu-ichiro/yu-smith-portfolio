import Vue from "vue";
import Router from "vue-router";
import Top from "@/pages/Top";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Portfolio from "@/pages/Portfolio";

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
