import { getDocs, collection } from "firebase/firestore"

class AlunoService {

    static listarAlunos = (firestore,callback)=>{
        getDocs(collection(firestore,"alunos"))
        .then(
            (snapshot)=>{
                const alunos = []
                snapshot.forEach(
                    (document)=>{
                        const id = document.id
                        const {nome,curso,ira} = document.data()
                        alunos.push({id,nome,curso,ira})
                    }//document
                )//snapshot.forEach
                //acabei o laço!!
                callback(alunos)
            }//snapshot
        )
        .catch(error=>console.log(error))
    }

}

export default AlunoService