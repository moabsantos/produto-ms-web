import React, { useState } from "react"

import { Form } from "react-bootstrap"
import MyEditForm from "../../layout/MyEditForm"
import MySelectLabel from "../../layout/MySelectLabel";
import MyButonsFormSubmit from "../../layout/MyButonsFormSubmit";
import formataData from '../../_shared/formata-data';

const LocalForm = (props) => {

    let valores = {
        dataInicio: formataData({format:'new-date-user'}),
        sequencia: 1
    }

    if (props.dataForm){

        props.fieldsForm.forEach(element => {
            if (props.dataForm[element]) valores[element] = props.dataForm[element]    
        });

        valores.dataInicio = formataData({data: props.dataForm.dataInicio, format: 'to-br-date'})
    }

    const [idItem, setIdItem] = useState(valores.itemGrupoId)

    return (
        <div className="container">
            <Form onSubmit={ props.salvar.bind( this ) }>

            <MySelectLabel
                dominio="deposito"
                caption="Depósito"
                fieldName="depositoId"
                name="deposito"
                valueDefault={valores.depositoId} 
            />

            <MySelectLabel
                dominio="deposito?filter=flagAjusteInventario||$eq||1"
                caption="Depósito Ajuste"
                fieldName="depositoInventarioId"
                name="depositoInventarioId"
                valueDefault={valores.depositoInventarioId} 
            />

            <MySelectLabel
                dominio="produto-grupo"
                caption="Grupo Item"
                fieldName="itemGrupoId"
                name="itemGrupo"
                valueDefault={valores.itemGrupoId} 
                onChange={(id) => { setIdItem(id) }}
            />

            <MyEditForm caption="Parte do Nome do Item" name="itemPartialName" fieldName="itemPartialName" valor={valores.itemPartialName} />

            <MySelectLabel
                dominio={"produto?filter[]=produtoGrupoId||eq||"+idItem}
                caption="Item"
                fieldName="itemId"
                name="item"
                valueDefault={valores.itemId}
                valorVazio={null} 
            />

            <MyEditForm caption="Data Início" name="dataInicio" fieldName="Data Inicio" valor={valores.dataInicio} />

            <MyEditForm caption="Sequencia" name="sequencia" fieldName="Data Inicio" valor={valores.sequencia} />

            <MyButonsFormSubmit callBusca={props.callBusca} />

            </Form>
        </div>         
    )

}

export default LocalForm