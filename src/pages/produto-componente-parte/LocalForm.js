import { Form } from "react-bootstrap"
import MyEditForm from "../../layout/MyEditForm"
import MyButonsFormSubmit from "../../layout/MyButonsFormSubmit";

const LocalForm = (props) => {

    let valores = {
        sequencia: 1
    }

    if (props.dataForm){

        props.fieldsForm.forEach(element => {
            if (props.dataForm[element]) valores[element] = props.dataForm[element]    
        });

    }

    return (
        <div className="container">
            <Form onSubmit={ props.salvar.bind( this ) }>

            <MyEditForm caption="Sequencia" name="sequencia" fieldName="sequencia" valor={valores.sequencia} />
            <MyEditForm caption="Quantidade" name="quantidade" fieldName="quantidade" valor={valores.quantidade} />
            <MyEditForm caption="Consumo" name="consumo" fieldName="consumo" valor={valores.consumo} />
            <MyEditForm caption="Nome da Parte" name="nomeParte" fieldName="nomeParte" valor={valores.nomeParte} />
            <MyEditForm caption="Descrição" name="description" fieldName="description" valor={valores.description} />

            <MyButonsFormSubmit callBusca={props.callBusca} />

            </Form>
        </div>         
    )

}

export default LocalForm