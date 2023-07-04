import React from 'react';
  
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className='container'>
      <div className="bd-example">
      {/* 
      
      <p className="Display-4">
      <img src='ico.png' alt='' />
      <strong>Produto Que Avança</strong> é a solução que tem por desafio simplificar todos os processos de sua Indústria
      </p>
      
      */}

      
      <div className="row align-items-start">



      <div className="col-md-4 pb-3">
        <div className="card">
          <div className="card-header">
          <h4><i className="fa-solid fa-user" width="24" height="24"></i> Usuário</h4>
          </div>
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#usuario-perfilacesso" aria-expanded="false" aria-controls="usuario-perfilacesso">
                  Configurações de Acesso
                </button>
              </h2>
              <div id="usuario-perfilacesso" className="accordion-collapse collapse">
                <div className="accordion-body collapsed">

                <p><strong>Configurações de Acesso</strong> do usuário é onde será definido como e onde (ambiente) este irá acessar por padrão.</p>

                <div className="list-group list-group-flush list-group-numbered">
                  <button type="button" className="list-group-item list-group-item-action" aria-current="true" onClick={ () => { navigate("/usuario-perfil") } }>Perfil</button>
                </div>

                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                  Planejamento da Produção
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                  Acompanhamento da Produção
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="col-md-4 pb-3">
        <div className="card">
          <div className="card-header">
          <h4><i className="fa-solid fa-tags" width="24" height="24"></i> Produto</h4>
          </div>
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                  Desenvolvimento
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse">
                <div className="accordion-body collapsed">

                <p><strong>Desenvolvimento do produto</strong> é o momento onde componentes e processos serão reunídos para formação de um novo produto. Finalizada esta etapa estará formada a Ficha Técnica.</p>

                <div className="list-group list-group-flush list-group-numbered">
                  <button type="button" className="list-group-item list-group-item-action" aria-current="true" onClick={ () => { navigate("/produto") } }>Produto</button>
                  <button type="button" className="list-group-item list-group-item-action" aria-current="true" onClick={ () => { navigate("/produto-grupo") } }>Grupo de Produtos</button>
                  <button type="button" className="list-group-item list-group-item-action" onClick={ () => { navigate("/estagio") } }>Estágio</button>
                  <button type="button" className="list-group-item list-group-item-action" onClick={ () => { navigate("/setor") } }>Setor</button>
                  <button type="button" className="list-group-item list-group-item-action" onClick={ () => { navigate("/unidade-medida") } }>Unidade de Medida</button>
                </div>

                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                  Planejamento da Produção
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                  Acompanhamento da Produção
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className="col-md-4 pb-3">
        <div className="card">
          <div className="card-header">
          <h4><i className="fa-solid fa-briefcase" width="24" height="24"></i> Comercial</h4>
          </div>
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h3 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne1" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                  Gestão dos Clientes
                </button>
              </h3>
              <div id="panelsStayOpen-collapseOne1" className="accordion-collapse collapse">
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo1" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                  Gestão das Vendas
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo1" className="accordion-collapse collapse">
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree1" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                Logística
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree1" className="accordion-collapse collapse">
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>





      <div className="col-md-4 pb-3">
        <div className="card">
          <div className="card-header">
          <h4><i className="fa-solid fa-cart-shopping" width="24" height="24"></i> Suprimentos</h4>
          </div>
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne2" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                Gestão de Estoques
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne2" className="accordion-collapse collapse">
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo2" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                  Compras
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo2" className="accordion-collapse collapse">
                <div className="accordion-body">
                  <p>Em <strong>Compras</strong> ocorrerá toda interação com o Fornecedor finalizando com o Pedido de Compra</p>

                  <div className="list-group list-group-flush list-group-numbered">
                    <button type="button" className="list-group-item list-group-item-action" aria-current="true" onClick={ () => { navigate("/pedido-compra") } }>Pedido de Compra</button>
                    <button type="button" className="list-group-item list-group-item-action" aria-current="true" onClick={ () => { navigate("/fornecedor") } }>Fornecedor</button>
                    <button type="button" className="list-group-item list-group-item-action" aria-current="true" onClick={ () => { navigate("/forma-pagamento") } }>Forma de Pagamento</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree2" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                  Almoxarifado
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree2" className="accordion-collapse collapse">
                <div className="accordion-body">
                  <p>O <strong>Almoxarifado</strong> é a central que administra as solicitações e atendimento de materiais. Estas solicitações são chamadas de Requisições</p>

                  <div className="list-group list-group-flush list-group-numbered">
                    <button type="button" className="list-group-item list-group-item-action" aria-current="true" onClick={ () => { navigate("/requisicao-almoxarifado") } }>Requisição de Material</button>
                    <button type="button" className="list-group-item list-group-item-action" aria-current="true" onClick={ () => { navigate("/deposito-saldo") } }>Saldo em Depósito</button>
                    <button type="button" className="list-group-item list-group-item-action" aria-current="true" onClick={ () => { navigate("/deposito") } }>Depósito</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>






      <div className="col-md-4 pb-3">
        <div className="card">
          <div className="card-header">
          <h4><i className="fa-solid fa-file-invoice-dollar" width="24" height="24"></i> Financeiro</h4>
          </div>
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h3 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-financeiro-pagar" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                  Contas a Pagar
                </button>
              </h3>
              <div id="panelsStayOpen-financeiro-pagar" className="accordion-collapse collapse">
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-financeiro-receber" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                  Contas a Receber
                </button>
              </h2>
              <div id="panelsStayOpen-financeiro-receber" className="accordion-collapse collapse">
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-financeiro-fluxo" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                Fluxo de Caixa
                </button>
              </h2>
              <div id="panelsStayOpen-financeiro-fluxo" className="accordion-collapse collapse">
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className="col-md-4 pb-3">
        <div className="card">
          <div className="card-header">
          <h4><i className="fa-solid fa-user-tie" width="24" height="24"></i> Fiscal</h4>
          </div>
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h3 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-fiscal-escrituracao" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                  Escrituracao
                </button>
              </h3>
              <div id="panelsStayOpen-fiscal-escrituracao" className="accordion-collapse collapse">
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-fiscal-faturamento" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                  Faturamento
                </button>
              </h2>
              <div id="panelsStayOpen-fiscal-faturamento" className="accordion-collapse collapse">
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-fiscal-obrigacoes" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                Obrigações Fiscais
                </button>
              </h2>
              <div id="panelsStayOpen-fiscal-obrigacoes" className="accordion-collapse collapse">
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className="col-md-4 pb-3">
        <div className="card">
          <div className="card-header">
          <h4><i className="fa-solid fa-chart-pie" width="24" height="24"></i> Contabil</h4>
          </div>
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h3 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-contabil-apuracao" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                  Apuração Contábil
                </button>
              </h3>
              <div id="panelsStayOpen-contabil-apuracao" className="accordion-collapse collapse">
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-contabil-lancamento" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                  Lançamentos e Saldos Contábeis
                </button>
              </h2>
              <div id="panelsStayOpen-contabil-lancamento" className="accordion-collapse collapse">
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-contabil-obrigacoes" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                Obrigações Contábeis
                </button>
              </h2>
              <div id="panelsStayOpen-contabil-obrigacoes" className="accordion-collapse collapse">
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>






        <div className="col-md-4 pb-3">
          <div className="card">
            <div className="card-header">
            <h4><i className="fa-solid fa-city" width="24" height="24"></i> Empresa</h4>
            </div>
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-empresa-cadastros" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    Cadastros
                  </button>
                </h2>
                <div id="panelsStayOpen-empresa-cadastros" className="accordion-collapse collapse">
                  <div className="accordion-body">
                    <p>Em <strong>Cadastros</strong> telas básicas referente a empresa serão disponibilizados</p>

                    <div className="list-group list-group-flush list-group-numbered">
                      <button type="button" className="list-group-item list-group-item-action" aria-current="true" onClick={ () => { navigate("/empresa") } }>Empresa</button>
                      <button type="button" className="list-group-item list-group-item-action" aria-current="true" onClick={ () => { navigate("/cidade") } }>Cidades</button>
                      <button type="button" className="list-group-item list-group-item-action" aria-current="true" onClick={ () => { navigate("/uf") } }>UF</button>
                      <button type="button" className="list-group-item list-group-item-action" aria-current="true" onClick={ () => { navigate("/pais") } }>País</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-empresa-seguranca" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    Segurança
                  </button>
                </h2>
                <div id="panelsStayOpen-empresa-seguranca" className="accordion-collapse collapse">
                  <div className="accordion-body">
                    <p>Em <strong>Segurança</strong> as permissões serão definidas garantido acesso controlado para cada funcionalidade</p>

                    <div className="list-group list-group-flush list-group-numbered">
                      <button type="button" className="list-group-item list-group-item-action" aria-current="true" onClick={ () => { navigate("/grupo-acesso") } }>Grupo de Acesso</button>
                      <button type="button" className="list-group-item list-group-item-action" aria-current="true" onClick={ () => { navigate("/permissao-acesso") } }>Permissão de Acesso</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-empresa-software" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    Disponibilidade de Software
                  </button>
                </h2>
                <div id="panelsStayOpen-empresa-software" className="accordion-collapse collapse">
                  <div className="accordion-body">
                    <p>O <strong>Almoxarifado</strong> é a central que administra as solicitações e atendimento de materiais. Estas solicitações são chamadas de Requisições</p>

                    <div className="list-group list-group-flush list-group-numbered">
                      <button type="button" className="list-group-item list-group-item-action" aria-current="true" onClick={ () => { navigate("/requisicao-almoxarifado") } }>Requisição de Material</button>
                      <button type="button" className="list-group-item list-group-item-action" aria-current="true" onClick={ () => { navigate("/deposito") } }>Depósito de Materiais</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>





      </div>



      </div>
    </div>
  );
};
  
export default Home;