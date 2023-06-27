import { Form } from "react-bootstrap";
import MyEditForm from "../../layout/MyEditForm";
import MySelectLabel from "../../layout/MySelectLabel";
import formataData from '../../_shared/formata-data';
import MyButonsFormSubmit from "../../layout/MyButonsFormSubmit";

const LocalForm = (props) => {

    const dataAtual = formataData({format: 'new-date-json'})
    let valores = {
        ano: dataAtual.ano,
        mes: dataAtual.mes
    }

    if (props.dataForm){

        valores = {
            empresaId: props.dataForm.empresaId,
            ano: props.dataForm.ano,
            mes: props.dataForm.mes
        }

    }

    return (
        <div className="container">
            <Form onSubmit={ props.salvar.bind( this ) }>

            <MySelectLabel
                dominio="empresa"
                caption="Empresa"
                fieldName="empresaId"
                name="empresa"
                valueDefault={valores.empresaId} 
            />

            <MyEditForm caption="Ano" name="fmAno" fieldName="ano" valor={valores.ano} />
            <MyEditForm caption="Mês" name="fmMes" fieldName="mes" valor={valores.mes} />

            <MyButonsFormSubmit callBusca={props.callBusca} />

            </Form>
        </div> 
    )
}

export default LocalForm