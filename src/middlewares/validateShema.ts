import { NextFunction, Request, Response } from 'express';
import { ZodError, ZodType } from 'zod';

// primeira função → recebe configuração (schema)
//segunda função → executa a lógica da requisição
export const validateShema = (schema: ZodType) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await schema.parseAsync({
      body: req.body,
      query: req.query, //parâmetros da URL (?page=1)
      params: req.params, //parâmetros de rota (/users/:id)
    });

    return next();
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({
        error: 'Erro validação',
        dettails: error.issues.map((issue) => ({
          mensagem: issue.message,
        })),
      });
    }

    return res.status(500).json({
      error: 'Erro interno do servido',
    });
  }
};
