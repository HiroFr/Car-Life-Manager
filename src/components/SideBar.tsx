import { CarIcon, PenIcon, TrashIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import useStore from "../store/store";
import TagsPneu from "./TagsPneu";
import FormAddVehicule from "./vehicules/FormAddVehicule";
import FormEditVehicule from "./vehicules/FormEditVehicule";

export default function SideBar() {
  const [openAddVehicule, setOpenAddVehicule] = useState(false);
  const [openEditVehicule, setOpenEditVehicule] = useState(false);
  const [selectedCarId, setSelectedCarId] = useState<string>("");

  const toggleAddVehicule = () => setOpenAddVehicule(!openAddVehicule);
  const handleEditVehicule = (id: string) => () => {
    setSelectedCarId(id);
    setOpenEditVehicule(!openEditVehicule);
  };

  const cars = useStore((state) => state.cars) || [];
  const deleteCar = useStore((state) => state.removeCar);

  const handleDeleteCar = (id: string) => () => {
    deleteCar(id);
  };

  return (
    <>
      <div className="flex flex-col w-100 text-black p-4 border border-r-2 border-neutral-300 rounded-l-lg h-screen max-h-screen overflow-hidden">
        <h1 className="text-xl font-semibold text-center mb-4">
          Car Life Manager
        </h1>
        <button
          className={`btn rounded-lg ${
            openAddVehicule ? "bg-red-500" : "btn-primary"
          }`}
          onClick={toggleAddVehicule}
        >
          {openAddVehicule ? "Annuler" : "Ajouter un véhicule"}
        </button>
        {openAddVehicule && (
          <FormAddVehicule onClose={() => setOpenAddVehicule(false)} />
        )}
        {openEditVehicule &&
          (() => {
            const selectedCar = cars.find((car) => car.id === selectedCarId);
            return selectedCar ? (
              <FormEditVehicule
                onClose={() => setOpenEditVehicule(false)}
                car={selectedCar}
              />
            ) : null;
          })()}
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          {cars.map((car) => (
            <Link to={`/vehicule/${car.id}`} key={car.id}>
              <div className="flex flex-col gap-2 bg-[#F5F5F4] p-2 rounded-lg mt-4 cursor-pointer hover:bg-neutral-200 transition-colors">
                <div className="flex gap-2">
                  <div className="bg-white p-4 rounded-lg flex flex-col justify-between w-5/6">
                    <div className="flex gap-2">
                      <CarIcon color="black" />
                      <p className="text-neutral uppercase font-bold">
                        {car.brand}
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-neutral">{car.name}</p>
                      <p className="text-neutral">{car.year}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 w-1/6">
                    <div
                      className="bg-blue-500 rounded-lg flex items-center justify-center p-2 h-full cursor-pointer"
                      onClick={handleEditVehicule(car.id)}
                    >
                      <PenIcon color="white" />
                    </div>
                    <div
                      className="bg-red-500 rounded-lg flex items-center justify-center p-2 h-full cursor-pointer"
                      onClick={handleDeleteCar(car.id)}
                    >
                      <TrashIcon color="white" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col bg-white p-4 rounded-lg">
                  <p className="text-neutral">Kilométrage : {car.mileage} km</p>
                  <p className="text-neutral">
                    Prochaine révision : {car.nextService}
                  </p>
                  <p className="text-neutral flex gap-2">
                    Pneus : <TagsPneu text={car.tires} />
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
