import { Form } from "react-bootstrap"
import MyEditForm from "../../layout/MyEditForm"
import MySelectLabel from "../../layout/MySelectLabel";
import MyButonsFormSubmit from "../../layout/MyButonsFormSubmit";

const LocalForm = (props) => {

    let valores = {}

    if (props.dataForm){

        props.fieldsForm.forEach(element => {
            if (props.dataForm[element]) valores[element] = props.dataForm[element]    
        });

    }

    return (
        <div className="container">
            <Form onSubmit={ props.salvar.bind( this ) }>

            <MySelectLabel
                dominio="produto"
                caption="item"
                fieldName="itemId"
                name="item"
                valueDefault={valores.itemId} 
            />

            <MySelectLabel
                dominio="unidade-medida"
                caption="Unidade de Medida"
                fieldName="unidadeMedidaId"
                name="unidadeMedida"
                valueDefault={valores.unidadeMedidaId} 
            />

            <MyEditForm caption="Qtd. Mínima" name="fmQtdMinima" fieldName="quantidadeMinima" valor={valores.quantidadeMinima} />
            <MyEditForm caption="Qtd. Máxima" name="fmQtdMaxima" fieldName="quantidadeMaxima" valor={valores.quantidadeMaxima} />
            <MyEditForm caption="Descrição" name="fmDescription" fieldName="description" valor={valores.description} />

            <MyButonsFormSubmit callBusca={props.callBusca} />

            </Form>
        </div>         
    )

}

export default LocalForm