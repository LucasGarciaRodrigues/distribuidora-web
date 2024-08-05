<template>
  <v-container>
    <v-form>
      <v-col cols="12">
        <v-text-field
            v-model="nome"
            :rules="[v => !!v || 'Nome é necessário']"
            label="Procurar por nome"
            placeholder="ex. Mouse"
            hint="Informe e pressione ENTER"
            required
            clearable
            @keydown.enter="searchProduto"
            append-inner-icon="mdi-magnify"
            @click:append-inner="searchProduto"
        ></v-text-field>
      </v-col>
    </v-form>
  <v-table
      density="compact"
      fixed-header
      height="400px"
  >
    <thead>
    <tr>
      <th class="text-left">
        ID
      </th>
      <th class="text-left">
        Descrição do Produto
      </th>
      <th class="text-left">
        Ação
      </th>
    </tr>
    </thead>
    <tbody>
    <tr class="text-left"
        v-for="produto in this.produtos"
        :key="produto.id"
    >
      <td>{{ produto.id }}</td>
      <td>{{ produto.nome }}</td>
      <td>
        <router-link :to="'/produtos/' + produto.id" class="btn btn-primary">
          <v-icon icon="mdi-square-edit-outline"/>
        </router-link>
        <v-icon icon="mdi-trash-can-outline" class="btn btn-primary" @click = "deleteProduto(produto)"/>
      </td>
    </tr>
    </tbody>
  </v-table>
  </v-container>
</template>

<script>
import ProdutoDataService from "../services/ProdutoDataService";

export default {
  name: 'produto-list',
  data(){
    return{
      produtos: [],
      nome: ""
    }
  },
  methods: {
    retrieveProdutos() {
      ProdutoDataService.getAll()
          .then(response => {
            this.produtos = response.data._embedded.produtoModelList;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },
    searchProduto(){
      ProdutoDataService.findByFilter(this.nome)
          .then(response => {
            console.log(response.data);
            if (response.data._embedded == undefined)
              this.produtos = null;
            else {
              this.produtos = response.data._embedded.produtoModelList;
            }
          })
          .catch(e => {
            console.log(e);
          });
    },
    deleteProduto(produto){
      var resposta = confirm("Deseja excluir " + produto.nome);
      if(!resposta) return;
      ProdutoDataService.delete(produto.id).then(this.retrieveProdutos);
    }
  },
  mounted() {
    this.retrieveProdutos();
  }
};
</script>

<style scoped>

</style>