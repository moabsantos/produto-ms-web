import { Form } from "react-bootstrap"

import MyButonsFormSubmit from "../../layout/MyButonsFormSubmit";
import MyEditForm from "../../layout/MyEditForm";
import MySelectLabel from "../../layout/MySelectLabel";

const LocalForm = (props) => {



    if (props.dataForm){


    }

    return (
        <div className="container">

            <Form onSubmit={ props.salvar.bind( this ) }>

            <MySelectLabel
                dominio="empresa"
                caption="Empresa"
                fieldName="empresaId"
                name="empresa"
                valueDefault=""
            />

            <MyEditForm caption="Email do Usuário" name="fmuseremail" fieldName="userEmail" valor="" />

            <MyButonsFormSubmit callBusca={props.callBusca} />

            </Form>
        </div>         
    )

}

export default LocalForm