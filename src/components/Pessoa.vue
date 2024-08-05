<template>

  <v-container>
    <div v-if="pessoaAtual" class="edit-form">
      <h4>
        <v-icon icon="mdi-account"/>
        Pessoa
      </h4>

      <p>{{ mensagem }}</p>
      <v-form>
        <v-col
            cols="12"
        >
          <v-text-field
              v-model="pessoaAtual.nome"
              :rules="[v => !!v || 'Nome é necessário']"
              label="Nome"
              required
              clearable
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-select
              label="Tipo de Pessoa" v-model="pessoaAtual.tipoPessoa"
              :items="['FISICA', 'JURIDICA']"
              variant="solo"
          >
          </v-select>
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
  import PessoaDataService from "../services/PessoaDataService";

  export default {
    data() {
      return {
        pessoaAtual: null,
        mensagem: '',
      };
    },
    methods: {
      submitForm() {
        this.update();
      },
      getPessoa(id) {
        PessoaDataService.get(id)
            .then(response => {
              this.pessoaAtual = response.data;
              console.log(response.data);
            })
            .catch(e => {
              console.log(e);
            });
      },
      update() {
        PessoaDataService.update(this.pessoaAtual.id, this.pessoaAtual)
            .then(response => {
              this.mensagem = 'A pessoa foi atualizada com sucesso!';
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
      this.getPessoa(this.$route.params.id);
    },
  };

</script>

<style scoped>

</style>