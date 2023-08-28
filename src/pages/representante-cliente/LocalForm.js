import { Form } from "react-bootstrap"
import MyButonsFormSubmit from "../../layout/MyButonsFormSubmit";
import MySelectLabel from "../../layout/MySelectLabel";

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
                dominio="cliente"
                caption="Cliente"
                fieldName="clienteId"
                name="cliente"
                valueDefault={valores.clienteId} 
            />

            <MyButonsFormSubmit callBusca={props.callBusca} />
            </Form>
        </div>         
    )

}

export default LocalForm