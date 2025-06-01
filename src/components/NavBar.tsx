import { BellDotIcon } from "lucide-react";

export default function NavBar() {
  return (
    <div className="flex justify-between items-center bg-white dark:bg-neutral-800 p-4 w-full rounded-r-lg">
      <div className="flex flex-col">
        <h1 className="text-lg font-medium text-neutral-900 dark:text-white">Bonjour,</h1>
        <h2 className="text-md text-neutral-600 dark:text-neutral-400">HiroFr</h2>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-sm text-neutral-600 dark:text-neutral-400">
          {new Date().toLocaleDateString('fr-FR', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </span>
      </div>
      <div><BellDotIcon /></div>
    </div>
  );
}
