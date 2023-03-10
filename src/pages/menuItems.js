export const menuItems = [
    {
      title: 'Home',
      url: '/home',
    },

    {
      title: 'Comercial',
      url: '/',
      submenu: [
        {
          title: 'Pré-Cadastro',
          url: '/',
          submenu: [
            {
              title: 'Cliente',
              url: '/cliente'
            },
            {
              title: 'Prioridade',
              url: '/prioridade'
            },
            {
              title: 'Status Pedido',
              url: '/pedido-status'
            }
          ]
        },
        {
          title: 'Pedido de Venda',
          url: '/',
          submenu: [
            {
              title: 'Cadastro',
              url: '/pedido-venda'
            },
          ]
        },
      ]
    },


    {
      title: 'Suprimentos',
      url: '/',
      submenu: [
        {
          title: 'Pré-Cadastro',
          url: '/',
          submenu: [
            {
            title: 'Fornecedor',
            url: '/fornecedor',
            },
            {
              title: 'Forma de Pagamento',
              url: '/forma-pagamento',
              },
            {
            title: 'Produto / Serviço',
            url: '/produto',
            },
            {
            title: 'Unidade de Medida',
            url: '/unidade-medida',
            },
            {
            title: 'Depósito',
            url: '/deposito',
            }
          ]
        },
        {
          title: 'Pedido de Compra',
          url: '/',
          submenu: [
            {
              title: 'Cadastro',
              url: '/'
            },
          ]
        },
        {
          title: 'Requisição de Almoxarifado',
          url: '/',
          submenu: [
            {
              title: 'Cadastro',
              url: '/'
            },
          ]
        },
        {
          title: 'Análise de Estoque',
          url: '/',
          submenu: [
            {
              title: 'Cadastro',
              url: '/'
            },
          ]
        }
      ]
    },

    {
      title: 'Produção',
      url: '',
      submenu: [
          {
            title: 'Pré-Cadastro',
            url: '/',
            submenu: [
              {
              title: 'Estagio',
              url: '/estagio',
              },
              {
                title: 'Setor',
                url: '/setor',
              }
            ]
          },
          {
            title: 'Ordem Produção',
            url: '',
            submenu: [
              {
              title: 'Cadastro',
              url: '/ordem-producao',
              }
            ]
          }
      ],
  },

    {
      title: 'Financeiro',
      url: '/',
      submenu: [
        {
          title: 'Pré-Cadastro',
          url: '/',
          submenu: [
            {
              title: 'Tipo de Título',
              url: '/'
            },
          ]
        },
        {
          title: 'Contas a Receber',
          url: '/',
          submenu: [
            {
              title: 'Cadastro',
              url: '/'
            },
          ]
        },
        {
          title: 'Contas a Pagar',
          url: '/',
          submenu: [
            {
              title: 'Cadastro',
              url: '/'
            },
          ]
        }
      ]
    },

    {
      title: 'Contabilidade',
      url: '',
      submenu: [
          {
          title: 'Apuração Custos',
          url: '',
          submenu: [
            {
            title: 'Custos Dia',
            url: '/custos-dia',
            },
            {
            title: 'Custos Mensais',
            url: '/custos-mensais',
            }
          ]
          }
      ]
    },

    {
      title: 'Geral',
      url: '',
      submenu: [
          {
          title: 'Cadastros',
          url: '',
          submenu: [
            {
            title: 'Empresa',
            url: '/empresa',
            },
            {
              title: 'Cidade',
              url: '/cidade',
            },
            {
              title: 'UF',
              url: '/uf',
            },
            {
              title: 'País',
              url: '/pais',
            }
          ]
          }
      ]
    },

    {
      title: 'Segurança',
      url: '',
      submenu: [
          {
            title: 'Grupos de Acesso',
            url: '/grupo-acesso',
          },
          {
            title: 'Cadastro de Usuários',
            url: '/realm-user',
          },
          {
            title: 'Login',
            url: '/auth-usuario-login'
          },

          {
          title: process.env.NODE_ENV,
          url: '',
          },
          {
          title: process.env.REACT_APP_HOST_API,
          url: '',
          }
      ]
    }
  ];