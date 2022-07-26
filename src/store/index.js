import { defineStore } from 'pinia';
import { db } from '@/firebase';
import { collection, query, doc, getDoc, getDocs } from 'firebase/firestore';
import { getDocuments } from '@/store/firestore'

export const useStorePerfil = defineStore('perfil',{
    state:() => {
        return {
            datosPersonales: {
                nombre: 'sin nombre',
                apellido1: '',
                apellido2: '',
                fechanacimiento: null
            },
            // estudios:{
            //     nombre: '',
            //     periodo:'',
            //     titulo:'',

            // },
            cursos: '',
            estudios: '',
            experiencia: '',
        }

    },

    actions: {
        async setDatosPersonales() {
            const docRef = doc (db, 'datospersonales', '824776' );
            const docCaptura = await getDoc(docRef);
            if (docCaptura.exists()){
                console.log("document data:", docCaptura.data());
                this.datosPersonales = docCaptura.data();
            }
            else {
                console.log("Nos such document");
            }
        },
        async setDatoscurriculum (){
            if (this.cursos.length<1){
                this.cursos= await getDocuments('cursos');
                this.experiencia = await getDocuments('experiencia');
                this.estudios = await getDocuments('estudios');
            }
        }
         ,
         async setEstudios() {
             const docRef = doc (db, 'estudios', 'YTPxWCGt3dzmRQfQDXix');
             const docCaptura = await getDoc(docRef);
             if (docCaptura.exists()){
                 console.log("document data:", docCaptura.data());
                 this.estudios = docCaptura.data();
             }
             else {
                 console.log("Nos such document");
             }
         }
    }
})
