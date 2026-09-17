import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"
import CredentialUser from "../../components/CredentialUser";
import api from "../../services/api";
import MenuFuncionario from "../MenuFuncionario/MenuFuncionario";
import Modal from "../../components/Modal";

const ListarProdutos = () => {

    const [produtos, setProdutos] = useState([]);

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [idProdutoExcluir, setIdProdutoExcluir] = useState(null)

    const navigate = useNavigate();

    useEffect(() => {
        api
            .get("/produtos")
            .then((response) => {
                console.log(response.data.data);
                setProdutos(response.data.data);
            })
            .catch((error) => {
                console.error(
                    "Erro ao buscar a lista de produtos:",
                    error
                );
            });
    }, []);

    const openModal = (id) =>{
        setIdProdutoExcluir(id)
        setIsModalOpen(true)
    }
    const deleteProduto = async () => {
         try {
            const response = await api.delete(`/produtos/${idProdutoExcluir}`)
            alert(response.data.message)

            setProdutos((produtosAtuais) =>
                produtosAtuais.filter(
                    (produto) => produto.id !== idProdutoExcluir
                )
            )
        } catch (error) {
            alert(`nao foi possivel a exclusão do produto com id ${idProdutoExcluir}`)
        }
        setIsModalOpen(false)
        }
       
  
    

    return (
        <div className="container">
            <MenuFuncionario />
            <CredentialUser title="lista de produtos"/>

            <div className="table-responsive">
                <table className="table table-bordered table-striped table-hover">
                    <thead className="table-success">
                        <tr>
                            <th>Nome</th>
                            <th>Preço</th>
                            <th>Descrição</th>
                            <th>Ações</th>
                        </tr>
                    </thead>

                 <tbody>
    {Array.isArray(produtos) && produtos.map((produto) => (
        <tr key={produto.id}>
            <td style={{ fontSize: "13px" }}>
                {produto.nome}
            </td>

            <td style={{ fontSize: "13px" }}>
                {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                }).format(produto.precoVenda)}
            </td>


            <td style={{ fontSize: "13px" }}>
                {produto.descricao}
            </td>

            <td
                className="text-center fs-6"
                style={{ width: "100px" }}
            >
                <button
                    className="btn btn-sm btn-primary me-2" onClick={() =>
                        navigate(`/produtos/editar/${produto.id}`)
                    }>
                        
                    <i className="fas fa-pencil-alt"></i>
                </button>
    


                <button
                    className="btn btn-sm btn-danger"
                    onClick={() => openModal(produto.id)}
                >
                    <i className="fas fa-trash-alt"></i>
                </button>



            </td>
        </tr>
    ))}
</tbody>

                </table>
            </div>

            <div className="text-end mt-3">
                <Link
                    to="/produtos/novo"
                    className="btn btn-success"
                >
                    <i className="fas fa-plus"></i>
                    {" "}Novo Produto
                </Link>
            </div>

<Modal
 isOpen={isModalOpen}
 onClose={()=> setIsModalOpen(false)}
 onConfirm={deleteProduto}
 />


        </div>
    );
};

export default ListarProdutos;
