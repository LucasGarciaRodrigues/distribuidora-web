import http from "@/services/external-api/http-common";

class PedidoDataService{
    getAll() {
        return http.get("/pedido");
    }

    get(id) {
        return http.get(`/pedido/${id}`);
    }

    findByFilter(estadoPedido, nomeDoCliente){
        return http.get(`/pedido/search/${estadoPedido}/?nome=${nomeDoCliente}`);
    }

    create(data) {
        return http.post("/pedido", data);
    }

    update(id, data) {
        return http.put('/pedido/'+id, data);
    }

    delete(id) {
        return http.delete(`/pedido/${id}`);
    }
}

export default new PedidoDataService();