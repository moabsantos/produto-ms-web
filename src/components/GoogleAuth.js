import { useEffect, useRef, useState } from 'react'

const loadScript = (src) =>
  new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve()
    const script = document.createElement('script')
    script.src = src
    script.onload = () => resolve()
    script.onerror = (err) => reject(err)
    document.body.appendChild(script)
  })

const GoogleAuth = () => {


    const googleButton = useRef(null);
    const [urlImgUsuario, setUrlImgUsuario] = useState()
  
    useEffect(() => {
      const src = 'https://accounts.google.com/gsi/client'
      const id = "261098791460-nb8bh29kujifks89ri8teahav0k141qt.apps.googleusercontent.com"
      
  
      loadScript(src).then(() => {
          /*global google*/

          google.accounts.id.initialize({
            client_id: id,
            callback: handleCredentialResponse,
          })

          google.accounts.id.renderButton(
            googleButton.current, 
            { type: "icon", theme: 'outline', size: 'large' } 
          )

        })
        .catch(console.error)
  
      return () => {
        const scriptTag = document.querySelector(`script[src="${src}"]`)
        if (scriptTag) document.body.removeChild(scriptTag)
      }

    }, [])
  
    async function handleCredentialResponse(response) {

        localStorage.setItem("tokenGoogle", response.credential);
/*
        let bufferObj = Buffer.from(response.credential, "base64");
        let decodedString = bufferObj.toString("utf8");
        console.log(decodedString)

        const responsePayload = decodeJwtResponse(response.credential);
        console.log("ID: " + responsePayload.sub);
        console.log('Full Name: ' + responsePayload.name);
        console.log('Given Name: ' + responsePayload.given_name);
        console.log('Family Name: ' + responsePayload.family_name);
        console.log("Image URL: " + responsePayload.picture);
        console.log("Email: " + responsePayload.email);

*/
        setUrlImgUsuario("*")

        const urlImage = `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${response.credential}`

        const resp = await fetch( urlImage, {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            }
        })
        


            if (resp){
                setUrlImgUsuario("ok")
            }


      }
  
    return (
      <>
        <div ref={googleButton}></div>
        {urlImgUsuario && (<h4>Login Realizado com Sucesso</h4>)}
        {urlImgUsuario && (<a href={'/'}>Home</a>)}
      </>
    )
  }
  
  export default GoogleAuth