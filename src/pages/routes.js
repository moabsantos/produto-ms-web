import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../layout/Header"

import AuthUsuarioLogin from "./auth-usuario/login-usuario"
import Contact from "./contact"
import CustosDia from "./custos-dia/form-base"
import Empresa from "./empresa/form-base"
import Estagio from "./estagio/form-base"
import Home from "./home"
import Produto from "./produto/produto"
import Setor from "./setor/form-base"
import SignUp from "./signup"
import UnidadeMedida from "./unidade-medida/unidade-medida"

const RoutesModule = () => {

    return(   
        <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/produto' element={<Produto />} />
                    <Route path='/estagio' element={<Estagio/>} />
                    <Route path='/setor' element={<Setor/>} />
                    <Route path='/contact' element={<Contact/>} />
                    <Route path='/unidade-medida' element={<UnidadeMedida/>} />

                    <Route path='/custos-dia' element={<CustosDia/>} />

                    <Route path='/empresa' element={<Empresa/>} />
                    <Route path='/auth-usuario-login' element={<AuthUsuarioLogin />} />
                    <Route path='/sign-up' element={<SignUp/>} />
                </Routes>
        </BrowserRouter>
    )
}

export default RoutesModule;