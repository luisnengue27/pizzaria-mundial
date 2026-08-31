import MenuFuncionario from "../MenuFuncionario/MenuFuncionario"
import CredentialUser from "../../components/CredentialUser"

const HomeFuncionario = () => {
    return (
      
        <div className='container'>
            <MenuFuncionario/>
            <CredentialUser title="home page funcionario"/>
            <p>
                home page funcionario
            </p>
        </div>

    )
       
}
export default HomeFuncionario