import { NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

export class cookieSessionMiddlware implements NestMiddleware {
  use(req: Request, res: Response, next: any) {}
}
