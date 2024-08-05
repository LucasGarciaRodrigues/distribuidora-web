import http from "@/services/external-api/http-common";

class ProdutoDataService{
    getAll() {
        return http.get("/produto");
    }

    get(id) {
        return http.get(`/produto/${id}`);
    }

    findByFilter(nome){
        return http.get(`/produto/search/${nome}`);
    }

    create(data) {
        return http.post("/produto", data);
    }

    update(id, data) {
        return http.put('/produto/'+id, data);
    }

    delete(id) {
        return http.delete(`/produto/${id}`);
    }
}

export default new ProdutoDataService();