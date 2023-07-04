import { useEffect } from 'react'

import getApi from '../_shared/req-get-http';
import postApi from '../_shared/req-post-http';

const Header = () => {

  const urlImage = `${process.env.REACT_APP_HOST_API}/auth/profile`
  const urlRealmUser = `${process.env.REACT_APP_HOST_API}/realm-user`
  //const [picture, setPicture] = useState(null)
  //const [emailUser, setEmailUser] = useState(null)

  useEffect(() => {

    getApi({ url: urlImage }).then((resp) => {
      if (resp){
        //setPicture(resp.picture)
        //setEmailUser(resp.email)
        postApi({url: urlRealmUser, body: {email: resp.email}})
      }
    })

  }, [urlImage, urlRealmUser])

  return (
  <header>
    <div className="px-3 py-2 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
          <div className="bi d-block mb-1" style={{textAlign: "center"}}><i className="fa-solid fa-signal fa-2x" width="24" height="24"></i></div>
          </a>

          <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <a href="/home" className="nav-link text-white">
                <div className="bi d-block mb-1" style={{textAlign: "center"}}><i className="fa-solid fa-house fa-2x" width="24" height="24"></i></div>
                Home
              </a>
            </li>
            <li>
              <a href="/auth-usuario-login" className="nav-link text-white">
                <div className="bi d-block mb-1" style={{textAlign: "center"}}><i className="fa-solid fa-door-open fa-2x" width="24" height="24"></i></div>
                Sair
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="px-3 py-2 border-bottom mb-3">
      <div className="container d-flex flex-wrap justify-content-center">
        <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto">

        </form>

        <div className="text-end">

        </div>
      </div>
    </div>
  </header>
  );
};

export default Header;