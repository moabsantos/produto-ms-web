export default async function getApi(props){

    const token = localStorage.getItem("tokenGoogle");
      
    const response = await fetch( props.url, {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      }
    });
  
    if (response.status === 401){

      return null
      
    }else{

      const data = await response.json();
      return data

    }

  }