
import firestore from './firestoreConfig';
import { collection, getDocs } from 'firebase/firestore';

// Variable para almacenar en memoria los datos de los servicios
let serviciosCache: { id: string; servicio: string; precio: number }[] | null = null;

// Función para obtener los datos de Firestore
export async function obtenerServicios() {

  try {
    const querySnapshot = await getDocs(collection(firestore, 'servicios'));
    return serviciosCache = querySnapshot.docs.map((doc) => {
      const data = doc.data() as { servicio: string; precio: number };
      return { id: doc.id, ...data };
    });
  } 
  catch (error) {
    console.error('Error al obtener los servicios:', error);
    return [];
  }
}
export { serviciosCache };
