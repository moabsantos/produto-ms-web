import { Form } from "react-bootstrap";
import MyEditForm from "../../layout/MyEditForm";
import MyButonsFormSubmit from "../../layout/MyButonsFormSubmit";

const LocalForm = (props) => {

    let valores = {
        name: '',
        email: ''
    }

    if (props.dataForm){

        valores = {
            name: props.dataForm.name,
            email: props.dataForm.email
        }

    }

    return (
        <div className="container">
            <Form onSubmit={ props.salvar.bind( this ) }>

            <MyEditForm caption="Nome" name="fmnome" fieldName="name" valor={valores.name} />
            <MyEditForm caption="Email" name="fmEmail" fieldName="email" valor={valores.email} />

            <MyButonsFormSubmit callBusca={props.callBusca} />

            </Form>
        </div> 
    )
}

export default LocalForm