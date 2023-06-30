
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
  
        return response.json();
  
      }

    })

  }