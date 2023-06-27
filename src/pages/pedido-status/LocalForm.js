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

            <MyEditForm caption="Codigo" name="fmcode" fieldName="code" valor={valores.code} />
            <MyEditForm caption="Nome" name="fmnome" fieldName="name" valor={valores.name} />
            <MyEditForm caption="Descrição" name="fmDescricao" fieldName="description" valor={valores.description} />
            
            
            <MySelectLabel
                dominio=""
                options={[{id:0, name: "Não"}, {id: 1, name: "Sim"}]}
                caption="Pendente"
                fieldName="flagPendente"
                name="flagPendente"
                valueDefault={valores.flagPendente} 
            />
            
            <MySelectLabel
                dominio=""
                options={[{id:0, name: "Não"}, {id: 1, name: "Sim"}]}
                caption="Aprovado"
                fieldName="flagAprovado"
                name="flagAprovado"
                valueDefault={valores.flagAprovado} 
            />

            <MySelectLabel
                dominio=""
                options={[{id:0, name: "Não"}, {id: 1, name: "Sim"}]}
                caption="Em Produção"
                fieldName="flagEmProducao"
                name="flagEmProducao"
                valueDefault={valores.flagEmProducao} 
            />

            <MySelectLabel
                dominio=""
                options={[{id:0, name: "Não"}, {id: 1, name: "Sim"}]}
                caption="Em Trânsito"
                fieldName="flagEmTransito"
                name="flagEmTransito"
                valueDefault={valores.flagEmTransito} 
            />

            <MySelectLabel
                dominio=""
                options={[{id:0, name: "Não"}, {id: 1, name: "Sim"}]}
                caption="Entregue"
                fieldName="flagEntregue"
                name="flagEntregue"
                valueDefault={valores.flagEntregue} 
            />

            <MySelectLabel
                dominio=""
                options={[{id:0, name: "Não"}, {id: 1, name: "Sim"}]}
                caption="Finalizado"
                fieldName="flagFinalizado"
                name="flagFinalizado"
                valueDefault={valores.flagPrincipal} 
            />
            
            <MyEditForm caption="Cor" name="fmsequencia" fieldName="cor" valor={valores.cor} />

            <MyButonsFormSubmit callBusca={props.callBusca} />

            </Form>
        </div>         
    )

}

export default LocalForm