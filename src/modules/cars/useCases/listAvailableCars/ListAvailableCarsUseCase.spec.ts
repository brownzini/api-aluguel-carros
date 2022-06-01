import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });

  it("Should be able to list all cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 1",
      description: "Car description",
      daily_rate: 205,
      license_plate: "AAA-9999",
      fine_amount: 100,
      brand: "Car Brand",
      category_id: "category_id",
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("Should be able to list all available cars by brand.", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 2",
      description: "Car description",
      daily_rate: 205,
      license_plate: "AAA-7894",
      fine_amount: 100,
      brand: "Car_brand_test",
      category_id: "category_id",
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "Car_brand_test",
    });

    expect(cars).toEqual([car]);
  });

  it("Should be able to list all available cars by name.", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 3",
      description: "Car description",
      daily_rate: 205,
      license_plate: "AAA-8789",
      fine_amount: 100,
      brand: "Car_brand_test",
      category_id: "category_id",
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: "Car 3",
    });

    expect(cars).toEqual([car]);
  });

  it("Should be able to list all available cars by category.", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 3",
      description: "Car description",
      daily_rate: 205,
      license_plate: "AAA-8789",
      fine_amount: 100,
      brand: "Car_brand_test",
      category_id: "12345",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "12345",
    });

    expect(cars).toEqual([car]);
  });
});
