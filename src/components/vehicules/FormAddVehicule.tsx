import { useState } from "react";

export default function FormAddVehicule() {
  const [marque, setMarque] = useState("");
  const [nom, setNom] = useState("");
  const [annee, setAnnee] = useState("");
  const [kilometrage, setKilometrage] = useState("");
  const [prochaineRevision, setProchaineRevision] = useState("");
  const [typePneus, setTypePneus] = useState("");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Logique pour enregistrer le véhicule
    console.log({
      marque,
      nom,
      annee,
      kilometrage,
      prochaineRevision,
      typePneus,
    });
  };
  return (
    <div className="flex flex-col items-center mx-auto my-4 w-fit bg-white dark:bg-neutral-800 border border-neutral-200 p-4 rounded-lg">
        <h1 className="text-xl font-semibold">Ajouter un véhicule</h1>
      <div className="flex flex-col space-y-4 mt-4">
        <div>
          <label htmlFor="marque">Marque</label>
          <input
            type="text"
            id="marque"
            className="border border-neutral-200 rounded-lg p-2 w-full"
            placeholder="Entrez la marque du véhicule"
            value={marque}
            onChange={(e) => setMarque(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="nom">Nom du véhicule</label>
          <input
            type="text"
            id="nom"
            className="border border-neutral-200 rounded-lg p-2 w-full"
            placeholder="Entrez le nom du véhicule"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="annee">Année de fabrication</label>
          <input
            type="number"
            id="annee"
            className="border border-neutral-200 rounded-lg p-2 w-full"
            placeholder="Entrez l'année de fabrication"
            value={annee}
            onChange={(e) => setAnnee(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="kilometrage">Kilométrage (en km)</label>
          <input
            type="number"
            id="kilometrage"
            className="border border-neutral-200 rounded-lg p-2 w-full"
            placeholder="Entrez le kilométrage"
            value={kilometrage}
            onChange={(e) => setKilometrage(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="prochaineRevision">Prochaine révision</label>
          <input
            type="date"
            id="prochaineRevision"
            className="border border-neutral-200 rounded-lg p-2 w-full"
            placeholder="Entrez la date de la prochaine révision"
            value={prochaineRevision}
            onChange={(e) => setProchaineRevision(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="typePneus">Type de pneus</label>
          <select
            id="typePneus"
            className="border border-neutral-200 rounded-lg p-2 w-full"
            value={typePneus}
            onChange={(e) => setTypePneus(e.target.value)}
          >
            <option value="">Sélectionner le type de pneus</option>
            <option value="été">Été</option>
            <option value="hiver">Hiver</option>
            <option value="toutes saisons">Toutes saisons</option>
          </select>
        </div>
      </div>
      <button
        className="bg-neutral-800 hover:bg-neutral-700 text-white font-bold mt-4 py-2 px-4 rounded-lg cursor-pointer"
        onClick={handleSubmit}
      >
        Enregistrer
      </button>
    </div>
  );
}
