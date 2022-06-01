import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListRentalsByUserUseCase } from "./ListRentalsByUserUseCase";

class ListRentalsByUseController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const listrentalsbyuseUseCase = container.resolve(ListRentalsByUserUseCase);

    const rentals = await listrentalsbyuseUseCase.execute(id);

    return response.json(rentals);
  }
}

export { ListRentalsByUseController };
