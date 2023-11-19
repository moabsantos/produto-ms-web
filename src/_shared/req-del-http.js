import { toast } from 'react-toastify';

export default async function delApi(props){

    const token = localStorage.getItem("tokenGoogle");

    return fetch( props.url, {
      method: "DELETE",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      }
    })
    
    .then((response) => {
      
      if (response.status === 401){

        window.location = '/auth-usuario-login'
        
      }else{
        
        const resp = response.json()
        
        return resp;
  
      }

    })

    .then((data) => {
      toast.warning('Solicitação de deleção para item: '+ data?.res?.id + '. Favor consultar novamente.')
    })

  }