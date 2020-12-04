import { useEffect } from "react" 
import { useHistory } from "react-router-dom";
import {goToLogin} from "../routes/condinator"

export const useProtectPage = () => {
    const history = useHistory();

    //Se o usuário não estiver logado ele é redirecionado para o login, se não vai para o feed

    useEffect(() => {
        const token = window.localStorage.getItem("token")

        if (!token) {
            goToLogin(history);
        }

    }, [history]);
}

