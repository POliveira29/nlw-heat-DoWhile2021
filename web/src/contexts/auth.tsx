import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

type User={
    id:string,
    name: string,
    login: string,
    avatar_url: string
}

type AuthContextData = {
    user: User | null,
    signInUrl: string,
    signOut: () => void
}

export const AuthContext = createContext({} as AuthContextData)

type AuthProvider = {
    children: ReactNode;
}

type AuthResponse = {
    token: string;
    user:{
        id:string,
        avatar_url: string,
        name: string,
        login: string
    }
}

export function AuthProvider(props: AuthProvider){
    const [user,setUser] = useState<User | null>(null)

    const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=dc4712ad4890f0e03e66`

    
    async function signIn(githubCode: string){
        const response = await api.post<AuthResponse>('authenticate', {
            code: githubCode
        })

        const { token , user } = response.data;

        localStorage.setItem('@dowhile:token', token)

        api.defaults.headers.common.authorization = `Bearer ${token}`

        setUser(user)
    }

    function signOut(){
        setUser(null)
        localStorage.removeItem('@dowhile:token')
    }

    // Usar o token salvo no localStorage para manter o usuário conectado mesmo recarregando a página
    useEffect(()=>{
        /**
         * Caso o usuário não atualize a pagina, o token tambem será enviado
         * Pra verificar se o o usuário que está fazendo a requisição está autenticado ou não
         */
        const token = localStorage.getItem('@dowhile:token')

        if (token) {
            // Passar o token no cabeçalho da requisição quando a pagina é atualizada
            api.defaults.headers.common.authorization = `Bearer ${token}`
            api.get<User>('profile').then(response =>{
                setUser(response.data)
            })
        }
    })

    useEffect(()=>{
        //Buscar a URL da aplicação
        const url = window.location.href;
        // Verifica se tem o codigo do Github
        const hasGithubCode = url.includes('?code=')

        // Se existir o código, separar o codigo da URL
        if (hasGithubCode) {
            const [urlWithoutCode, githubCode] = url.split('?code=')

            // Limpar o codigo da URL
            window.history.pushState({}, '', urlWithoutCode)

            signIn(githubCode)
        }
    }, [])


    return(
        <AuthContext.Provider value={{signInUrl, user, signOut}}>
            {props.children}
        </AuthContext.Provider>
    )
}