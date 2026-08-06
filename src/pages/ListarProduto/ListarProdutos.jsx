import MenuFuncionario from "../MenuFuncionario/MenuFuncionario"


const ListarProdutos = () => {

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

    ]

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

{ arrayProdutos.map((produto) => (
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