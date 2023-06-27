import { Form } from "react-bootstrap";
import MyEditForm from "../../layout/MyEditForm";
import MySelectLabel from "../../layout/MySelectLabel";
import formataData from '../../_shared/formata-data';
import MyButonsFormSubmit from "../../layout/MyButonsFormSubmit";

const LocalForm = (props) => {

    let valores = {
        code: formataData({format: 'new-code'}),
        name: '',
        sigla: '',
        description: '',
        ufId: 0
    }

    if (props.dataForm){

        valores = {
            code: props.dataForm.code,
            name: props.dataForm.name,
            sigla: props.dataForm.sigla,
            description: props.dataForm.description,
            ufId: props.dataForm.ufId
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
                dominio="uf"
                caption="UF"
                fieldName="ufId"
                name="uf"
                valueDefault={valores.ufId} 
            />

            <MyButonsFormSubmit callBusca={props.callBusca} />

            </Form>
        </div> 
    )
}

export default LocalForm