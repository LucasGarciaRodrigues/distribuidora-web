<template>
  <v-container>
    <v-form>
      <v-col cols="12">
        <v-select
            label="Pessoa" v-model="tipoPessoa"
            :items="['FISICA', 'JURIDICA']"
            variant="solo"
        >
        </v-select>

        <v-text-field
            v-model="nome"
            :rules="[v => !!v || 'Nome é necessário']"
            label="Procurar por nome"
            placeholder="ex. João"
            hint="Informe e pressione ENTER"
            required
            clearable
            @keydown.enter="searchPessoa"
            append-inner-icon="mdi-magnify"
            @click:append-inner="searchPessoa"
        ></v-text-field>
      </v-col>
    </v-form>

    <v-btn
        color="primary"
        class="mr-4"
        @click=""
    >
      Adicionar Pessoa
    </v-btn>

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
          Nome
        </th>
        <th class="text-left">
          Tipo de Pessoa
        </th>
        <th class="text-left">
          Ação
        </th>
      </tr>
      </thead>
      <tbody>
      <tr class="text-left"
          v-for="pessoa in this.pessoas"
          :key="pessoa.id"
      >
        <td>{{ pessoa.id}}</td>
        <td>{{ pessoa.nome}}</td>
        <td>{{ pessoa.tipoPessoa}}</td>
        <td>
          <router-link :to="'/pessoas/' + pessoa.id" class="btn btn-primary">
            <v-icon icon="mdi-square-edit-outline"/>
          </router-link>
          <v-icon icon="mdi-trash-can-outline" class="btn btn-primary" @click = "deletePessoa(pessoa)"/>
        </td>
      </tr>
      </tbody>
    </v-table>
  </v-container>

</template>

<script>
import PessoaDataService from "../services/PessoaDataService";

export default {
  name: 'pessoa-list',
  data() {
    return {
      pessoas: [],
      nome:"",
      tipoPessoa:''
    };
  },
  methods: {
    retrievePessoas() {
      PessoaDataService.getAll()
          .then(response => {
            this.pessoas = response.data._embedded.pessoaModelList;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },
    searchPessoa(){
      PessoaDataService.findByTipoPessoaAndFilter(this.tipoPessoa, this.nome)
          .then(response => {
            console.log(response.data);
            if (response.data._embedded == undefined)
              this.pessoas = null;
            else {
              this.pessoas = response.data._embedded.pessoaModelList;
            }
          })
          .catch(e => {
            console.log(e);
          });
    },
    deletePessoa(pessoa){
      var resposta = confirm("Deseja excluir " + pessoa.nome);
      if(!resposta) return;
      PessoaDataService.delete(pessoa.id).then(this.retrievePessoas);
    }
  },
  mounted() {
    this.retrievePessoas();
    this.tipoPessoa = 'FISICA'
  }
};
</script>

<style scoped>

</style>