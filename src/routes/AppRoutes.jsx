import {
    HashRouter,
    BrowserRouter,
    Routes,
    Route

}
from "react-router-dom"
import HomeFuncionario from "../pages/HomeFuncionario/HomeFuncionario"
import ListarProdutos from "../pages/ListarProduto/ListarProdutos"
import NovoProduto from "../pages/NovoProduto/NovoProduto"


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
            element={<ListarProdutos/>}
            />

            <Route
             path="/produtos/novo"
             element={<NovoProduto/>}
            />

           
        </Routes>
      </HashRouter>
    )
}

export default AppRoutes