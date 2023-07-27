import React from 'react';
import { useNavigate } from "react-router-dom";

import postApi from '../../_shared/req-post-http';

const UsuarioConfig = () => {

  const navigate = useNavigate();

  const tituloForm = 'Configuração do Usuário'

  return (
    <>
      <h4 className='p-3'>
        {tituloForm}
      </h4>
      <div className="container">
        <form>
          <label>
            Mostrar Perfil Owner
          </label>
          
          <div className="d-inline p-2"><button type="button" className='bg-light text-secondary' onClick={() => 
                postApi({url: `${process.env.REACT_APP_HOST_API}/user/mostrar-grupo-owner`, body: {showGroupOwner: 1}}) 
                .then(() => navigate("/usuario-config"))
          }>Sim</button></div>

          <div className="d-inline p-2"><button onClick={() => 
                postApi({url: `${process.env.REACT_APP_HOST_API}/user/mostrar-grupo-owner`, body: {showGroupOwner: 0}}) 
                .then(() => navigate("/usuario-config"))
          }>Não</button></div>
        </form>
      </div>
    </>
  );
};
  
export default UsuarioConfig;