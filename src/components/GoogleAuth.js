import { useEffect, useRef, useState } from 'react'
import getApi from '../_shared/req-get-http';


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
            { theme: 'outline', size: 'large' } 
          )

        })
        .catch(console.error)
  
      return () => {
        const scriptTag = document.querySelector(`script[src="${src}"]`)
        if (scriptTag) document.body.removeChild(scriptTag)
      }

    }, [])
  
    function handleCredentialResponse(response) {
        localStorage.setItem("tokenGoogle", response.credential);

        const urlImage = 'https://www.googleapis.com/oauth2/v3/tokeninfo?id_token='+ response.credential
        getApi({ url: urlImage }).then(resp => {
            if (resp){
                setUrlImgUsuario(resp.picture)
            }
        })

        
    }
  
    return (
      <>
        <div ref={googleButton}></div>
        {urlImgUsuario && (<img src={urlImgUsuario} alt="user google" />)}
      </>
    )
  }
  
  export default GoogleAuth