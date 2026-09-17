import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import CredentialsUser from "../../components/CredentialUser";
import MenuFuncionario from "../MenuFuncionario/MenuFuncionario";
import api from "../../services/api";

function EditarProduto() {
  const [produto, setProduto] = useState({
    nome: "",
    descricao: "",
    precoVenda: 0,
    categoriaId: 0,
    codStatus: true,
  });

  const [categoriaId, setCategoriaId] = useState("");
  const [categorias, setCategorias] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Buscar produto
    api
      .get(`/produtos/${id}`)
      .then((response) => {
        const dados = response.data.data;

        setProduto({
          ...dados,
          precoVenda: Number(dados.precoVenda),
          categoriaId:
            dados?.categoria?.id ??
            dados?.categoriaId ??
            0,
        });

        const categoria = dados?.categoria?.id ?? dados?.categoriaId;

        if (categoria) {
          setCategoriaId(String(categoria));
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar o produto:", error);
      });

    // Buscar categorias
    api
      .get("/categorias")
      .then((response) => {
        setCategorias(response.data.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de categorias:", error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    let parsedValue = value;

    if (name === "codStatus") {
      parsedValue = value === "true";
    }

    if (name === "precoVenda") {
      parsedValue = Number(value);
    }

    setProduto((prev) => ({
      ...prev,
      [name]: parsedValue,
    }));
  };

  const handleChangeCategoria = (e) => {
    const valor = e.target.value;

    setCategoriaId(valor);

    setProduto((prev) => ({
      ...prev,
      categoriaId: valor === "" ? 0 : Number(valor),
    }));
  };

  const atualizarProduto = async (e) => {
    e.preventDefault();

    try {
      const dadosAtualizacao = {
        nome: produto.nome,
        descricao: produto.descricao,
        precoVenda: Number(produto.precoVenda),
        categoriaId: Number(produto.categoriaId),
        codStatus: produto.codStatus,
      };

      const response = await api.put(
        `/produtos/${produto.id}`,
        dadosAtualizacao,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Produto atualizado:", response.data);

      alert(
        `${response.data.data.nome} atualizado com sucesso`
      );

      navigate("/produtos");
    } catch (error) {
      console.error(
        "Não foi possível salvar o produto:",
        error
      );
    }
  };

  return (
    <div className="container mt-4">
      <MenuFuncionario />

      <CredentialsUser title="Edição de Produto" />

      <form
        onSubmit={atualizarProduto}
        className="bg-light p-4 rounded shadow"
      >
        {/* Nome */}
        <div className="mb-3">
          <input
            type="text"
            name="nome"
            className="form-control"
            placeholder="Digite o nome do produto"
            value={produto.nome}
            onChange={handleChange}
            required
          />
        </div>

        {/* Preço */}
        <div className="mb-3">
          <input
            type="number"
            step="0.01"
            name="precoVenda"
            className="form-control"
            placeholder="Digite o preço"
            value={produto.precoVenda}
            onChange={handleChange}
            required
          />
        </div>

        {/* Descrição */}
        <div className="mb-3">
          <textarea
            name="descricao"
            className="form-control"
            rows="3"
            placeholder="Digite a descrição do produto"
            value={produto.descricao}
            onChange={handleChange}
            required
          />
        </div>

        {/* Categoria */}
        <div className="mb-3">
          <label className="block mb-1 font-semibold">
            Categoria
          </label>

          <select
            value={categoriaId}
            onChange={handleChangeCategoria}
            className="border p-2 w-full rounded"
            required
          >
            <option value="">
              Selecione uma categoria
            </option>

            {categorias
              .filter((cat) => cat.codStatus === true)
              .map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.nome}
                </option>
              ))}
          </select>
        </div>

        {/* Status */}
        <div className="mb-3">
          <h6>Ativar ou Desativar Produto</h6>

          <label>
            <input
              type="radio"
              name="codStatus"
              value="true"
              checked={produto.codStatus === true}
              onChange={handleChange}
            />
            {" "}Ativo
          </label>

          <br />

          <label>
            <input
              type="radio"
              name="codStatus"
              value="false"
              checked={produto.codStatus === false}
              onChange={handleChange}
            />
            {" "}Inativo
          </label>
        </div>

        <br />

        <button
          type="submit"
          className="btn btn-primary w-100"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default EditarProduto;
