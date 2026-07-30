import {
    HashRouter,
    BrowserRouter,
    Routes,
    Route

}
from "react-router-dom"
import HomeFuncionario from "../pages/HomeFuncionario/HomeFuncionario"
import ListarProdutos from "../pages/ListarProduto/ListarProduto"


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
           
        </Routes>
      </HashRouter>
    )
}

export default AppRoutes