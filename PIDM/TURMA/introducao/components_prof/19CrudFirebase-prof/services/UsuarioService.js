import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'

export default class UsuarioService {

    static signIn = (auth,email,password,callback) => {

        signInWithEmailAndPassword(
            auth,
            email,
            password
        )
        .then(
            (userCredential)=>{
                console.log(userCredential)
            }
        )
        .catch(
            (error)=>{
                console.log(error.code)
            }
        )
    }

    static signUp = (auth,email,password,callback)=> {
        createUserWithEmailAndPassword(
            auth,
            email,
            password
        )
        .then(
            (userCredential)=>{
                console.log(userCredential)
            }
        )
        .catch(
            (error)=>{
                console.log(error.code)
            }
        )
    }

}