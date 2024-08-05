<template>

  <v-app-bar app color="teal" light>

    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>Distribuidora de Produtos</v-toolbar-title>

    <v-spacer></v-spacer>

    <router-link to="/">
      <v-btn icon="mdi-home"/>
    </router-link>
    <router-link to="/sobre">
      <v-btn icon="mdi-dots-vertical"/>
    </router-link>

  </v-app-bar>

  <v-navigation-drawer
      v-model="drawer"
      temporary
  >
    <v-list density="compact" nav>
      <router-link to="/">
        <v-list-item prepend-icon="mdi-home" title="Página Incial" value="inicio"></v-list-item>
      </router-link>
      <router-link to="/pessoas">
        <v-list-item prepend-icon="mdi-account" title="Pessoas" value="pessoas"></v-list-item>
      </router-link>
      <router-link to="/produtos">
        <v-list-item prepend-icon="mdi-package" title="Produtos" value="produtos"></v-list-item>
      </router-link>
      <router-link to="/pedidos">
        <v-list-item prepend-icon="mdi-cart" title="Pedidos" value="pedidos"></v-list-item>
      </router-link>
      <router-link to="/sobre">
        <v-list-item prepend-icon="mdi-information" title="Sobre" value="sobre"></v-list-item>
      </router-link>
    </v-list>
  </v-navigation-drawer>


</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      drawer: false
    }
  }
}


</script>

<style scoped>

</style>