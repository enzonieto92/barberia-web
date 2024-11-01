
import firestore from '../lib/firestoreConfig';
import { collection, getDocs } from 'firebase/firestore';

// Variable para almacenar en memoria los datos de los servicios
let serviciosCache: { id: string; servicio: string; precio: number }[] | null = null;

// Función para obtener los datos de Firestore
export async function obtenerServicios() {
  // Si ya hemos cargado los datos, devuélvelos directamente
  if (serviciosCache) return serviciosCache;

  try {
    const querySnapshot = await getDocs(collection(firestore, 'servicios'));
    serviciosCache = querySnapshot.docs.map((doc) => {
      const data = doc.data() as { servicio: string; precio: number };
      return { id: doc.id, ...data };
    });
    return serviciosCache;
  } catch (error) {
    console.error('Error al obtener los servicios:', error);
    return [];
  }
}
