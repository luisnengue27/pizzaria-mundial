import {
    HashRouter,
    BrowserRouter,
    Routes,
    Route

}
from "react-router-dom"
import HomeFuncionario from "../pages/HomeFuncionario/HomeFuncionario"
import ListarProdutos from "../pages/ListarProduto/ListarProdutos"
import ListarCategoria from "../pages/ListarCategoria/ListarCategoria"
import NovoProduto from "../pages/NovoProduto/NovoProduto"
import EditarProduto from "../pages/EditarProduto/EditarProduto"


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
            element={<HomeFuncionario/>}
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
            element={<ListarCategoria/>}
            />

            <Route
             path="/produtos/novo"
             element={<NovoProduto/>}
            />

            <Route
            path="/produtos/editar/:id"
            element={<EditarProduto/>}
            />

           
        </Routes>
      </HashRouter>
    )
}

export default AppRoutes