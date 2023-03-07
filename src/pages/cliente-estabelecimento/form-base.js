import React, { useState } from "react"
import { useParams, useNavigate } from "react-router-dom";

import MyTabsForm from '../../layout/MyTabsForm';
import FormAdd from './form-add';
import FormEdit from './form-edit';
import FormView from './form-view';

import getApi from '../../_shared/req-get-http';
  
const ClienteEstabelecimento = () => {

  const navigate = useNavigate();
  const dominio = 'cliente-estabelecimento'
  const [dadosCliente, setDadosCliente] = useState("")


  const { idCliente } = useParams();

  getApi({ url: process.env.REACT_APP_HOST_API + '/cliente/' + idCliente })
    .then((resp) => {
      setDadosCliente(resp.data[0].name)
    })

  return (
    <>
      <h4 className='p-3'>
        <div className='lead'>
        Estabelecimentos
        </div>
      {dadosCliente}
      </h4>

      <MyTabsForm
        dominio={dominio}
        idMaster={idCliente}

        columns={[    
          { label: "Código", accessor: "code", sortable: false },
          { label: "Nome", accessor: "name", sortable: true },
          { label: "Telefone", accessor: "telefone", sortable: true },
          { label: "Endereco", accessor: "endereco", sortable: true },
          { label: "Bairro", accessor: "bairro", sortable: true },
          { label: "Cidade", accessor: "cidadeName", sortable: true }
        ]}

        buttonsTop={[
          {label: "Voltar", onClick: () => { navigate("/cliente"); }}
        ]}

        add= {(params) => (<FormAdd dominio={dominio} idMaster={idCliente} callBusca={() => params.callBusca()} />) }
        edit={(params) => FormEdit({ id: params.id, dominio:dominio,  dataForm: params.dataForm, callBusca: () => params.callBusca() })}
        view={(params) => FormView({ id: params.id, dominio:dominio, dataForm: params.dataForm, callBusca: params.callBusca })} 

        />
    </>
  );
};
  
export default ClienteEstabelecimento;