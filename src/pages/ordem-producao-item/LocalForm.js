import { Form } from "react-bootstrap"
import MyEditForm from "../../layout/MyEditForm"
import MySelectLabel from "../../layout/MySelectLabel";
import MyButonsFormSubmit from "../../layout/MyButonsFormSubmit";

const LocalForm = (props) => {

    let valores = {}

    if (props.dataForm){

        props.fieldsForm.forEach(element => {
            if (valores[element]){
                valores[element] = props.dataForm[element]
            }    
        });

    }

    return (
        <div className="container">
            <Form onSubmit={ props.salvar.bind( this ) }>

            <label>Id Ordem Produção: {props.idMaster}</label>

            <MyEditForm caption="Sequencia" name="fmsequencia" fieldName="sequencia" valor={valores.sequencia} />

            <MySelectLabel
                dominio="produto"
                caption="Produto"
                fieldName="produtoId"
                name="produto"
                valueDefault={valores.produtoId} 
            />  

            <MySelectLabel
                dominio="estagio"
                caption="Estagio"
                fieldName="estagioId"
                name="etagio"
                valueDefault={valores.estagioId} 
            />  

            <MyEditForm 
                caption="Quant Solicitada" 
                name="fmQuantidadeSolicitada" 
                fieldName="quantidadeSolicitada" 
                valor={valores.quantidadeSolicitada} 
            />

            <MySelectLabel
                dominio="unidade-medida"
                caption="Unidade Medida"
                fieldName="unidadeMedidaId"
                name="unidadeMedida"
                valueDefault={valores.unidadeMedidaId} 
            />  

            <MyEditForm caption="Descrição" name="fmDescricao" fieldName="description" valor={valores.description} />

            <MyButonsFormSubmit callBusca={props.callBusca} />

            </Form>
        </div>         
    )

}

export default LocalForm