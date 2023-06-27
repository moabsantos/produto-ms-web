import { Form } from "react-bootstrap";
import MyEditForm from "../../layout/MyEditForm";
import MySelectLabel from "../../layout/MySelectLabel";
import formataData from '../../_shared/formata-data';
import formataNumero from '../../_shared/formata-numero';
import MyButonsFormSubmit from "../../layout/MyButonsFormSubmit";

const LocalForm = (props) => {

    let valores = {
        data: formataData({format: 'new-date-user'}),
        name: '',
        sigla: '',
        description: ''
    }

    if (props.dataForm){

        valores = {
            empresaId: props.dataForm.empresaId,
            data: formataData({data: props.dataForm.data, format: 'to-br-date'}),
            setorId: props.dataForm.setorId,
            itemDespesaId: props.dataForm.itemDespesaId,
            unidadeMedidaId: props.dataForm.unidadeMedidaId,
            quantidadeRealizada: formataNumero({valor: props.dataForm.quantidadeRealizada, format: 'c0,3'}),
            valorRealizado: formataNumero({valor: props.dataForm.valorRealizado, format: 'c0,3'})
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

            <MyEditForm caption="Data" name="fmdata" fieldName="data" valor={valores.data} />

            <MySelectLabel
                dominio="setor"
                caption="Setor"
                fieldName="setorId"
                name="setor"
                valueDefault={valores.setorId} 
            />

            <MySelectLabel
                dominio="produto"
                caption="Material / Serviço"
                fieldName="itemDespesaId"
                name="fmitemDespesaId"
                valueDefault={valores.itemDespesaId} 
            />

            <MySelectLabel
                dominio="unidade-medida"
                caption="Unidade Medida"
                fieldName="unidadeMedidaId"
                name="unidadeMedida"
                valueDefault={valores.unidadeMedidaId} 
            />

            <MyEditForm caption="Quantidade" name="fmQuantidade" fieldName="quantidadeRealizada" valor={valores.quantidadeRealizada} />
            <MyEditForm caption="Valor" name="fmValor" fieldName="valorRealizado" valor={valores.valorRealizado} />

            <MyButonsFormSubmit callBusca={props.callBusca} />

            </Form>
        </div> 
    )
}

export default LocalForm