import React from "react";
import { useHistory } from "react-router-dom";


const LoginPage = () => {
    const history = useHistory(); 

    const goToAdmPage = () =>{
        history.push("/admin")
    }
    
  return (
    <div>
    <button onClick={goToAdmPage}>Entrar</button>
    </div>
  );
};

export default LoginPage;