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

            <MyEditForm caption="Codigo" name="fmcode" fieldName="code" valor={valores.code} />
            <MyEditForm caption="Nome" name="fmnome" fieldName="name" valor={valores.name} />
            <MyEditForm caption="Descrição" name="fmDescricao" fieldName="description" valor={valores.description} />
            <MyEditForm caption="Sequencia" name="fmsequencia" fieldName="sequencia" valor={valores.sequencia} />
            <MyEditForm caption="Cor" name="fmsequencia" fieldName="cor" valor={valores.cor} />

            <MyButonsFormSubmit callBusca={props.callBusca} />

            </Form>
        </div>         
    )

}

export default LocalForm