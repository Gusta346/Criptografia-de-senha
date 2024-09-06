import { useRef } from "react"
import Cliente from '../components/Cliente'

const Login = () =>{

    // Hook - useRef=el retorna uma referencia a um elemento 
    // ou componente sem ser renderizado novamente

    const usuario =useRef();
    const senha =useRef();

    //pegando os dados do usuario e senha e guardando na seção
    const getUsuario = sessionStorage.getItem("usuario")
    const getSenha = sessionStorage.getItem("senha")

    //Criando a função handleLogin
    const HandleLogin =()=>{
        if(usuario.current.value =="Admin" && senha.current.value =="123456"){
            alert ("Seja bem vindo ao site")

            //Criando um token de autenticação
            let token =
                Math.random().toString(16).substring(2)+
                Math.random().toString(16).substring(2)

            sessionStorage.setItem("usuario","Admin")            
            sessionStorage.setItem("senha",token)            
        }
        else{
            alert("Usuario/senha inválidos")
        }
    }

    return(
        <section>
            {/* usuando condição ternaria para chamar o componente cliente */}

            {getUsuario && getSenha ?(
                <Cliente/>
            ):

            <form onSubmit={HandleLogin}>
                <p>
                    Usuario:
                    <input type="text" placeholder="Digite seu Usuario:" ref={usuario}/>
                </p>
                <p>
                    Senha:
                    <input type="password" placeholder="Digite sua senha:" ref={senha} />
                </p>
                <button type="submit">Entrar</button>
            </form>
            }
        </section>

        
    )
}

export default Login