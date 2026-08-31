import { useState } from "react";
import MenuFuncionario from "../MenuFuncionario/MenuFuncionario";
import api from "../../services/api"; // ajuste o caminho se necessário

const NovoProduto = () => {
    const [nome, setNome] = useState("");
    const [precoVenda, setPrecoVenda] = useState("");
    const [descricao, setDescricao] = useState("");
    const [categoriasId, setCategoriasId] = useState("");

    const cadastrarProduto = async (e) => {
        e.preventDefault();

        const produto = {
            nome,
            precoVenda: parseFloat(precoVenda),
            tipo: "grande",
            descricao,
            categoriasId: Number(categoriasId)
        };

        try {
            const response = await api.post(
                "/produtos",
                produto,
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );

            alert(`${response.data.data.nome} cadastrado com sucesso!`);

            setNome("");
            setPrecoVenda("");
            setDescricao("");
            setCategoriasId("");
        } catch (error) {
            console.error("Não foi possível salvar o produto:", error);
            alert("Não foi possível cadastrar o produto.");
        }
    };

    return (
        <div className="container">
            <MenuFuncionario />

            <h1>Novo Produto</h1>

            <form onSubmit={cadastrarProduto}>
                <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Nome"
                />

                <input
                    type="number"
                    value={precoVenda}
                    onChange={(e) => setPrecoVenda(e.target.value)}
                    placeholder="Preço de venda"
                    step="0.01"
                />

                <input
                    type="text"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    placeholder="Descrição"
                />

                <input
                    type="number"
                    value={categoriasId}
                    onChange={(e) => setCategoriasId(e.target.value)}
                    placeholder="ID da categoria"
                />

                <button type="submit">
                    Cadastrar
                </button>
            </form>
        </div>
    );
};

export default NovoProduto;
