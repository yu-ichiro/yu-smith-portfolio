<!--suppress ALL -->
<template>
  <b-container id="app" :class="{
    'p-0': true,
    'auto': globalState.lighting === 'auto',
    'light': globalState.lighting === 'light',
    'dark': globalState.lighting === 'dark',
  }" fluid>
    <b-row class="m-0 p-0" no-gutters>
      <b-col id="page" cols="12" offset-lg="4" lg="8">
        <b-col :class="{header: true, light: this.globalState.imageTitleLightColor}">
          <h1 id="title" class="mb-0">
            {{ $route.name !== 'Top' ? $route.name : 'Yuichiro Smith' }}
          </h1>
        </b-col>
        <b-col class="main-content">
          <transition name="menu-transition" mode="out-in">
            <div id="menu-wrapper" v-show="$route.name !== 'Top'">
              <b-list-group class="menu" horizontal="lg">
                <b-list-group-item id="menu-toggle" @click="toggleMenu = !toggleMenu">
                  <font-awesome-icon :icon="toggleMenu ? 'times' : 'bars' "/>
                  Menu
                </b-list-group-item>
                <b-list-group-item :to="page.route" :active="$route.name.indexOf(page.name) === 0" @click="toggleMenu = page.name !== 'Top'" v-for="page in menuItems" :key="page.route" :hidden="page.disabled">
                  <font-awesome-icon :icon="page.icon" v-if="page.icon"/>
                  {{ page.name }}
                </b-list-group-item>
              </b-list-group>
            </div>
          </transition>
          <transition name="router-transition" mode="out-in">
            <router-view />
          </transition>
          <bootstrap-breakpoint @breakpointChanged="breakpointChanged" />
          <lighting-control v-model="globalState.lighting" :visible="true"/>
        </b-col>
      </b-col>
    </b-row>
    <transition name="fade">
      <b-img id="background" :key="globalState.eyeCatchImage" :src="globalState.eyeCatchImage"/>
    </transition>
  </b-container>
</template>

<script>
  import globalState   from "@/globals"
  import BootstrapBreakpoint from "@/components/BootstrapBreakpoint"
  import LightingControl from "@/components/LightingControl"

  export default {
    name: 'app',
    components: {BootstrapBreakpoint, LightingControl},
    data () {
      return {
        globalState: globalState,
        toggleMenu: false,
        topPages: [
                {name: 'Top', route: '/'},
                {name: 'About', route: '/about', icon: 'address-card'},
                {name: 'Portfolio', route: '/portfolio', icon: 'file-image'},
                {name: 'Blog', route: '/blog', icon: 'pen', disabled: true},
                {name: 'Updates', route: '/updates', icon: 'history', disabled: true},
                {name: 'Contact', route: '/contact', icon: 'headset'},
        ],
        defer: [],
      }
    },
    methods: {
      breakpointChanged(breakpoint) {
        this.globalState.currentBreakpoint = breakpoint
      },
      getBreakPointLevel(breakpoint) {
        return {
          'xs': 0,
          'sm': 1,
          'md': 2,
          'lg': 3,
          'xl': 4,
        }[breakpoint]
      },
      changeEnvironmentLighting(isDark) {
        this.globalState.envLighting = isDark ? 'dark' : 'light'
      }
    },
    mounted() {
      const media = window.matchMedia('(prefers-color-scheme: dark)')
      const listner = (media) => this.changeEnvironmentLighting(media.matches)
      media.addListener(listner)
      this.defer.push(() => media.removeListener(listner))
    },
    beforeDestroy() {
      this.defer.forEach(func => func())
    },
    computed: {
      currentBreakpointLevel() {
        return this.getBreakPointLevel(this.globalState.currentBreakpoint)
      },
      menuItems() {
        if (this.currentBreakpointLevel < this.getBreakPointLevel('lg') && !this.toggleMenu)
          return []
        return this.topPages
      },
      renderLighting() {
        if (this.globalState.lighting === 'auto')
          return this.globalState.envLighting
        return this.globalState.lighting
      }
    }
  }
</script>

<style lang="scss">
  @mixin main($breakpoint) {
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      @include light-root {
        color: base2();
      }
      @include dark-root {
        color: base5();
      }
    }

    #page {
      @if $breakpoint >= $lg {
        box-shadow: -15px 0 15px base1(0.4);
      }
    }

    .main-content {
      padding-top: 1rem;
      padding-bottom: 2rem;
      min-height: 100vh;
      @if $breakpoint < $lg {
        box-shadow: 0 0 15px 5px base1(0.4);
      }
      @else {
        box-shadow: none;
      }

      @include light {
        background-color: base5();
      }
      @include dark {
        background-color: base1();
      }
    }

    #background {
      transition: opacity 1.5s;
      display: inline;
      float: left;
      position: fixed;
      top: 0;
      left: 0;
      z-index: -2;
      object-fit: cover;

      @if $breakpoint >= $lg {
        width: 33.33333%;
        height: 100%;
        object-position: 25% 0;
      }
      @else {
        width: 100%;
        height: 30vh;
        object-position: 50% 30%;
      }
    }

    .header {
      #title {
        vertical-align: middle;
      }

      @if $breakpoint >= $lg {
        @include light {
          background-color: base5();
          color: base2();
        }
        @include dark {
          background-color: base1();
          color: base5();
        }
        text-align: left;

        &.light {
          color: base5();
        }


        #title {
          padding-left: 50px;
          font-size: 25px;
          height: 10vh;
          line-height: 10vh;
        }
      }
      @else {
        background-color: transparent;
        color: base2();
        text-align: center;

        &.light {
          color: base5();
        }

        #title {
          padding-left: 0;
          font-size: 35px;
          height: 30vh;
          line-height: 30vh;
        }
      }
    }

    #menu-wrapper {
      overflow: hidden;

      .menu {
        text-align: center;
        margin-bottom: 1rem;

        @include light {
          background-color: $color5;
        }
        @include dark {
          background-color: $color1;
        }

        @if $breakpoint < $lg {
          #menu-toggle {
            display: block;
          }
        }
        @else {
          #menu-toggle {
            display: none;
          }
        }
      }
    }

    .card {
      @include dark {
          background-color: $color2;
      }
    }

    .list-group-item:not(.active) {
      @include dark {
        background-color: $color2;
      }
    }

    .progress {
      @include dark {
        background-color: darken($color3, 15%);
      }
    }

    a {
      @include dark {
        color: $color4;
      }
    }
  }

  @include main($xs);
  @include media-breakpoint-up(lg) {
    @include main($lg);
  }

</style>
