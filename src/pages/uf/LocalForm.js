import { Form } from "react-bootstrap";
import MyEditForm from "../../layout/MyEditForm";
import MySelectLabel from "../../layout/MySelectLabel";
import MyButonsFormSubmit from "../../layout/MyButonsFormSubmit";

const LocalForm = (props) => {

    let valores = {
        code: '',
        name: '',
        sigla: '',
        description: '',
        paisId: 0
    }

    if (props.dataForm){

        valores = {
            code: props.dataForm.code,
            name: props.dataForm.name,
            sigla: props.dataForm.sigla,
            description: props.dataForm.description,
            paisId: props.dataForm.paisId
        }

    }

    return (
        <div className="container">
            <Form onSubmit={ props.salvar.bind( this ) }>

            <MyEditForm caption="Codigo" name="fmcode" fieldName="code" valor={valores.code} />
            <MyEditForm caption="Nome" name="fmnome" fieldName="name" valor={valores.name} />
            <MyEditForm caption="Sigla" name="fmSigla" fieldName="sigla" valor={valores.sigla} />
            <MyEditForm caption="Descrição" name="fmDescricao" fieldName="description" valor={valores.description} />

            <MySelectLabel
                dominio="pais"
                caption="País"
                fieldName="paisId"
                name="pais"
                valueDefault={valores.paisId} 
            />

            <MyButonsFormSubmit callBusca={props.callBusca} />

            </Form>
        </div> 
    )
}

export default LocalForm