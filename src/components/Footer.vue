<template>

  <v-container>
    <v-row>
      <v-col col="12">
        <v-footer  >
          <v-col class="text-center" cols="12">
            {{ new Date().getFullYear() }} —
            Lucas Garcia Rodrigues - UFMS/CPCX/SI
          </v-col>
        </v-footer>
      </v-col>
    </v-row>
  </v-container>


</template>

<script>

export default {
  name: 'Footer'
}
</script>

<style scoped>
.v-footer {
  background-color:#008080 ;
  color: whitesmoke;
  align-items: center;
  justify-content: center;
  display: flex;
  bottom: 0;
  width: 100%;
}
</style>