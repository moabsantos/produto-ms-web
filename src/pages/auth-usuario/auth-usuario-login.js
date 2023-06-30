import { useNavigate } from "react-router-dom";
import GoogleAuth from "../../components/GoogleAuth";

export default function AuthUsuarioLogin() {

  const navigate = useNavigate();

  return (
    <div className='container'>

      <h3>Login de Usuário</h3>
      <GoogleAuth onSucesso={(data) => navigate('/home')} />

    </div> 
  )
}
