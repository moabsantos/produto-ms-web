
import setIsLoading from '../components/spinner/spinner';

export default async function getApi(props){

    const token = localStorage.getItem("tokenGoogle");

    setIsLoading(true);

    return fetch( props.url, {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      }
    })
    
    .then((response) => {
      
      setIsLoading(false);

      if (response.status === 401){

        window.location = '/auth-usuario-login'
        
      }else{
  
        return response.json();
  
      }

    })
    
    .catch(() => {
      setIsLoading(false);
   });

  }