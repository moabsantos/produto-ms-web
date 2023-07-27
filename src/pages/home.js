import React from 'react';
  
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  const modulosAtivos = JSON.parse(localStorage.getItem("modulosSistemaAvanca"));
  const perfilSistemaAvanca = localStorage.getItem("perfilSistemaAvanca");

  const getPermissao = (modulo, perfil) => {

    if (perfil === 0) return true

    if (!modulo) return false

    return modulo === 1 ? true : false
  }

  const modulosSistema = [
    {
      titulo: "Usuário",
      visivel: 1,
      grupos: [
        {
          titulo: "Configurações de Acesso",
          apresentacao: "Configurações de Acesso do usuário é onde será definido como e onde (ambiente) este irá acessar por padrão.",
          items:[
            {titulo: "Perfil", url: "/usuario-perfil"},
            {titulo: "Configuração", url: "/usuario-config"}
          ]
        }
      ]
    },
    {
      titulo: "Produto",
      visivel: getPermissao(modulosAtivos.produto, perfilSistemaAvanca),
      grupos: [
        {
          titulo: "Desenvolvimento",
          apresentacao: "Desenvolvimento do produto é o momento onde componentes e processos serão reunídos para formação de um novo produto. Finalizada esta etapa estará formada a Ficha Técnica.",
          items:[
            {titulo: "Produto", url: "/produto"},
            {titulo: "Grupo de Produtos", url: "/produto-grupo"},
            {titulo: "Estágio de Produção", url: "/estagio"},
            {titulo: "Setor Produtivo", url: "/setor"},
            {titulo: "Unidade de Medida", url: "/unidade-medida"}
          ]
        },
        {
          titulo: "Acompanhamento da Produção",
          apresentacao: "Acompanhamento da Produção é o módulo onde a produção será registrada e acompanhada.",
          items:[
            {titulo: "Produção Diária", url: "/producao-dia"}
          ]
        }
      ]
    },
    {
      titulo: "Comercial",
      visivel: getPermissao(modulosAtivos.comercial, perfilSistemaAvanca),
      grupos: [
        {
          titulo: "Gestão dos Clientes",
          apresentacao: "Na Gestão dos Clientes estes terão seu dados inseridos possibilitando acompanhamento para proporcionar a melhor satisfação possível.",
          items:[
            {titulo: "Cliente", url: "/cliente"}
          ]
        },
        {
          titulo: "Gestão de Vendas",
          apresentacao: "Na Gestão de Vendas espera-se formalizar negociações com os clientes por meio dos Pedidos de Venda.",
          items:[
            {titulo: "Pedido Venda", url: "/pedido-venda"},
            {titulo: "Status do Pedido Venda", url: "/pedido-status"}
          ]
        },
        {
          titulo: "Logística",
          apresentacao: "Garantir a entrega solicitada no devido tempo e qualidade combinada",
          items:[
          ]
        }
      ]
    },
    {
      titulo: "Suprimentos",
      visivel: getPermissao(modulosAtivos.suprimentos, perfilSistemaAvanca),
      grupos: [
        {
          titulo: "Gestão de Estoques",
          apresentacao: "Na Gestão dos Clientes estes terão seu dados inseridos possibilitando acompanhamento para proporcionar a melhor satisfação possível.",
          items:[
          ]
        },
        {
          titulo: "Compras",
          apresentacao: "Em Compras ocorrerá toda interação com o Fornecedor finalizando com o Pedido de Compra",
          items:[
            {titulo: "Pedido de Compra", url: "/pedido-compra"},
            {titulo: "Requisição de Compra", url: "/requisicao-compra"},
            {titulo: "Fornecedor", url: "/fornecedor"},
            {titulo: "Forma de Pagamento", url: "/forma-pagamento"}
          ]
        },
        {
          titulo: "Almoxarifado",
          apresentacao: "O Almoxarifado é a central que administra as solicitações e atendimento de materiais. Estas solicitações são chamadas de Requisições",
          items:[
            {titulo: "Requisição de Material", url: "/requisicao-almoxarifado"},
            {titulo: "Saldo em Depósito", url: "/deposito-saldo"},
            {titulo: "Depósito", url: "/deposito"}
          ]
        }
      ]
    },
    {
      titulo: "Empresa",
      visivel: getPermissao(modulosAtivos.empresa, perfilSistemaAvanca),
      grupos: [
        {
          titulo: "Cadastros Base",
          apresentacao: "Em Cadastros telas básicas referente a empresa serão disponibilizados",
          items:[
            {titulo: "Empresa", url: "/empresa"},
            {titulo: "Cidade", url: "/cidade"},
            {titulo: "UF - Estados", url: "/uf"},
            {titulo: "País", url: "/pais"}
          ]
        },
        {
          titulo: "Gestão de Acesso",
          apresentacao: "Em Segurança as permissões serão definidas garantido acesso controlado para cada funcionalidade",
          items:[
            {titulo: "Grupos de Acesso", url: "/grupo-acesso"},
            {titulo: "Permissão de Acesso", url: "/permissao-acesso"}
          ]
        }
      ]
    }
  ]

  return (
    <div className='container'>
      <div className="bd-example">
      <div className="row align-items-start">

      {modulosSistema && modulosSistema.map((modulo, idxModulo) => {
        return modulo.visivel === 1 && <div key={'moduloHome'+idxModulo} className="col-md-4 pb-3">
                <div className="card">
                  <div className="card-header">
                    <h4><i className="fa-solid fa-user" width="24" height="24"></i> {modulo.titulo}</h4>
                  </div>
                  <div className="accordion" id={'moduloAcordHome'+idxModulo}>

                  {modulo.grupos && modulo.grupos.map((grupoModulo, idxGrupo) => {
                      return <div key={'modulo'+ idxModulo +'GrupoHome'+idxGrupo} className="accordion-item">
                              <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={'#modulo'+ idxModulo +'Grupo'+ idxGrupo +'HomeLinks'} aria-expanded="false" aria-controls={'modulo'+ idxModulo +'Grupo'+ idxGrupo +'HomeLinks'}>
                                  {grupoModulo.titulo}
                                </button>
                              </h2>
                              <div id={'modulo'+ idxModulo +'Grupo'+ idxGrupo +'HomeLinks'} className="accordion-collapse collapse">
                                <div className="accordion-body collapsed">
                                <p>{grupoModulo.apresentacao}</p>
                                <div className="list-group list-group-flush list-group-numbered">
                                  {grupoModulo.items && grupoModulo.items.map((itemGrupoModulo, idxItem) => {
                                    return <button key={'item'+ idxItem +'Modulo'+ idxModulo +'Grupo'+ idxGrupo +'Home'} type="button" className="list-group-item list-group-item-action" aria-current="true" onClick={ () => { navigate(itemGrupoModulo.url) } }>{itemGrupoModulo.titulo}</button>
                                  })}
                                </div>
                                </div>
                              </div>
                            </div>
                  })}

                  </div>
                </div>
              </div>
      })}


      </div>
      </div>
    </div>
  );
};
  
export default Home;