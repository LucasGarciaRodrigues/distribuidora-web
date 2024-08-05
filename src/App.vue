<template>
  <v-app>
    <Nav />

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer>
      <Footer />
    </v-footer>

  </v-app>
</template>

<script>
import Nav from '@/components/Nav'
import Footer from "@/components/Footer";

export default {
  name: 'App' ,
  components: {
    Nav,
    Footer
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  color: #2c3e50;
  text-decoration: none;
  font-weight: bold;
  transition: .5s;
}

a.router-link-exact-active {
  color: #b8daff;
}


</style>
