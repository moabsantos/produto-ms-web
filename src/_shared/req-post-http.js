export default async function postApi(props){

    const token = localStorage.getItem("tokenGoogle");

    await fetch(props.url, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    },
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(props.body)
  });

}
