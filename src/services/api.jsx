import axios from "axios"

const api = axios.create({
    baseURL: "http://172.19.0.49/pizzariateste/api/v1",
    timeout: 100000 // tempo maximo de resposta (10 segundos)
})
export default api

// utilize em baseURL

// "http://172.19.0.49/pizzariateste/api/v1" -> api do professor "so funciona na escola"

// http: //localhost:8080/endereco_da_sua_aoi -> api do aluno rodando localmente na porta 8080