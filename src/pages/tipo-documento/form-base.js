import React  from 'react';
import { useNavigate } from "react-router-dom";

import MyFormBase from '../../layout/MyFormBase';
import LocalForm from './LocalForm';
  
const TipoDocumento = () => {

  const navigate = useNavigate();

  const dominio = 'tipo-documento'
  const fieldsForm = ['code', 'name', 'sigla', 'description']

  return (
    <>
      <MyFormBase

        tituloForm={"Tipos de Documento"}
        dominio={dominio}
        idMaster={'0'}

        buttonsTop={[
          {label: "", labelPopover: "Sair desta tela", nomeIcone: "fa-solid fa-door-open", onClick: () => { navigate("/home"); }}
        ]}
        buttonsAdd={[]}

        columnsTable={[
          { label: "Código", accessor: "code", sortable: true },
          { label: "Nome", accessor: "name", sortable: true },
          { label: "Sigla", accessor: "sigla", sortable: true },
          { label: "Descrição", accessor: "description", sortable: true }
        ]}

        fieldsForm={fieldsForm}
        bodyFormated={(payload) => {
          return payload
        }}
        LocalForm={LocalForm}

        FormView={() => (<></>)}
      />
    </>
  );
};
  
export default TipoDocumento;