export default async function postApi(props){

    const token = localStorage.getItem("tokenGoogle");

    if (props.setSpinnerAtivo) props.setSpinnerAtivo(true);

    return await fetch(
      props.url, 
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        },
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(props.body)
      }
    ).then(response => {
      
      if (props.setSpinnerAtivo) props.setSpinnerAtivo(false);

      return response.json()
    });

}
