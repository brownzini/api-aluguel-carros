import { Router } from "express";

import { ResetPasswordUserController } from "@modules/accounts/useCases/resetPasswordUser/ResetPasswordUserController";
import { SendForgotPassordMailController } from "@modules/accounts/useCases/sendForgotPasswordMail/SendForgotPassordMailController";

const passwordRoutes = Router();

const sendForgotPasswordMailController = new SendForgotPassordMailController();
const resetPasswordUserController = new ResetPasswordUserController();

passwordRoutes.post("/forgot", sendForgotPasswordMailController.handle);
passwordRoutes.post("/reset", resetPasswordUserController.handle);

export { passwordRoutes };
