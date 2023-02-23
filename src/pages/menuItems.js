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
      title: 'Configuração',
      url: '',
      submenu: [
          {
          title: 'Empresa',
          url: '/empresa',
          },
      ]
    }
  ];