import { useState } from "react";
import useStore from "../../store/store";
import MsgError from "../MsgError";

interface FormAddVehiculeProps {
  onClose?: () => void;
}

export default function FormAddVehicule({ onClose }: FormAddVehiculeProps) {
  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const [year, setYear] = useState(Number);
  const [mileage, setMileage] = useState(Number);
  const [nextService, setNextService] = useState("");
  const [tires, setTires] = useState("");
  const [error, setError] = useState("");
  const addCar = useStore((state) => state.addCar);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!brand || !name || !year || !nextService || !tires) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    if (year < 1950 ||year > new Date().getFullYear()) {
      setError("Veuillez entrer une année valide (1950 - année actuelle).");
      return;
    }
    if (mileage < 0) {
      setError("Le kilométrage ne peut pas être négatif.");
      return;
    }

    addCar({
      brand,
      name,
      year,
      mileage,
      nextService,
      tires,
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
      <h1 className="text-xl font-semibold">Ajouter un véhicule</h1>
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
              <option value="toutes_saisons">Toutes saisons</option>
            </select>
          </label>
      </div>
      <button
        className="btn btn-primary mt-4 w-full rounded-lg cursor-pointer"
        onClick={handleSubmit}
      >
        Enregistrer
      </button>
      {error && <MsgError message={error} />}
    </div>
  );
}
