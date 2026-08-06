import {
    HashRouter,
    BrowserRouter,
    Routes,
    Route

}
from "react-router-dom"
import HomeFuncionario from "../pages/HomeFuncionario/HomeFuncionario"
import ListarProdutos from "../pages/ListarProduto/ListarProdutos"


const AppRoutes = () => {

    return (
      <HashRouter>
        <Routes>
            <Route
            path="/"
            element={<HomeFuncionario/>}
            />
               <Route
            path="/home"
            element={<ListarProdutos/>}
            />
               <Route
            path="/produtos"
            element={<ListarProdutos/>}
            />

             <Route
            path="/pizzaria/funcionario/home"
            element={<HomeFuncionario/>}
            />
               <Route
            path="/pizzaria/funcionario/produtos"
            element={<ListarProdutos/>}
            />

            <Route
            path="/categorias"
            element={<ListarProdutos/>}
            />

           
        </Routes>
      </HashRouter>
    )
}

export default AppRoutes