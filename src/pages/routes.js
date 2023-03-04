import { BrowserRouter, Route, Routes } from "react-router-dom"
import PageBase from "../layout/PageBase"
import PageHeader from "../layout/PageHeader"

import AuthUsuarioLogin from "./auth-usuario/auth-usuario-login"
import Cidade from "./cidade/form-base"
import Cliente from "./cliente/form-base"
import Contact from "./contact"
import CustosDia from "./custos-dia/form-base"
import CustosMensais from "./custos-mes/form-base"
import Empresa from "./empresa/form-base"
import ClienteEstabelecimento from "./cliente-estabelecimento/form-base"
import Estagio from "./estagio/form-base"
import FormaPagamento from "./forma-pagamento/form-base"
import Fornecedor from "./fornecedor/form-base"
import GrupoAcesso from "./grupo-acesso/form-base"
import Home from "./home"
import Pais from "./pais/form-base"
import PedidoVenda from "./pedido-venda/form-base"
import Produto from "./produto/produto"
import RealmUser from "./realm-user/form-base"
import Setor from "./setor/form-base"
import SignUp from "./signup"
import UF from "./uf/form-base"
import UnidadeMedida from "./unidade-medida/unidade-medida"

const RoutesModule = () => {

    return(   
        <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<PageBase />}>
                        <Route exact path='/' element={<PageHeader />}>
                            <Route path='/home' element={<Home />} />

                            <Route path='/cliente' element={<Cliente />} />
                            <Route path='/cliente-estabelecimento/:idCliente' element={<ClienteEstabelecimento />} />
                            <Route path='/pedido-venda' element={<PedidoVenda />} />

                            <Route path='/fornecedor' element={<Fornecedor />} />
                            <Route path='/forma-pagamento' element={<FormaPagamento />} />

                            <Route path='/produto' element={<Produto />} />
                            <Route path='/estagio' element={<Estagio/>} />
                            <Route path='/setor' element={<Setor/>} />
                            <Route path='/contact' element={<Contact/>} />
                            <Route path='/unidade-medida' element={<UnidadeMedida/>} />

                            <Route path='/custos-dia' element={<CustosDia/>} />
                            <Route path='/custos-mensais' element={<CustosMensais/>} />

                            <Route path='/grupo-acesso' element={<GrupoAcesso/>} />
                            <Route path='/realm-user' element={<RealmUser/>} />
                            
                            <Route path='/empresa' element={<Empresa/>} />
                            <Route path='/pais' element={<Pais/>} />
                            <Route path='/uf' element={<UF/>} />
                            <Route path='/cidade' element={<Cidade/>} />
                            <Route path='/sign-up' element={<SignUp/>} />
                        </Route>
                    </Route>

                    <Route path='/auth-usuario-login' element={<AuthUsuarioLogin />} />
                </Routes>
        </BrowserRouter>
    )
}

export default RoutesModule;