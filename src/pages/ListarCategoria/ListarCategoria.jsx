import MenuFuncionario from "../MenuFuncionario/MenuFuncionario"
import CredentialUser from "../../components/CredentialUser"

const ListarCategoria = () => {

    return (
        <div className="container">
            <MenuFuncionario/>
            <CredentialUser title="lista de categorias"/>
            <p> lista de categorias dos produtos</p>
        </div>
    )
}

export default ListarCategoria