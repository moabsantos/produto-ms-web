import { Form } from "react-bootstrap"
import MyEditForm from "../../layout/MyEditForm"
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

            <Form.Label column sm={2}>Produto</Form.Label>
            <Form.Label column sm={2}>{props.dataForm['itemCode']}</Form.Label>
            <Form.Label column sm={8}>{props.dataForm['itemName']}</Form.Label>

            <Form.Label column sm={2}>Lote</Form.Label>
            <Form.Label column sm={10}>{props.dataForm['loteCodigo']}</Form.Label>

            <Form.Label column sm={2}>Unidade</Form.Label>
            <Form.Label column sm={10}>{props.dataForm['unidadeMedidaName']}</Form.Label>

            <MyEditForm caption="Qtd. Contagem" name="quantidadeContagem" fieldName="quantidadeContagem" valor={valores.quantidadeContagem} />

            <MyButonsFormSubmit callBusca={props.callBusca} />

            </Form>
        </div>         
    )

}

export default LocalForm