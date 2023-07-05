import { Form } from "react-bootstrap"

import MyEditForm from "../../layout/MyEditForm";
import MySelectLabel from "../../layout/MySelectLabel";
import formataData from '../../_shared/formata-data';
import MyButonsFormSubmit from "../../layout/MyButonsFormSubmit";

const LocalForm = (props) => {

    let valores = {
        code: '',
        name: '',
        dataSolicitacao: ''
    }

    if (props.dataForm){

        valores = {
            code: props.dataForm.code,
            name: props.dataForm.name,
            empresaId: props.dataForm.empresaId,
            fornecedorId: props.dataForm.fornecedorId,
            formaPagamentoId: props.dataForm.formaPagamentoId,
            depositoIdOrigem: props.dataForm.depositoIdOrigem,
            depositoIdDestino: props.dataForm.depositoIdDestino,
            dataSolicitacao: formataData({data: props.dataForm.dataSolicitacao, format: 'to-br-date'})
        }

    }

    return (
        <div className="container">
            <Form onSubmit={ props.salvar.bind( this ) }>

            <MyEditForm caption="Codigo" name="fmcode" fieldName="code" valor={valores.code} />
            <MyEditForm caption="Nome" name="fmnome" fieldName="name" valor={valores.name} />

            <MySelectLabel
                dominio="empresa"
                caption="Empresa"
                fieldName="empresaId"
                name="empresa"
                valueDefault={valores.empresaId} 
            />

            <MySelectLabel
                dominio="fornecedor"
                caption="Fornecedor"
                fieldName="fornecedorId"
                name="fornecedor"
                valueDefault={valores.fornecedorId} 
            />

            <MySelectLabel
                dominio="forma-pagamento"
                caption="Forma Pagamento"
                fieldName="formaPagamentoId"
                name="formaPagamento"
                valueDefault={valores.formaPagamentoId} 
            />

            <MySelectLabel
                dominio="deposito"
                caption="Dep. Saída"
                fieldName="depositoIdOrigem"
                name="depositoIdOrigem"
                valueDefault={valores.depositoIdOrigem} 
            />

            <MySelectLabel
                dominio="deposito"
                caption="Dep. Entrada"
                fieldName="depositoIdDestino"
                name="depositoIdDestino"
                valueDefault={valores.depositoIdDestino} 
            />

            <MyEditForm caption="Data Solicitacao" name="dataSolicitacao" fieldName="dataSolicitacao" valor={valores.dataSolicitacao} />

            <MyButonsFormSubmit callBusca={props.callBusca} />

            </Form>
        </div>         
    )

}

export default LocalForm