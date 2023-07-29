
import setIsLoading from '../components/spinner/spinner';
import { toast } from 'react-toastify';

export default async function getApi(props){

    const token = localStorage.getItem("tokenGoogle");

    setIsLoading({ativar: true});

    return fetch( props.url, {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      }
    })
    
    .then((response) => {
      
      setIsLoading({ativar: false});

      if (response.status === 401){

        window.location = '/auth-usuario-login'
        toast.warning('Acesso não autorizado');
        
      }else{
  
        return response.json();
  
      }

    })
    
    .catch((data) => {
      toast.error(data);
      setIsLoading({ativar: false});
   });

  }