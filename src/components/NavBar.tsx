import { BellDotIcon } from "lucide-react";
import { useState } from "react";

export default function NavBar() {
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <div className="flex justify-between items-center p-4 w-full rounded-r-lg">
      <div className="flex flex-col">
        <h1 className="text-lg font-medium text-neutral-900">Bonjour,</h1>
        <h2 className="text-md text-neutral-600">HiroFr</h2>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-xl font-medium text-neutral-600">
          {new Date().toLocaleDateString("fr-FR", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </div>
      <div>
        <BellDotIcon color="black" className="cursor-pointer" onClick={toggleNotifications} />
      </div>
      {showNotifications && (
        <div className="card absolute top-14 right-0 m-4 w-96 bg-white shadow-md rounded-lg">
          <div className="card-body">
            <h2 className="card-title">Notifications</h2>
            <div className="rounded-lg bg-neutral-100 p-4 mb-4">
              <h1 className="text-lg font-semibold">Pneu à changer</h1>
              <p className="italic text-neutral-700">
                L'été arrive, pensez à vérifier vos pneus.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
