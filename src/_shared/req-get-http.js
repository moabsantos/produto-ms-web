export default async function getApi(props){

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
      
      if (response.status === 401){

        return null
        
      }else{
  
        return response.data.json();
  
      }

    })

  }