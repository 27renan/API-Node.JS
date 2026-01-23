import { Router, Response, response } from 'express';
import { CreateUserContrller } from './controllers/user/CreateUserController';

const router = Router();

router.post('/users', new CreateUserContrller().handle);

export { router };
