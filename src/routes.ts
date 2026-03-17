import { Router } from 'express';
import { CreateUserContrller } from './controllers/user/CreateUserController';
import { validateShema } from './middlewares/validateShema';
import { createUserSchema } from './schemas/userSchema';

const router = Router();

router.post('/users', validateShema(createUserSchema), new CreateUserContrller().handle);

export { router };
