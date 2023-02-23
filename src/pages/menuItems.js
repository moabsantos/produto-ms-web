export const menuItems = [
    {
      title: 'Home',
      url: '/auth-usuario-login',
    },

    {
        title: 'Cadastro',
        url: '',
        submenu: [
            {
            title: 'Produto',
            url: '/produto',
            },
            {
            title: 'Unidade de Medida',
            url: '/unidade-medida',
            },
            {
            title: 'Estagio',
            url: '/estagio',
            },
            {
              title: 'Setor',
              url: '/setor',
            }
        ],
    },

    {
      title: 'Apuração',
      url: '',
      submenu: [
          {
          title: 'Custos Dia',
          url: '/custos-dia',
          },
      ]
    },

    {
      title: 'Geral',
      url: '',
      submenu: [
          {
          title: 'Empresa',
          url: '/empresa',
          }
      ]
    },

    {
      title: 'Suporte',
      url: '',
      submenu: [
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