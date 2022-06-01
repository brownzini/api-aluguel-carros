import { Request, Response } from "express";
import { container } from "tsyringe";

import { SendForgotPasswordMailUseCase } from "./SendForgotPassordMailUseCase";

class SendForgotPassordMailController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const sendForgotPassordMailUseCase = container.resolve(
      SendForgotPasswordMailUseCase
    );

    await sendForgotPassordMailUseCase.execute(email);

    return response.send();
  }
}

export { SendForgotPassordMailController };
