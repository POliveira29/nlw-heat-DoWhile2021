import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController"
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";
import { GetLast3MessageController } from "./controllers/GetLast3MessageController";
import { ProfileUserController } from "./controllers/ProfileUserController";

const router = Router();

/**
 *  O método handle possui dois parâmetros req,res. Mas como ele está sendo
 * utilizado dentro da rota ele irá funcionar como se fosse um midleware,
 * então não é preciso passar os parâmentros, porquê automaticamente o 
 * express ele consegue fazer isso.
 */

router.post("/authenticate", new AuthenticateUserController().handle)
router.post(
    "/messages", 
    ensureAuthenticated, 
    new CreateMessageController().handle
)
router.get("/messages/last3", new GetLast3MessageController().handle)
router.get("/profile",ensureAuthenticated, new ProfileUserController().handle)

export {router}