import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import MyEditForm from "../../layout/MyEditForm";
import MySelectLabel from "../../layout/MySelectLabel";
import formataNumero from '../../_shared/formata-numero';
import MyButonsFormSubmit from "../../layout/MyButonsFormSubmit";

const LocalForm = (props) => {

    let valores = {
        code: '',
        quantidadeSolicitada: 0,

        valorInicialItem: 0,
        percentDescontoItem: 0,

        
        valorItem: 0,
        valorTotalItem: 0
    }

    if (props.dataForm){

        valores = {

            pedidoVendaId: props.dataForm.pedidoVendaId,
            itemVendaId: props.dataForm.itemVendaId,
            quantidadeSolicitada: props.dataForm.quantidadeSolicitada,
            unidadeMedidaId: props.dataForm.unidadeMedidaId,

            valorInicialItem: props.dataForm.valorInicialItem,
            percentDescontoItem: props.dataForm.percentDescontoItem,

            valorItem: props.dataForm.valorItem,
            valorTotalItem: props.dataForm.valorTotalItem
        }

    }

    const [valorItem, setValorItem] = useState(valores.valorInicialItem)
    const [valorTotal, setValorTotal] = useState(0)
    const [valorLiquido, setValorLiquido] = useState(0)
    const [quantidade, setQuantidade] = useState(valores.quantidadeSolicitada)
    const [percentDesconto, setPercentDesconto] = useState(valores.percentDescontoItem)
    const [valorDesconto, setValorDesconto] = useState(0)

    const calculaTotalQtd = (event) => {
        setQuantidade(event.target.value)
    }

    const calculaTotalValorItem = (event) => {
        setValorItem(event.target.value)
    }

    const calculaTotalPercent = (event) => {
        const per = formataNumero({valor:event.target.value, format: 'c0.'})
        setPercentDesconto(per + 0)
    }

    useEffect(() => {

        const liquido = (valorItem * (1 - (percentDesconto/100)))
        setValorDesconto(quantidade * (valorItem - liquido))
        setValorLiquido(liquido)
        const total = quantidade * liquido
        setValorTotal(total)

    }, [quantidade, valorItem, percentDesconto]);

    return (
        <div className="container">
            <Form onSubmit={ props.salvar.bind( this ) }>

            <label>Id Pedido Venda: {props.idMaster}</label>

            <MySelectLabel
                dominio="produto"
                caption="Produto"
                fieldName="itemVendaId"
                name="itemVenda"
                valueDefault={valores.itemVendaId} 
            />   

            <MyEditForm 
                caption="Quantidade" 
                name="fmQuantidadeSolicitada" 
                fieldName="quantidadeSolicitada" 
                onChange={calculaTotalQtd}
                valor={valores.quantidadeSolicitada} 
            />

            <MySelectLabel
                dominio="unidade-medida"
                caption="Unidade Medida"
                fieldName="unidadeMedidaId"
                name="unidade-medida"
                valueDefault={valores.unidadeMedidaId} 
            />           

            <MyEditForm 
                caption="Valor" 
                name="fmValorInicialItem" 
                fieldName="valorInicialItem" 
                onChange={calculaTotalValorItem}
                valor={valores.valorInicialItem} 
            />

            <MyEditForm 
                caption="Percent" 
                name="fmPercentDescontoItem" 
                fieldName="percentDescontoItem" 
                onChange={calculaTotalPercent}
                valor={valores.percentDescontoItem} 
            />


            <Form.Label column sm={2}>
            Total
            </Form.Label>

            <Form.Label column sm={2}>
            {"Valor Desconto ".concat(formataNumero({valor: valorDesconto, format: 'c0,2'})) }
            </Form.Label>

            <Form.Label column sm={2}>
            {"Valor Líquido ".concat(formataNumero({valor: valorLiquido, format: 'c0,2'})) }
            </Form.Label>

            <Form.Label column sm={2}>
            {"Valor Total ".concat(formataNumero({valor: valorTotal, format: 'c0,2'})) }
            </Form.Label>

            <MyButonsFormSubmit callBusca={props.callBusca} />

            </Form>
        </div> 
    )
}

export default LocalForm