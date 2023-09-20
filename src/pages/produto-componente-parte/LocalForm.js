import { Form } from "react-bootstrap"
import MyEditForm from "../../layout/MyEditForm"
import MyButonsFormSubmit from "../../layout/MyButonsFormSubmit";
import formataNumero from "../../_shared/formata-numero";

const LocalForm = (props) => {

    let valores = {
        sequencia: 1
    }

    if (props.dataForm){

        props.fieldsForm.forEach(element => {
            if (props.dataForm[element]) valores[element] = props.dataForm[element]    
        });

        valores['quantidade'] = formataNumero({valor: props.dataForm.quantidade, format: 'c0,3'})
        valores['consumoX'] = formataNumero({valor: props.dataForm.consumoX, format: 'c0,3'})
        valores['consumoY'] = formataNumero({valor: props.dataForm.consumoY, format: 'c0,3'})

    }

    return (
        <div className="container">
            <Form onSubmit={ props.salvar.bind( this ) }>

            <MyEditForm caption="Sequencia" name="sequencia" fieldName="sequencia" valor={valores.sequencia} />
            <MyEditForm caption="Quantidade" name="quantidade" fieldName="quantidade" valor={valores.quantidade} />
            <MyEditForm caption="Consumo (X)" name="consumoX" fieldName="consumoX" valor={valores.consumoX} />
            <MyEditForm caption="Consumo (Y)" name="consumoY" fieldName="consumoY" valor={valores.consumoY} />
            <MyEditForm caption="Nome da Parte" name="nomeParte" fieldName="nomeParte" valor={valores.nomeParte} />
            <MyEditForm caption="Descrição" name="description" fieldName="description" valor={valores.description} />

            <MyButonsFormSubmit callBusca={props.callBusca} />

            </Form>
        </div>         
    )

}

export default LocalForm