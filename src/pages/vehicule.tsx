import { useParams } from 'react-router';
import useStore from '../store/store';

export default function Vehicule() {
  const { id } = useParams<{ id: string }>();
  const carGet = useStore((state => state.cars));
  const carId = carGet.find(car => car.id === id);
  
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Page Véhicule</h1>
      <p className="text-gray-600">Cette page est dédiée à la gestion du véhicule {carId?.brand}.</p>
    </div>
  );
}