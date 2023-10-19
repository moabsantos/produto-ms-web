import { Form, Button, Row, Col } from "react-bootstrap"

import MyEditForm from "../../layout/MyEditForm"
import MySelectLabel from "../../layout/MySelectLabel";
import formataNumero from '../../_shared/formata-numero';
import APP_CONST from "../../App.const"
import formataData from "../../_shared/formata-data";

const LocalForm = (props) => {

    let valores = {
        qtdParcelas: 1,
        valorMercadoria: 0,
        valorServico: 0,
        valorDesconto: 0,
        valorFrete: 0,
        valorOutrosAcrescimos: 0,
        valorOutrasDeducoes: 0
    }

    if (props.dataForm){

        props.fieldsForm.forEach(element => {
            if (props.dataForm[element]) valores[element] = props.dataForm[element]    
        });

        valores.dataDocumento = formataData({data: props.dataForm.dataDocumento, format: 'to-br-date'})
        valores['valorMercadoria'] = formataNumero({valor: props.dataForm.valorMercadoria, format: 'c0,2'})
        valores['valorServico'] = formataNumero({valor: props.dataForm.valorServico, format: 'c0,2'})
        valores['valorDesconto'] = formataNumero({valor: props.dataForm.valorDesconto, format: 'c0,2'})
        valores['valorFrete'] = formataNumero({valor: props.dataForm.valorFrete, format: 'c0,2'})
        valores['valorOutrosAcrescimos'] = formataNumero({valor: props.dataForm.valorOutrosAcrescimos, format: 'c0,2'})
        valores['valorOutrasDeducoes'] = formataNumero({valor: props.dataForm.valorOutrasDeducoes, format: 'c0,2'})
    }

    return (
        <div className="container">

            <Form onSubmit={ props.salvar.bind( this ) }>

            <MySelectLabel
                dominio="fornecedor"
                caption="Fornecedor"
                fieldName="fornecedorId"
                name="fornecedorId"
                valueDefault={valores.fornecedorId} 
            />

            <MySelectLabel
                dominio="tipo-documento"
                caption="Tipo do Documento"
                fieldName="tipoDocumentoId"
                name="tipoDocumentoId"
                valueDefault={valores.tipoDocumentoId} 
            />

            <MyEditForm caption="Nº Documento" name="numeroDocumento" fieldName="numeroDocumento" valor={valores.numeroDocumento} />
            <MyEditForm caption="Data Emissão" name="dataDocumento" fieldName="dataDocumento" valor={valores.dataDocumento} />

            <MySelectLabel
                dominio="forma-pagamento"
                caption="Forma de Pagamento"
                fieldName="formaPagamentoId"
                name="formaPagamentoId"
                valueDefault={valores.formaPagamentoId} 
            />   

            <MyEditForm caption="Qtd. Parcelas" name="qtdParcelas" fieldName="qtdParcelas" valor={valores.qtdParcelas} />
            <MyEditForm caption="( + ) Mercadoria R$" name="valorMercadoria" fieldName="valorMercadoria" valor={valores.valorMercadoria} />
            <MyEditForm caption="( + ) Serviço R$" name="valorServico" fieldName="valorServico" valor={valores.valorServico} />
            <MyEditForm caption="( - ) Desconto R$" name="valorDesconto" fieldName="valorDesconto" valor={valores.valorDesconto} />
            <MyEditForm caption="( + ) Frete R$" name="valorFrete" fieldName="valorFrete" valor={valores.valorFrete} />
            <MyEditForm caption="( + ) Outros Acréscimos R$" name="valorOutrosAcrescimos" fieldName="valorOutrosAcrescimos" valor={valores.valorOutrosAcrescimos} />
            <MyEditForm caption="( - ) Outras Deduções R$" name="valorOutrasDeducoes" fieldName="valorOutrasDeducoes" valor={valores.valorOutrasDeducoes} />

            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }} className='p-2'>
                    <div className="d-inline p-2"><Button type="submit"><i className="fa-regular fa-floppy-disk"></i></Button></div>
                    <div className="d-inline p-2"><Button type="button" className='bg-light text-secondary' onClick={() => props.callBusca()}><i className={APP_CONST.icone.voltar.i_classname}></i></Button></div>
                </Col>
            </Form.Group>
            </Form>
        </div>         
    )

}

export default LocalForm