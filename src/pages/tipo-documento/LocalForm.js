import React from "react"

import { Form } from "react-bootstrap"
import MyEditForm from "../../layout/MyEditForm"
import MyButonsFormSubmit from "../../layout/MyButonsFormSubmit";

const LocalForm = (props) => {

    let valores = {}

    if (props.dataForm) props.fieldsForm.forEach(element => {
            if (props.dataForm[element]) valores[element] = props.dataForm[element]    
        });

    return (
        <div className="container">
            <Form onSubmit={ props.salvar.bind( this ) }>

            <MyEditForm caption="Código" name="code" fieldName="code" valor={valores.code} />
            <MyEditForm caption="Nome" name="name" fieldName="name" valor={valores.name} />
            <MyEditForm caption="Sigla" name="sigla" fieldName="sigla" valor={valores.sigla} />
            <MyEditForm caption="Descrição" name="description" fieldName="description" valor={valores.description} />

            <MyButonsFormSubmit callBusca={props.callBusca} />

            </Form>
        </div>         
    )

}

export default LocalForm