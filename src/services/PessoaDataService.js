import http from "@/services/external-api/http-common";

class PessoaDataService {
    getAll() {
        return http.get("/pessoa");
    }

    get(id) {
        return http.get(`/pessoa/${id}`);
    }

    findByTipoPessoaAndFilter(tipoPessoa, nome){
        return http.get(`/pessoa/search/${tipoPessoa}/?nome=${nome}`);
    }

    create(data) {
        return http.post("/pessoa", data);
    }

    update(id, data) {
        return http.put('/pessoa/'+id, data);
    }

    delete(id) {
        return http.delete(`/pessoa/${id}`);
    }
}

export default new PessoaDataService();