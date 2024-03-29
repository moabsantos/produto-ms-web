import { Form } from "react-bootstrap";
import MyEditForm from "../../layout/MyEditForm";
import MySelectLabel from "../../layout/MySelectLabel";
import formataNumero from '../../_shared/formata-numero';
import MyButonsFormSubmit from "../../layout/MyButonsFormSubmit";

const LocalForm = (props) => {

    let valores = {
        code: '',
        numeroAlternativa: '1',
        sequencia: '1',
        quantidadeProducao: '1',
    }

    if (props.dataForm){

        valores = {

            produtoId: props.dataForm.produtoId,
            estagioId: props.dataForm.estagioId,
            numeroAlternativa: props.dataForm.numeroAlternativa,
            sequencia: props.dataForm.sequencia,
            quantidadeProducao: formataNumero({valor: props.dataForm.quantidadeProducao, format: 'c0,3'}),

            unidadeMedidaProducaoId: props.dataForm.unidadeMedidaProducaoId,
            consumoProducao: formataNumero({valor: props.dataForm.consumoProducao, format: 'c0,3'}),

            componenteId: props.dataForm.componenteId,
            unidadeMedidaConsumoId: props.dataForm.unidadeMedidaConsumoId,
            
        }

    }

    return (
        <div className="container  d-inline">
            <Form onSubmit={ props.salvar.bind( this ) }>

            <label>Id Produto: {props.dadosMaster && props.dadosMaster.id}</label>

            <MyEditForm 
                caption="Alternativa" 
                name="fmAlternativa" 
                fieldName="numeroAlternativa"
                sizeLabel="2"
                sizeEdit="4"
                valor={valores.numeroAlternativa} 
            />

            <MyEditForm 
                caption="Sequencia" 
                name="fmSequencia" 
                fieldName="sequencia"
                sizeLabel="2"
                sizeEdit="4"
                valor={valores.sequencia} 
            />

            <MyEditForm 
                caption="Quantidade Produzir" 
                name="fmQuantidadeProduzir" 
                fieldName="quantidadeProducao"
                sizeLabel="2"
                sizeEdit="4"
                valor={valores.quantidadeProducao} 
            /> 

            <MySelectLabel
                dominio="unidade-medida"
                caption="Unid Produção"
                fieldName="unidadeMedidaProducaoId"
                name="unidade-medida-prod"
                sizeLabel="2"
                sizeEdit="4"
                valueDefault={valores.unidadeMedidaProducaoId} 
            />           

            <MySelectLabel
                dominio="estagio"
                caption="Estagio"
                fieldName="estagioId"
                name="estagio"
                sizeLabel="2"
                sizeEdit="4"
                valueDefault={valores.estagioId} 
            />  

            <MySelectLabel
                dominio="produto"
                caption="Componente"
                fieldName="componenteId"
                name="componente"
                valueDefault={valores.componenteId} 
            />   

            <MyEditForm 
                caption="Consumo Produção" 
                name="fmConsumoProduzir" 
                fieldName="consumoProducao"
                sizeLabel="2"
                sizeEdit="4"
                valor={valores.consumoProducao} 
            />

            <MySelectLabel
                dominio="unidade-medida"
                caption="Unid Consumo"
                fieldName="unidadeMedidaConsumoId"
                name="unidade-medida-cons"
                sizeLabel="2"
                sizeEdit="4"
                valueDefault={valores.unidadeMedidaConsumoId} 
            />     

            <MyButonsFormSubmit callBusca={props.callBusca} />

            </Form>
        </div> 
    )
}

export default LocalForm