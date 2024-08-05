<template>

  <v-container>
    <div v-if="produtoAtual" class="edit-form">
      <h4>
        <v-icon icon="mdi-package"/>
        Produto
      </h4>

      <p>{{ mensagem }}</p>
      <v-form>

        <v-col cols="12">
          <v-text-field
              v-model="produtoAtual.nome"
              :rules="[v => !!v || 'Nome é necessário']"
              label="Nome"
              required
              clearable
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-text-field
              v-model="produtoAtual.preco"
              :rules="[v => !!v || 'Preço é necessário']"
              label="Preço"
              type="double"
              required
              clearable
          ></v-text-field>
        </v-col>

        <v-btn
            class="ma-2"
            color="orange-darken-2"
            @click="$router.go(-1)"
        >
          <v-icon
              start
              icon="mdi-arrow-left"
          ></v-icon>
          Voltar
        </v-btn>

        <v-btn
            color="success"
            class="mr-4"
            @click="submitForm"
        >
          Atualizar
        </v-btn>

      </v-form>

    </div>

  </v-container>
</template>

<script>
import ProdutoDataService from "../services/ProdutoDataService";

export default {
  data() {
    return {
      produtoAtual: null,
      mensagem: '',
    };
  },
  methods: {
    submitForm() {
      this.update();
    },
    getPedido(id) {
      ProdutoDataService.get(id)
          .then(response => {
            this.produtoAtual = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },
    update() {
      ProdutoDataService.update(this.produtoAtual.id, this.produtoAtual)
          .then(response => {
            this.mensagem = 'O produto foi atualizada com sucesso!';
            console.log(response.data);
          })
          .catch(e => {
            console.log(e.response.data);
            this.mensagem = e.response.data.mensagem;
          });
    }
  },
  mounted() {
    this.mensagem = '';
    this.getPedido(this.$route.params.id);
  },
};

</script>

<style scoped>

</style>