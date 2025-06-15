import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Car {
  id: string;
  brand: string;
  name: string;
  year: number;
  mileage: number;
  nextService: string;
  tires: string;
  createdAt: Date;
}

interface Store {
  cars: Car[];
  addCar: (car: Omit<Car, "id" | "createdAt">) => void;
  updateCar: (id: string, updateCar: Partial<Car>) => void;
  removeCar: (id: string) => void;
  getCarId: (id: string) => Car | undefined;
}

const useStore = create<Store>()(
  persist(
    (set, get) => ({
      cars: [],

      addCar: (carData) => {
        const newCar: Car = {
          id: crypto.randomUUID(),
          ...carData,
          createdAt: new Date(),
        };

        set((state) => ({
          cars: [...state.cars, newCar],
        }));
      },

      updateCar: (id, updatedData) => {
        set((state) => ({
          cars: state.cars.map((car) =>
            car.id === id ? { ...car, ...updatedData } : car
          ),
        }));
      },

      removeCar: (id: string) =>
        set((state) => ({
          cars: state.cars.filter((car) => car.id !== id),
        })),

      getCarId: (id: string) => {
        return get().cars.find((car) => car.id === id);
      },
    }),
    {
      name: "car-storage",
    }
  )
);

export default useStore;
