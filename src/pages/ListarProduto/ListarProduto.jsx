import MenuFuncionario from "../MenuFuncionario/MenuFuncionario"


const ListarProdutos = () => {

    const arrayProdutos = [
        {
            id: 1,
            nome: "pizza de calabresa",
            prevoVenda: 54.95,
            descricao: "pizza de calabresa com cebola e azeitona sem caroço"
        },

        {
            id: 2,
            nome: "pizza de queijo",
            prevoVenda: 44.95,
            descricao: "pizza de queijo com cebola e azeitona com caroço"
        },

         {
            id: 3,
            nome: "pizza de muçarela",
            prevoVenda: 53.85,
            descricao: "pizza de muçarela sem cebola e azeitona com caroço"
        }

    ]

    return (
        
        <div className='container'>
              <MenuFuncionario/>

               <p>
                lista de produtos
            </p>
        </div>
    )
}

export default ListarProdutos