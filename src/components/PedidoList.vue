<template>
  <v-container>
    <v-form>
      <v-col cols="12">
        <v-select
            label="Pedido" v-model="estadoPedido"
            :items="['AGUARDANDO_PAGAMENTO', 'PAGAMENTO_CONFIRMADO', 'SAIU_PARA_ENTREGA', 'ENTREGUE', 'CANCELADO']"
            variant="solo"
        >
        </v-select>

        <v-text-field
            v-model="nome"
            :rules="[v => !!v || 'Nome é necessário']"
            label="Procurar por nome do cliente"
            placeholder="ex. João"
            hint="Informe e pressione ENTER"
            required
            clearable
            @keydown.enter="searchPedido"
            append-inner-icon="mdi-magnify"
            @click:append-inner="searchPedido"
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
          Nome do Cliente
        </th>
        <th class="text-left">
          Estado do Pedido
        </th>
        <th class="text-left">
          Ação
        </th>
      </tr>
      </thead>
      <tbody>
      <tr class="text-left"
          v-for="pedido in this.pedidos"
          :key="pedido.id"
      >
        <td>{{pedido.id}}</td>
        <td>{{pedido.cliente.nome}}</td>
        <td>{{pedido.estadoPedido}}</td>
        <td>
          <router-link :to="'/pedidos/' + pedido.id" class="btn btn-primary">
            <v-icon icon="mdi-square-edit-outline"/>
          </router-link>
          <v-icon icon="mdi-trash-can-outline" class="btn btn-primary" @click = "deletePedido(pedido)"/>
        </td>
      </tr>
      </tbody>
    </v-table>
  </v-container>

</template>

<script>
import PedidoDataService from "../services/PedidoDataService";

export default {
  name: 'pessoa-list',
  data() {
    return {
      pedidos: [],
      estadoPedido: '',
      nome : ""
    };
  },
  methods: {
    retrievePedidos() {
      PedidoDataService.getAll()
          .then(response => {
            this.pedidos = response.data._embedded.pedidoModelList;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },
    searchPedido(){
      PedidoDataService.findByFilter(this.estadoPedido, this.nome)
          .then(response => {
            console.log(response.data);
            if (response.data._embedded == undefined)
              this.pedidos = null;
            else {
              this.pedidos = response.data._embedded.pedidoModelList;
            }
          })
          .catch(e => {
            console.log(e);
          });
    },
    deletePedido(pedido){
      var resposta = confirm("Deseja excluir Pedido #" + pedido.id);
      if(!resposta) return;
      PedidoDataService.delete(pedido.id).then(this.retrievePedidos);
    }
  },
  mounted() {
    this.retrievePedidos();
    this.estadoPedido = 'AGUARDANDO_PAGAMENTO'
  }
};
</script>

<style scoped>

</style>