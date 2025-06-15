import useStore from "../../store/store";

function StatCard() {
  const cars = useStore((state) => state.cars);

  return (
    <div className="bg-white rounded-lg p-6 rounded-lg">
      <h2 className="text-xl font-semibold">Résumé du véhicule</h2>
      <div className="mt-4">
        <div className="flex items-center space-x-2 mb-4">
          <p className="text-neutral-700">{cars[0]?.brand || "Marque"}</p>
          <p className="text-neutral-700">{cars[0]?.name || "Nom"}</p>
          <p className="text-neutral-700">{cars[0]?.year || "Année"}</p>
        </div>
        <p className="text-neutral-700">
          Kilométrage : {cars[0]?.mileage || "Kilométrage"} km
        </p>
        <p className="text-neutral-700">Consommation : {5.0} L/100 km</p>
        <p className="text-neutral-700">
          Prochaine révision : {cars[0]?.nextService || "Prochaine révision"}
        </p>
      </div>
    </div>
  );
}

export { StatCard };
