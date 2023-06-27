import { Form } from "react-bootstrap";
import MyEditForm from "../../layout/MyEditForm";
import MyButonsFormSubmit from "../../layout/MyButonsFormSubmit";

const LocalForm = (props) => {

    let valores = {
        code: '',
        name: '',
        sigla: '',
        description: ''
    }

    if (props.dataForm){

        valores = {
            code: props.dataForm.code,
            name: props.dataForm.name,
            sigla: props.dataForm.sigla,
            description: props.dataForm.description
        }

    }

    return (
        <div className="container">
            <Form onSubmit={ props.salvar.bind( this ) }>

            <MyEditForm caption="Codigo" name="fmcode" fieldName="code" valor={valores.code} />
            <MyEditForm caption="Nome" name="fmnome" fieldName="name" valor={valores.name} />
            <MyEditForm caption="Sigla" name="fmSigla" fieldName="sigla" valor={valores.sigla} />
            <MyEditForm caption="Descrição" name="fmDescricao" fieldName="description" valor={valores.description} />

            <MyButonsFormSubmit callBusca={props.callBusca} />

            </Form>
        </div> 
    )
}

export default LocalForm