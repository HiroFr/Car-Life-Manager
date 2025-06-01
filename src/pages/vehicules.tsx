import FormAddVehicule from "../components/vehicules/FormAddVehicule";
import { useState } from "react";

export default function Vehicule() {
  const [OpenAddVehicule, setOpenAddVehicule] = useState(false);

  const handleOpenAddVehicule = () => {
    setOpenAddVehicule(!OpenAddVehicule);
  };
  
  return (
    <>
    <div className="flex justify-between items-center mx-14 my-4">
      <h1 className="text-xl font-semibold">X Véhicules</h1>
      <button className={`${OpenAddVehicule ? "bg-red-500 hover:bg-red-400 dark:bg-red-800 dark:hover:bg-red-900" : "bg-neutral-800 hover:bg-neutral-700"} text-white font-bold py-2 px-4 rounded-lg cursor-pointer`} onClick={handleOpenAddVehicule}>
        {OpenAddVehicule ? "Annuler" : "Ajouter un véhicule"}
      </button>
    </div>
    <div>
      {OpenAddVehicule && <FormAddVehicule />}
    </div>
    <div className="mx-14 my-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-neutral-800 rounded-lg shadow">
          <thead className="bg-neutral-50 dark:bg-neutral-900">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Marque</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Nom</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Année</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Kilométrage</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Prochaine révision</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Pneus</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-neutral-800 divide-y divide-neutral-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-500">Toyota</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">Corolla</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">2020</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">45,000 km</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">15/06/2024</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">Été</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}
