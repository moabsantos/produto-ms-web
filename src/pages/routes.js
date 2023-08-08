import { Route, Routes } from "react-router-dom"
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
import PermissaoAcesso from "./permissao-acesso/form-base"
import GrupoAcessoPermissao from "./grupo-acesso-permissao/form-base"
import Home from "./home"
import Pais from "./pais/form-base"
import PedidoVenda from "./pedido-venda/form-base"
import Produto from "./produto/produto"
import RealmUser from "./realm-user/form-base"
import Setor from "./setor/form-base"
import SignUp from "./signup"
import UF from "./uf/form-base"
import UnidadeMedida from "./unidade-medida/unidade-medida"
import RequisicaoAlmoxarifado from "./requisicao-almoxarifado/form-base"
import RequisicaoAlmoxarifadoItem from "./requisicao-almoxarifado-item/form-base"
import PedidoVendaItem from "./pedido-venda-item/form-base"
import ProdutoComponente from "./produto-componente/form-base"
import ProdutoPreco from "./produto-preco/form-base"
import OrdemProducao from "./ordem-producao/form-base"
import OrdemProducaoItem from "./ordem-producao-item/form-base"
import Deposito from "./deposito/form-base"
import DepositoSaldo from "./deposito-saldo/form-base"
import Prioridade from "./prioridade/form-base"
import PedidoStatus from "./pedido-status/form-base"
import ProdutoGrupo from "./produto-grupo/form-base"
import ProducaoDia from "./producao-dia/form-base"
import GrupoAcessoUsuario from "./grupo-acesso-usuario/form-base"
import UsuarioPerfil from "./usuario-perfil/form-base"
import PedidoCompra from "./pedido-compra/form-base"
import PedidoCompraItem from "./pedido-compra-item/form-base"
import RequisicaoCompra from "./requisicao-compra/form-base"
import RequisicaoCompraItem from "./requisicao-compra-item/form-base"
import UsuarioConfig from "./usuario-config/form-base"
import GrupoAcessoModulo from "./grupo-acesso-modulo/form-base"
import DepositoItem from "./deposito-item/form-base"
import PedidoCompraRequisicao from "./pedido-compra-requisicao/form-base"

const RoutesModule = () => {

    return(   
        
                <Routes>
                    <Route exact path='/' element={<PageBase />}>
                        <Route exact path='/' element={<PageHeader />}>
                            <Route path='/home' element={<Home />} />

                            <Route path='/cliente' element={<Cliente />} />
                            <Route path='/cliente-estabelecimento/:idCliente' element={<ClienteEstabelecimento />} />
                            
                            <Route path='/prioridade' element={<Prioridade />} />
                            <Route path='/pedido-status' element={<PedidoStatus />} />
                            <Route path='/pedido-venda' element={<PedidoVenda />} />
                            <Route path='/pedido-venda-item/:idMaster' element={<PedidoVendaItem />} />

                            <Route path='/fornecedor' element={<Fornecedor />} />
                            <Route path='/forma-pagamento' element={<FormaPagamento />} />

                            <Route path='/deposito' element={<Deposito />} />
                            <Route path='/deposito-item/:idMaster' element={<DepositoItem />} />
                            <Route path='/deposito-saldo' element={<DepositoSaldo />} />
                            <Route path='/produto-grupo' element={<ProdutoGrupo />} />
                            <Route path='/produto' element={<Produto />} />
                            <Route path='/produto-preco/:idMaster' element={<ProdutoPreco />} />
                            <Route path='/produto-componente/:idMaster' element={<ProdutoComponente />} />

                            <Route path='/requisicao-almoxarifado' element={<RequisicaoAlmoxarifado />} />
                            <Route path='/requisicao-almoxarifado-item/:idMaster' element={<RequisicaoAlmoxarifadoItem/>} />
                            <Route path='/requisicao-compra' element={<RequisicaoCompra />} />
                            <Route path='/requisicao-compra-item/:idMaster' element={<RequisicaoCompraItem/>} />
                            <Route path='/pedido-compra' element={<PedidoCompra />} />
                            <Route path='/pedido-compra-item/:idMaster' element={<PedidoCompraItem/>} />
                            <Route path='/pedido-compra-requisicao/:idMaster' element={<PedidoCompraRequisicao/>} />
                            
                            <Route path='/ordem-producao' element={<OrdemProducao/>} />
                            <Route path='/ordem-producao-item/:idMaster' element={<OrdemProducaoItem/>} />
                            <Route path='/producao-dia' element={<ProducaoDia/>} />

                            <Route path='/estagio' element={<Estagio/>} />
                            <Route path='/setor' element={<Setor/>} />
                            <Route path='/contact' element={<Contact/>} />
                            <Route path='/unidade-medida' element={<UnidadeMedida/>} />

                            <Route path='/custos-dia' element={<CustosDia/>} />
                            <Route path='/custos-mensais' element={<CustosMensais/>} />

                            <Route path='/usuario-config' element={<UsuarioConfig />} />
                            <Route path='/grupo-acesso' element={<GrupoAcesso/>} />
                            <Route path='/permissao-acesso' element={<PermissaoAcesso/>} />
                            <Route path='/grupo-acesso-modulo/:idMaster' element={<GrupoAcessoModulo/>} />
                            <Route path='/grupo-acesso-permissao/:idMaster' element={<GrupoAcessoPermissao/>} />
                            <Route path='/grupo-acesso-usuario/:idMaster' element={<GrupoAcessoUsuario/>} />
                            <Route path='/realm-user' element={<RealmUser/>} />
                            
                            <Route path='/empresa' element={<Empresa/>} />
                            <Route path='/pais' element={<Pais/>} />
                            <Route path='/uf' element={<UF/>} />
                            <Route path='/cidade' element={<Cidade/>} />
                            <Route path='/sign-up' element={<SignUp/>} />
                        </Route>
                    </Route>

                    <Route path='/auth-usuario-login' element={<AuthUsuarioLogin />} />
                    <Route path='/usuario-perfil' element={<UsuarioPerfil/>} />
                </Routes>

    )
}

export default RoutesModule;