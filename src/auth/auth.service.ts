import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async signUp(name, email, password) {
    const user = await this.prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    return user;
  }

  async signIn(email, password) {
    const [user] = await this.prisma.user.findMany({
      where: {
        email,
      },
    });

    if (password === user.password) {
      return user;
    }
  }

  async whoami(id: number) {
    return await this.prisma.user.findUnique({ where: { id } });
  }
}
