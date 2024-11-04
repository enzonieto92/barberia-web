
import { Timestamp } from 'firebase-admin/firestore';
import firestore from './firestoreConfig';
import { collection, getDocs } from 'firebase/firestore';

// Variable para almacenar en memoria los datos de los turnos
let turnoscache: { id: string; descripcion: string; fecha_y_hora: Timestamp;  nombre: string; servicios: string[]; }[] | null = null;

// Función para obtener los datos de Firestore
export async function ObtenerTurnos() {


  try {
    const querySnapshot = await getDocs(collection(firestore, 'turnos'));
    turnoscache = querySnapshot.docs.map((doc) => {
      const data = doc.data() as { id: string; descripcion: string; fecha_y_hora: Timestamp;  nombre: string; servicios: string[]; };
      const { id, ...restData } = data;
      return { id: doc.id, ...restData };
    });
    return turnoscache;
  } 
  catch (error) {
    console.error('Error al obtener los turnos:', error);
    return [];
  }
}
