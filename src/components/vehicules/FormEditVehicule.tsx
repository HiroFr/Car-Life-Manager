import { useState } from "react";
import useStore from "../../store/store";

interface CarProps {
  id: string;
  brand: string;
  name: string;
  year: number;
  mileage: number;
  nextService: string;
  tires: string;
  createdAt: Date;
}

interface FormEditVehiculeProps {
  car: CarProps;
  onClose?: () => void;
}

export default function FormEditVehicule({ car, onClose }: FormEditVehiculeProps) {
  const [brand, setBrand] = useState(car.brand);
  const [name, setName] = useState(car.name);
  const [year, setYear] = useState(car.year);
  const [mileage, setMileage] = useState(car.mileage);
  const [nextService, setNextService] = useState(car.nextService);
  const [tires, setTires] = useState(car.tires);
  const editCar = useStore((state) => state.updateCar);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    editCar(car.id, {
      brand,
      name,
      year,
      mileage,
      nextService,
      tires,
      createdAt: car.createdAt,
    });

    // reset form fields
    setBrand("");
    setName("");
    setYear(0);
    setMileage(0);
    setNextService("");
    setTires("");
    onClose?.();
  };
  return (
    <div className="flex flex-col items-center mx-auto my-4 w-fit p-4 rounded-lg">
      <h1 className="text-xl font-semibold">Modifier un véhicule</h1>
      <div className="flex flex-col space-y-4 mt-4">
        <div>
          <label htmlFor="brand">Marque</label>
          <input
            type="text"
            id="brand"
            className="input w-full bg-white border border-2 border-neutral-300 rounded-lg"
            placeholder="Entrez la marque du véhicule"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="name">Nom du véhicule</label>
          <input
            type="text"
            id="name"
            className="input w-full bg-white border border-2 border-neutral-300 rounded-lg"
            placeholder="Entrez le nom du véhicule"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="year">Année</label>
          <input
            type="number"
            id="year"
            className="input w-full bg-white border border-2 border-neutral-300 rounded-lg"
            placeholder="Entrez l'année"
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="mileage">Kilométrage (en km)</label>
          <input
            type="number"
            id="mileage"
            className="input w-full bg-white border border-2 border-neutral-300 rounded-lg"
            placeholder="Entrez le kilométrage"
            value={mileage}
            onChange={(e) => setMileage(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="nextService">Prochaine révision</label>
          <input
            type="date"
            id="nextService"
            className="input w-full bg-white border border-2 border-neutral-300 rounded-lg"
            placeholder="Entrez la date de la prochaine révision"
            value={nextService}
            onChange={(e) => setNextService(e.target.value)}
          />
        </div>
          <label className="select w-full bg-white border border-2 border-neutral-300 rounded-lg" htmlFor="tires">
            <span className="label">Type de pneus</span>
            <select
              id="tires"
              value={tires}
              onChange={(e) => setTires(e.target.value)}
            >
              <option value="">Sélectionner le type de pneus</option>
              <option value="été">Été</option>
              <option value="hiver">Hiver</option>
              <option value="toutes saisons">Toutes saisons</option>
            </select>
          </label>
      </div>
      <button
        className="btn btn-primary mt-4 w-full rounded-lg cursor-pointer"
        onClick={handleSubmit}
      >
        Enregistrer
      </button>
    </div>
  );
}
