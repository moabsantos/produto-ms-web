import { Form } from "react-bootstrap"
import MyEditForm from "../../layout/MyEditForm"
import MySelectLabel from "../../layout/MySelectLabel";
import MyButonsFormSubmit from "../../layout/MyButonsFormSubmit"

const LocalForm = (props) => {

    let valores = {}

    if (props.dataForm){

        valores = {
            code: props.dataForm.code,
            name: props.dataForm.name,
            unidadeMedidaId: props.dataForm.unidadeMedidaId,
            unidadeMedidaCompraId: props.dataForm.unidadeMedidaCompraId,
            description: props.dataForm.description,
            flagServico: props.dataForm.flagServico,
            produtoGrupoId: props.dataForm.produtoGrupoId
        }

    }

    return (
        <div className="container">
            <Form onSubmit={ props.salvar.bind( this ) }>

            <MyEditForm caption="Codigo" name="fmcode" fieldName="code" valor={valores.code} />
            <MyEditForm caption="Nome" name="fmnome" fieldName="name" valor={valores.name} />

            <MySelectLabel
                dominio="unidade-medida"
                caption="Unidade Medida"
                fieldName="unidadeMedidaId"
                name="unidadeMedida"
                valueDefault={valores.unidadeMedidaId} 
            />

            <MySelectLabel
                dominio="unidade-medida"
                caption="Unidade de Compra"
                fieldName="unidadeMedidaCompraId"
                name="unidadeMedidaCompra"
                valueDefault={valores.unidadeMedidaCompraId} 
            />

            <MySelectLabel
                dominio=""
                options={[{id:0, name: "Produto"}, {id: 1, name: "Serviço"}]}
                caption="Tipo"
                fieldName="flagServico"
                name="flagServico"
                valueDefault={valores.flagServico} 
            />

            <MyEditForm caption="Descrição" name="fmDescricao" fieldName="description" valor={valores.description} />

            <MySelectLabel
                dominio="produto-grupo"
                caption="Grupo Produto"
                fieldName="produtoGrupoId"
                name="produtoGrupoId"
                valueDefault={valores.produtoGrupoId} 
            />

            <MySelectLabel
                dominio="produto"
                caption="Produto Modelo Ficha Técnica"
                fieldName="itemOrigemId"
                name="itemOrigemId"
                valueDefault={valores.itemOrigemId} 
            />

            <MyButonsFormSubmit callBusca={props.callBusca} />

            </Form>
        </div>         
    )

}

export default LocalForm