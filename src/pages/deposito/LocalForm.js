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
            <MyEditForm caption="Sigla" name="fmsigla" fieldName="sigla" valor={valores.sigla} />
            <MyEditForm caption="Descrição" name="fmDescricao" fieldName="description" valor={valores.description} />

            <MySelectLabel
                dominio="empresa"
                caption="Empresa"
                fieldName="empresaId"
                name="empresa"
                valueDefault={valores.empresaId} 
            />

            <MySelectLabel
                dominio="setor"
                caption="Setor"
                fieldName="setorId"
                name="setor"
                valueDefault={valores.setorId} 
            />

            <MySelectLabel
                dominio=""
                options={[{id:0, name: "Não"}, {id: 1, name: "Sim"}]}
                caption="Principal"
                fieldName="flagPrincipal"
                name="flagPrincipal"
                valueDefault={valores.flagPrincipal} 
            />

            <MySelectLabel
                dominio=""
                options={[{id:0, name: "Não"}, {id: 1, name: "Sim"}]}
                caption="Baixa de Estoque (Consumo)"
                fieldName="flagBaixaEstoque"
                name="flagBaixaEstoque"
                valueDefault={valores.flagBaixaEstoque} 
            />

            <MySelectLabel
                dominio=""
                options={[{id:0, name: "Não"}, {id: 1, name: "Sim"}]}
                caption="Ajusta Inventário"
                fieldName="flagAjusteInventario"
                name="flagAjusteInventario"
                valueDefault={valores.flagAjusteInventario} 
            />

            <MyButonsFormSubmit callBusca={props.callBusca} />

            </Form>
        </div>         
    )

}

export default LocalForm