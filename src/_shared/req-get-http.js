import { toast } from 'react-toastify';

export default async function getApi(props){

    if (props.setSpinnerAtivo) props.setSpinnerAtivo(true);

    const token = localStorage.getItem("tokenGoogle");

    return fetch( props.url, {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      }
    })
    
    .then((response) => {
      
      if (props.setSpinnerAtivo) props.setSpinnerAtivo(false);
      
      if (response.status === 401){

        window.location = '/auth-usuario-login'
        toast.warning('Acesso não autorizado')
        
      }else{
        return response.json()
      }

    })
    
    .catch((data) => {
      toast.error(data);
      if (props.setSpinnerAtivo) props.setSpinnerAtivo(false);
    });

  }