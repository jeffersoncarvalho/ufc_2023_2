import { getDocs, collection, addDoc } from "firebase/firestore"
import { firestoreDb } from "../firebase/firebase_config"

class EstudanteService {

    static listar = (firestoreDb,callback) => {
        getDocs(collection(firestoreDb,"estudante"))
        .then(
            (snapshot)=>{
                const estudantes = []
                snapshot.forEach(
                    (document)=>{
                        const id = document.id
                        const {nome,curso,ira} = document.data()
                        estudantes.push({id,nome,curso,ira})
                    }//document
                )//foreach
                callback(estudantes)
            }//snapshot
        )//then
        .catch(error=>console.log(error))
    }

    static criar = (firestoreDb,callback,estudante) => {
        addDoc(collection(firestoreDb,"estudante"),estudante)
        .then(
            (docRef) => {
                callback(docRef.id)
            }
        )
        .catch(error=>console.log(error))
    }

}

export default EstudanteService