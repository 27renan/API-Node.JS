import { Request, Response } from 'express';
import { CreateUserService } from '../../services/user/CreareUserService';

class CreateUserContrller {
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body; // Recupera as informações enviadas no corpo da request
    console.log({ name, email, password });

    const createUserService = new CreateUserService();
    const user = await createUserService.execute();

    res.json({ message: user });
  }
}

export { CreateUserContrller };
