<template>
  <div class="wrapper">
    <notifications></notifications>
    <side-bar>
      <template slot="links">
        

        <sidebar-item v-if="access===false"
              :link="{
                name: 'Login Admin',
                path: '/profile',
                icon: 'ni ni-single-02 text-green'
                }">
        </sidebar-item>
        
        <sidebar-item v-if="access===true"
                :link="{
                  name: 'Tables',
                  path: '/tables',
                  icon: 'ni ni-bullet-list-67 text-red'
                }">
        </sidebar-item>

        <sidebar-item
                  :link="{
                    name: 'User Login',
                    path: '/login',
                    icon: 'ni ni-briefcase-24 text-info'
                  }">
        </sidebar-item>
        <sidebar-item v-if="access===true"
                  :link="{
                    name: 'Register Admin',
                    path: '/register',
                    icon: 'ni ni-circle-08 text-blue'
                  }">
        </sidebar-item>
        <b-nav-item @click="cerrarSesion" v-if="access===true">
              <i class="ni ni-user-run text-red"></i>
              <span class="nav-link-inner--text" >Log Out</span>
        </b-nav-item>
        
      </template>
    </side-bar>
    <div class="main-content">
      <dashboard-navbar :type="$route.meta.navbarType"></dashboard-navbar>

      <div @click="$sidebar.displaySidebar(false)">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
      </div>
  
    </div>
  </div>
</template>
<script>
  /* eslint-disable no-new */
  import PerfectScrollbar from 'perfect-scrollbar';
  import 'perfect-scrollbar/css/perfect-scrollbar.css';

  function hasElement(className) {
    return document.getElementsByClassName(className).length > 0;
  }

  function initScrollbar(className) {
    if (hasElement(className)) {
      new PerfectScrollbar(`.${className}`);
    } else {
      // try to init it later in case this component is loaded async
      setTimeout(() => {
        initScrollbar(className);
      }, 100);
    }
  }

  import DashboardNavbar from './DashboardNavbar.vue';
  import DashboardContent from './Content.vue';
  import { FadeTransition } from 'vue2-transitions';

  let access;
  const recuperarDatosAdmin = () => {
            const recuperarDatos = JSON.parse(localStorage.getItem('DatosUsuario'));
            if (recuperarDatos && recuperarDatos.token) {
			        return [recuperarDatos.token, recuperarDatos.userId];
	          }else {
		          return [];
	          }
};

if (recuperarDatosAdmin().length === 0) {
			access=false;
		} else {
			access=true;
		}

  export default {
    components: {
      DashboardNavbar,
      DashboardContent,
      FadeTransition
    },
    data() {
      return {
        access
      };
    },
    methods: {
      cerrarSesion() {
        localStorage.removeItem('DatosUsuario');
        window.location.replace('/')
      },
      initScrollbar() {
        let isWindows = navigator.platform.startsWith('Win');
        if (isWindows) {
          initScrollbar('sidenav');
        }
      }
    },
    mounted() {
      this.initScrollbar()
    }
  };
</script>
<style lang="scss">
</style>
