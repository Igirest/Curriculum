import {db} from "@/firebase";
import {collection, query, getDocs} from "firebase/firestore";

export const getDocuments = async (uid = 'datos') =>{
    let temp = [];
    const datosRef = collection(db, uid);
    const consulta = query (datosRef);
    const resultadoConsulta = await getDocs(consulta);
    resultadoConsulta.forEach (
        (fila)=> {
            temp.push(fila.data());
        }
    );
return temp; 
}
