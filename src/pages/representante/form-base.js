import React  from 'react';
import { useNavigate } from "react-router-dom";

import MyFormBase from '../../layout/MyFormBase';
import LocalForm from './LocalForm';
  
const Representante = () => {

  const navigate = useNavigate();

  const dominio = 'representante'
  const fieldsForm = ['empresaId', 'code', 'name', 'sigla', 'description']

  return (
    <>
      <MyFormBase

        tituloForm={"Representante"}
        dominio={dominio}
        idMaster={'0'}

        buttonsTop={[
          {label: "", labelPopover: "Sair desta tela", nomeIcone: "fa-solid fa-door-open", onClick: () => { navigate("/home"); }}
        ]}
        buttonsAdd={[
          {label: "", nomeIcone: "fa-regular fa-user", onClick: (params) => { navigate("/representante-usuario/"+ params.id); }}
        ]}

        columnsTable={[
          { label: "Empresa", accessor: "empresaName", sortable: true },
          { label: "Codigo", accessor: "code", sortable: true },
          { label: "Nome", accessor: "name", sortable: true },
          { label: "Descrição", accessor: "description", sortable: true }
        ]}

        fieldsForm={fieldsForm}
        bodyFormated={(payload) => payload}
        filterDefault={''}
        LocalForm={LocalForm}

        FormView={() => (<></>)}
      />
    </>
  );
};
  
export default Representante;