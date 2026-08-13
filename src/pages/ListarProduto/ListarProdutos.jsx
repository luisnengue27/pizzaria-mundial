import React, {useState, useefeect} from "react"

import api from "../../services/api"

import MenuFuncionario from "../MenuFuncionario/MenuFuncionario"

const ListarProdutos = () => {

 // useState: e um hook do react que serve para armazenar e controlar o estato de uma variavel
// composição -> const [ nome da variavel, nome da função para alterar o valor da varivel] = (valor inicial da variavel)
// obs: sempre o nome da função começa com "set"
// exemplo: quero declarar uma variavel numero cujo valor inicia com 0
// const[numero, setNumero] = (0)

// useEffect: é um hook que serve para executar codigos que ficam fora do controle direto da renderização visual, os chamados
//     "efeitos colaterais". exemplo: buscar dados em ma api, configurar cronometros, fazer algo quando o usuario aperta uma tecla
// composição -> useEffect (função que sera executada, [quando esse valor e alterado a função e chamada novamente])
// obs: [] manter vazio, quando voce quiser que o seu codigo rode exatamente uma unica vez, geralmente ao carregar a pagina


const [produtos, setProdutos] = useState ([])

useEffect(()=>{
    api
      .get("/produtos")
      .then((response)=>{
       // deu certo
       // console.log(response.data.data)
        setProdutos(response.data.data)
      })
      .catch((error)=>{
        //deu ruim :()

        console.error("erro ao buscar a lista de produtos, " + error)
      })
}, [])
/*
    const arrayProdutos = [
        {
            id: 1,
            nome: "pizza de calabresa",
            precoVenda: 54.95,
            descricao: "pizza de calabresa com cebola e azeitona sem caroço"
        },

        {
            id: 2,
            nome: "pizza de queijo",
            precoVenda: 44.95,
            descricao: "pizza de queijo com cebola e azeitona com caroço"
        },

         {
            id: 3,
            nome: "pizza de muçarela",
            precoVenda: 53.85,
            descricao: "pizza de muçarela sem cebola e azeitona com caroço"
        }

    ] */

    return (
        
<div className="container">
    <MenuFuncionario/>


      <div className="table-responsive">
 <table className="table table-bordered table-striped table-hover">
 <thead className="table-success">
 <tr>
 <th>Nome</th>
 <th>Preço</th>
 <th>Descrição</th>
 <th>Ações</th> {/* Nova coluna de Ações */}
 </tr>
 </thead>
 <tbody>

{ produtos.map((produto) => (
    <tr key={produto.id}>
<td style={{ fontSize: "13px"}}> {produto.nome}</td>
<td style={{ fontSize: "13px"}}>
    {
        new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(produto.precoVenda)
    }

 </td>
 <td style={{ fontSize: "13px" }}></td>
 <td className="text-center fs-6" style={{ width: "100px" }}>
 {/* Botão de Editar */}
 <button
 className="btn btn-sm btn-primary me-2">
 <i className="fas fa-pencil-alt"></i>{" "}
 {/* Ícone de editar */}
 </button>
 {/* Botão de Excluir */}
 <button
 className="btn btn-sm btn-danger">
 <i className="fas fa-trash-alt"></i>{" "}
 {/* Ícone de excluir */}
 </button>
 </td>
 </tr> ) ) }


 

 </tbody>
 </table>
 </div>
 </div>

    

    )
}

export default ListarProdutos