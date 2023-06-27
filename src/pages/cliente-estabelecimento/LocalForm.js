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
        description: ''
    }

    if (props.dataForm){

        valores = {

            clienteId: props.dataForm.clienteId,
            code: props.dataForm.code,
            name: props.dataForm.name,
            description: props.dataForm.description,

            cnpj: props.dataForm.cnpj,
            inscricaoEstadual: props.dataForm.inscricaoEstadual,

            email: props.dataForm.email,
            telefone: props.dataForm.telefone,

            endereco: props.dataForm.endereco,
            numero: props.dataForm.numero,
            bairro: props.dataForm.bairro,
            cidadeId: props.dataForm.cidadeId
        }

    }

    return (
        <div className="container">
            <Form onSubmit={ props.salvar.bind( this ) }>

            <label>Id Cliente: {props.idMaster}</label>
            <MyEditForm caption="Codigo" name="fmcode" fieldName="code" valor={valores.code} />
            <MyEditForm caption="Nome Fantasia" name="fmnome" fieldName="name" valor={valores.name} />

            <MyEditForm caption="CNPJ" name="fmcnpj" fieldName="cnpj" valor={valores.cnpj} />
            <MyEditForm caption="Inscricao Estadual" name="fminscricaoestadual" fieldName="inscricaoEstadual" valor={valores.inscricaoEstadual} />

            <MyEditForm caption="Telefone" name="fmtelefone" fieldName="telefone" valor={valores.telefone} />
            <MyEditForm caption="Email" name="fmemail" fieldName="email" valor={valores.email} />

            <MyEditForm caption="Endereco" name="fmendereco" fieldName="endereco" valor={valores.endereco} />
            <MyEditForm caption="Numero" name="fmnumero" fieldName="numero" valor={valores.numero} />
            <MyEditForm caption="Bairro" name="fmbairro" fieldName="bairro" valor={valores.bairro} />
            <MyEditForm caption="Referência" name="fmdescription" fieldName="description" valor={valores.description} />

            <MySelectLabel
                dominio="cidade"
                caption="Cidade"
                fieldName="cidadeId"
                name="cidade"
                valueDefault={valores.cidadeId} 
            />           

            <MyButonsFormSubmit callBusca={props.callBusca} />

            </Form>
        </div> 
    )
}

export default LocalForm