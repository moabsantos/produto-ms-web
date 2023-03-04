import { useEffect, useState } from 'react'
import NavbarL from "../components/NavbarL";

import { Link } from 'react-router-dom';
import getApi from '../_shared/req-get-http';
import postApi from '../_shared/req-post-http';
import AuthUsuarioLogin from '../pages/auth-usuario/auth-usuario-login';

const Header = () => {

  const urlImage = `${process.env.REACT_APP_HOST_API}/auth/profile`
  const urlRealmUser = `${process.env.REACT_APP_HOST_API}/realm-user`
  const [picture, setPicture] = useState(null)
  const [emailUser, setEmailUser] = useState(null)

  useEffect(() => {

    getApi({ url: urlImage }).then((resp) => {
      if (resp){
        setPicture(resp.picture)
        setEmailUser(resp.email)
        postApi({url: urlRealmUser, body: {email: resp.email}})
      }
    })

  }, [urlImage, urlRealmUser])

  return (
    <header>
      <div className="nav-area">

      {emailUser && (
        <>
          <Link to="/" className="logo">
          {picture && (<img src={picture} alt=""/>)}
          </Link>
          <NavbarL />
        </>
      )}


      {!emailUser && (
          <AuthUsuarioLogin />
      )}

        
      </div>
    </header>
  );
};

export default Header;