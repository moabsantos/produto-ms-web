import { Button, Col, Form, Row } from "react-bootstrap";
import MyEditForm from "../../layout/MyEditForm";
import MySelectLabel from "../../layout/MySelectLabel";

const LocalForm = (props) => {

    let valores = {
        code: '',
    }

    if (props.dataForm){

        valores = {

            produtoId: props.dataForm.produtoId,
            estagioId: props.dataForm.estagioId,
            numeroAlternativa: props.dataForm.numeroAlternativa,
            sequencia: props.dataForm.sequencia,
            quantidadeProducao: props.dataForm.quantidadeProducao,

            unidadeMedidaProducaoId: props.dataForm.unidadeMedidaProducaoId,
            consumoProducao: props.dataForm.consumoProducao,

            componenteId: props.dataForm.componenteId,
            unidadeMedidaConsumoId: props.dataForm.unidadeMedidaConsumoId,
            
        }

    }

    return (
        <div className="container">
            <Form onSubmit={ props.salvar.bind( this ) }>

            <label>Id Produto: {props.idMaster}</label>

            <MyEditForm 
                caption="Alternativa" 
                name="fmAlternativa" 
                fieldName="numeroAlternativa"
                valor={valores.numeroAlternativa} 
            />

            <MyEditForm 
                caption="Sequencia" 
                name="fmSequencia" 
                fieldName="sequencia"
                valor={valores.sequencia} 
            />

            <MySelectLabel
                dominio="estagio"
                caption="Estagio"
                fieldName="estagioId"
                name="estagio"
                valueDefault={valores.estagioId} 
            />  

            <MyEditForm 
                caption="Quantidade Produzir" 
                name="fmQuantidadeProduzir" 
                fieldName="quantidadeProducao"
                valor={valores.quantidadeProducao} 
            /> 

            <MySelectLabel
                dominio="unidade-medida"
                caption="Unid Produção"
                fieldName="unidadeMedidaProducaoId"
                name="unidade-medida-prod"
                valueDefault={valores.unidadeMedidaProducaoId} 
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
                valor={valores.consumoProducao} 
            />

            <MySelectLabel
                dominio="unidade-medida"
                caption="Unid Consumo"
                fieldName="unidadeMedidaConsumoId"
                name="unidade-medida-cons"
                valueDefault={valores.unidadeMedidaConsumoId} 
            />     

            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                    <div className="d-inline p-2"><Button type="submit">Salvar</Button></div>
                    <div className="d-inline p-2"><Button type="button" className='bg-light text-secondary' onClick={() => props.callBusca()}>Voltar</Button></div>
                </Col>
            </Form.Group>

            </Form>
        </div> 
    )
}

export default LocalForm