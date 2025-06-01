function StatCard() {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 rounded-lg">
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
        Résumé du véhicule
      </h2>
      <div className="mt-4">
        <div className="flex items-center space-x-2 mb-4">
          <p className="text-neutral-700 dark:text-neutral-300">DACIA</p>
          <p className="text-neutral-700 dark:text-neutral-300">Sandero Stepway</p>
          <p className="text-neutral-700 dark:text-neutral-300">2022</p>
        </div>
        <p className="text-neutral-700 dark:text-neutral-300">
          Kilométrage : 12,345 km
        </p>
        <p className="text-neutral-700 dark:text-neutral-300">
          Consommation : 5.6 L/100 km
        </p>
        <p className="text-neutral-700 dark:text-neutral-300">
          Prochaine révision : 31/05/2025
        </p>
      </div>
    </div>
  );
}

function NotificationCard() {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 rounded-lg">
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
        Notifications
      </h2>
      <div className="mt-4">
        <div className="rounded-lg bg-neutral-100 dark:bg-neutral-900 p-4 mb-4">
          <h1 className="text-lg font-semibold">Pneu à changer</h1>
          <p className="italic text-neutral-700 dark:text-neutral-300">L'été arrive, pensez à vérifier vos pneus.</p>
        </div>
        <p className="text-neutral-700 dark:text-neutral-300">
          Aucune notification pour le moment.
        </p>
      </div>
    </div>
  );
}

function HistoryCard() {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 rounded-lg">
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
        Historique des services
      </h2>
      <div className="mt-4">
        <p className="text-neutral-700 dark:text-neutral-300">
          Aucune entrée pour le moment.
        </p>
      </div>
    </div>
  );
}

function CheckupCard() {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 rounded-lg">
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
        Prochain contrôle technique
      </h2>
      <div className="mt-4">
        <p className="text-neutral-700 dark:text-neutral-300">
          Votre prochain contrôle technique est prévu pour le 15/08/2025.
        </p>
      </div>
    </div>
  );
}

export { NotificationCard, StatCard, HistoryCard, CheckupCard };
